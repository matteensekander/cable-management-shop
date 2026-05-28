export const dynamic = 'force-dynamic';

async function getSubscribers(): Promise<string[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/subscribe`,
      { cache: 'no-store' }
    );
    const data = await res.json();
    return data.subscribers ?? [];
  } catch {
    return [];
  }
}

export default async function AdminSubscribersPage() {
  const subscribers = await getSubscribers();

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <p className="text-xs uppercase tracking-widest text-[#888] mb-2">Owner Only</p>
      <h1 className="text-2xl font-bold text-[#1C1C1C] mb-1">Newsletter Subscribers</h1>
      <p className="text-sm text-[#888] mb-8">{subscribers.length} subscriber{subscribers.length !== 1 ? 's' : ''}</p>

      {subscribers.length === 0 ? (
        <p className="text-sm text-[#888]">No subscribers yet.</p>
      ) : (
        <div className="border border-[#E8E6E1] rounded-[4px] overflow-hidden">
          {subscribers.map((email, i) => (
            <div
              key={email}
              className={`px-5 py-3 text-sm text-[#1C1C1C] flex items-center gap-3 ${
                i !== 0 ? 'border-t border-[#E8E6E1]' : ''
              }`}
            >
              <span className="text-[#AAA] text-xs w-6 text-right">{i + 1}</span>
              <span>{email}</span>
            </div>
          ))}
        </div>
      )}

      <p className="mt-8 text-xs text-[#AAA]">
        Emails are stored on the server at /tmp/subscribers.json. They reset if the server restarts.
        Export them manually before redeploying.
      </p>
    </div>
  );
}
