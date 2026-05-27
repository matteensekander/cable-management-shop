import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PROD_URL = 'https://cable-management-shop.onrender.com';

export async function POST(req: NextRequest) {
  const { items } = await req.json();
  const origin = req.nextUrl.origin;
  const baseUrl = origin.includes('localhost') ? PROD_URL : origin;

  const line_items = items.map((item: { name: string; price: number; quantity: number; image: string }) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        images: item.image ? [`${baseUrl}${item.image}`] : [],
      },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/cart`,
    shipping_address_collection: { allowed_countries: ['US', 'CA'] },
  });

  return NextResponse.json({ url: session.url });
}
