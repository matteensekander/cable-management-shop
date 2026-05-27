export interface Product {
  slug: string;
  name: string;
  price: number;
  category: 'trays' | 'ties' | 'raceways' | 'kits' | 'sleeves' | 'clips' | 'boxes';
  shortDescription: string;
  longDescription: string;
  worksWith: string[];
  image: string;
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  {
    slug: 'under-desk-cable-tray',
    name: 'Under-Desk Cable Tray',
    price: 24.99,
    category: 'trays',
    shortDescription: 'Mount your power strip and excess cables out of sight beneath your desk for a completely clean desktop.',
    longDescription: `The CableCo Under-Desk Cable Tray is the cornerstone of any organized workspace. Constructed from powder-coated steel mesh, it mounts easily under any desk surface with the included hardware — no tools required beyond a screwdriver.\n\nThe open mesh design allows cables to exit from any direction, making it adaptable to virtually any desk configuration. The tray is wide enough to hold a full-size power strip alongside bundled cables, eliminating the mess of cables pooling on the floor or hanging visibly.\n\nInstallation takes under 10 minutes. The tray holds up to 15 lbs, and the low-profile design keeps it invisible from normal viewing angles. Available in matte black to blend seamlessly with dark desks, or light grey for lighter surfaces.\n\nPerfect for standing desks, L-shaped desks, and traditional rectangular desks alike.`,
    worksWith: ['velcro-cable-tie-pack', 'adhesive-cable-clips', 'complete-desk-cable-kit'],
    image: '/images/products/under-desk-cable-tray.jpg',
    rating: 4.8,
    reviewCount: 214,
  },
  {
    slug: 'velcro-cable-tie-pack',
    name: 'Velcro Cable Tie Pack 50ct',
    price: 9.99,
    category: 'ties',
    shortDescription: 'Reusable hook-and-loop ties that bundle cables cleanly and release without a fight. The only ties you\'ll ever need.',
    longDescription: `Stop using zip ties that you have to cut every time you rearrange your setup. The CableCo Velcro Cable Tie Pack gives you 50 reusable hook-and-loop ties in a mix of lengths — 15 short (6"), 20 medium (10"), and 15 long (14") — to handle everything from thin USB cables to thick power bundles.\n\nEach tie is made from high-strength nylon with a reinforced loop end rated for thousands of open/close cycles. They won't leave adhesive residue, won't cut through cable insulation, and won't stretch out over time.\n\nThe included cable organizer pouch keeps unused ties tidy. Color: matte black, so they disappear against dark cables.\n\nUse them to bundle cables behind monitors, wrap excess cable length, secure cables to desk legs, or tie cables to cable trays. Once you start using velcro ties, you'll never go back.`,
    worksWith: ['under-desk-cable-tray', 'cable-sleeve-6ft', 'cable-management-box'],
    image: '/images/products/velcro-cable-tie-pack.jpg',
    rating: 4.9,
    reviewCount: 387,
  },
  {
    slug: 'cable-raceway-kit',
    name: 'Cable Raceway Kit',
    price: 19.99,
    category: 'raceways',
    shortDescription: 'Wall-mount channel kit that routes cables invisibly along walls, baseboards, or monitor arms.',
    longDescription: `The CableCo Cable Raceway Kit provides a clean, professional-looking solution for cables that need to travel along walls. Whether you're routing from a wall outlet to your desk, from a monitor to a computer tower, or from a standing desk base up to the desktop, this raceway makes it look intentional.\n\nThe kit includes 6 feet of snap-close raceway channel in two 36" sections, 4 corner connectors, 2 T-connectors, 8 mounting clips, and 20 adhesive strips (no drilling required). The snap-close design makes accessing cables later a breeze — no need to re-run everything.\n\nThe raceway channel is wide enough to fit up to 8 standard cables side by side. Paint-ready surface accepts any standard latex paint if you want it to match your wall color exactly.\n\nIdeal for home offices, standing desk setups, and situations where cables need to travel more than 3 feet.`,
    worksWith: ['velcro-cable-tie-pack', 'adhesive-cable-clips', 'dual-monitor-cable-kit'],
    image: '/images/products/cable-raceway-kit.jpg',
    rating: 4.6,
    reviewCount: 98,
  },
  {
    slug: 'complete-desk-cable-kit',
    name: 'Complete Desk Cable Kit',
    price: 49.99,
    category: 'kits',
    shortDescription: 'Everything you need to completely transform your desk from cable chaos to clean calm — in one box.',
    longDescription: `The CableCo Complete Desk Cable Kit is our most popular product for a reason: it's the only thing you need to completely organize a standard single-monitor or laptop desk setup.\n\nIncludes:\n• 1x Under-Desk Cable Tray\n• 1x Cable Management Box\n• 1x Velcro Cable Tie Pack (25ct)\n• 1x Adhesive Cable Clips (15ct)\n• All mounting hardware\n\nThe system is designed so each component works together. Cables from your monitor and peripherals get routed through the adhesive clips along the desk edge, bundled with the velcro ties, then disappear into the cable management box (which hides your power strip), which mounts underneath via the cable tray.\n\nIncludes our Quick-Start Setup Guide with a step-by-step diagram for the most common desk configurations. Most customers complete setup in under 30 minutes.\n\nThis is the kit we recommend to everyone setting up their desk for the first time. Buy it once, use it forever.`,
    worksWith: ['cable-raceway-kit', 'cable-sleeve-6ft', 'dual-monitor-cable-kit'],
    image: '/images/products/complete-desk-cable-kit.jpg',
    rating: 4.9,
    reviewCount: 512,
  },
  {
    slug: 'cable-sleeve-6ft',
    name: 'Cable Sleeve 6ft',
    price: 14.99,
    category: 'sleeves',
    shortDescription: 'Flexible neoprene braided sleeve bundles multiple cables into a single, clean run. Cut to any length.',
    longDescription: `The CableCo Cable Sleeve is the most satisfying cable management product we make. Feed multiple cables into the split-loom braided sleeve and they instantly transform from a tangled mess into a single, professional-looking cable run.\n\nThe 6-foot length is ideal for the distance from your desk down to the floor and across to a wall outlet. The split-loom design (a lengthwise slit) means you can add or remove cables at any point without cutting the sleeve or removing it entirely.\n\nMade from flexible neoprene-coated braided mesh that doesn't kink, crack in cold temperatures, or harden over time. The material is rated for operating temperatures from -20°C to 85°C — far beyond any office environment.\n\nDiameter: 1" when empty, expands to accommodate bundles up to 2.5" in diameter. Includes 2 velcro ties for the ends and a cable-feeding guide tool.\n\nAvailable in matte black. Can be cut with scissors to any shorter length without fraying.`,
    worksWith: ['velcro-cable-tie-pack', 'under-desk-cable-tray', 'complete-desk-cable-kit'],
    image: '/images/products/cable-sleeve-6ft.jpg',
    rating: 4.7,
    reviewCount: 163,
  },
  {
    slug: 'adhesive-cable-clips',
    name: 'Adhesive Cable Clips 30ct',
    price: 7.99,
    category: 'clips',
    shortDescription: 'Self-adhesive clips that stick to any surface and guide cables exactly where you want them — without tools.',
    longDescription: `The CableCo Adhesive Cable Clips are small but they make a massive difference. These clips stick to the underside or edge of your desk, the back of your monitor, or any other surface, and hold cables in place so they route exactly where you want them — not wherever gravity decides.\n\nThe pack includes 30 clips in 3 sizes: 10 small (fits 1-2 thin cables), 12 medium (fits 3-4 standard cables), and 8 large (fits 5-6 cables or thicker power cables).\n\nThe adhesive backing uses 3M VHB foam tape — the same adhesive used in automotive trim. It will not come off accidentally, but can be removed cleanly with a heat gun or dental floss if you ever want to reposition.\n\nThe clip design is our proprietary thumb-press release: press the top of the clip and it opens wide enough to remove cables without prying. No tools, no scratched cables.\n\nPerfect for: desk edge cable routing, monitor stand cable management, under-desk cable organization, and wall cable routing.`,
    worksWith: ['under-desk-cable-tray', 'cable-raceway-kit', 'complete-desk-cable-kit'],
    image: '/images/products/adhesive-cable-clips.jpg',
    rating: 4.5,
    reviewCount: 291,
  },
  {
    slug: 'cable-management-box',
    name: 'Cable Management Box',
    price: 29.99,
    category: 'boxes',
    shortDescription: 'Hide your power strip, surge protector, and all the cable mess inside a beautiful box that looks like it belongs on your desk.',
    longDescription: `The CableCo Cable Management Box does what everything else can't: it makes your power strip completely invisible. Feed your surge protector inside, route your cables through the side openings, and what was an eyesore becomes a clean rectangular box that looks at home on any desk.\n\nConstructed from high-density ABS plastic with a matte texture that resists fingerprints. The lid is solid — no visible seams when closed. The base has anti-slip silicone feet so it stays put even when you're plugging things in.\n\nTwo large cable ports on each end accommodate thick cable bundles. The interior dimensions fit any standard 6-outlet surge protector (up to 12" long). The exterior dimensions are 13.5" x 4.5" x 3.75".\n\nVentilation slots on the sides and bottom ensure the power strip never overheats — we designed this with an electrical engineer to ensure full safety compliance. Rated for power strips up to 1875W continuous.\n\nIncludes optional cable port covers for a completely clean look when cables exit cleanly from a single side.`,
    worksWith: ['velcro-cable-tie-pack', 'under-desk-cable-tray', 'complete-desk-cable-kit'],
    image: '/images/products/cable-management-box.jpg',
    rating: 4.8,
    reviewCount: 178,
  },
  {
    slug: 'dual-monitor-cable-kit',
    name: 'Dual Monitor Cable Kit',
    price: 39.99,
    category: 'kits',
    shortDescription: 'Purpose-built for dual monitor setups: raceway, ties, and clips specifically selected for two-monitor cable runs.',
    longDescription: `Dual monitor setups have 2x the cables — two display cables, two power cables, plus all your peripherals. The CableCo Dual Monitor Cable Kit is engineered specifically for this challenge.\n\nIncludes:\n• 1x Cable Raceway Kit (for the monitor-to-computer run)\n• 1x Velcro Cable Tie Pack (30ct)\n• 1x Adhesive Cable Clips (20ct)\n• 2x Monitor arm cable wrap straps\n• 1x Cable Sleeve (3ft — for the final run from monitors to computer)\n• All mounting hardware\n\nThe key insight of this kit: dual monitors create two separate cable sources that need to converge at a single computer. The raceway handles the wall-mounted run, the sleeve bundles the convergence point, and the ties and clips handle everything in between.\n\nIncludes our Dual Monitor Setup Guide with diagrams for the three most common dual monitor configurations: side-by-side, stacked, and asymmetric.\n\nCompatible with all monitor arm brands and freestanding monitor setups.`,
    worksWith: ['cable-management-box', 'under-desk-cable-tray', 'complete-desk-cable-kit'],
    image: '/images/products/dual-monitor-cable-kit.jpg',
    rating: 4.7,
    reviewCount: 334,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return products.filter((p) => slugs.includes(p.slug));
}
