import { NextRequest } from 'next/server';
import { promises as fs } from 'fs';

const FILE = '/tmp/subscribers.json';

async function readSubscribers(): Promise<string[]> {
  try {
    const data = await fs.readFile(FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Invalid email' }, { status: 400 });
  }

  const subscribers = await readSubscribers();
  if (!subscribers.includes(email)) {
    subscribers.push(email);
    await fs.writeFile(FILE, JSON.stringify(subscribers, null, 2));
  }

  return Response.json({ success: true });
}

export async function GET() {
  const subscribers = await readSubscribers();
  return Response.json({ subscribers, count: subscribers.length });
}
