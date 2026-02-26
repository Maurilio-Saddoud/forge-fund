const donorAmounts = [25, 50, 100, 250, 500];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      <main className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <header className="mb-14 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:p-12 shadow-2xl shadow-black/30">
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Forge Fund
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">ship the thing</h1>
          <p className="mt-4 max-w-2xl text-base text-zinc-300 md:text-lg">
            A scholarship initiative funding one year of Claude Code or Codex Max
            for builders who want to turn ideas into real products.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-zinc-900/70 p-6 backdrop-blur">
            <h2 className="text-2xl font-semibold">Donor Flow</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Mock checkout for now. We capture donor details and amount so impact
              can be linked to recipients later.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Name</label>
                <input
                  type="text"
                  placeholder="Ada Lovelace"
                  className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none ring-cyan-300/40 transition focus:ring"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Email</label>
                <input
                  type="email"
                  placeholder="ada@build.com"
                  className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none ring-cyan-300/40 transition focus:ring"
                />
              </div>

              <div>
                <p className="mb-2 text-sm text-zinc-300">Donation amount (USD)</p>
                <div className="grid grid-cols-3 gap-2">
                  {donorAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className="rounded-xl border border-white/15 bg-zinc-950 px-3 py-2 text-sm hover:border-cyan-300/60 hover:text-cyan-200"
                    >
                      ${amount}
                    </button>
                  ))}
                  <input
                    type="number"
                    placeholder="Custom"
                    className="col-span-3 rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm outline-none ring-cyan-300/40 transition focus:ring"
                  />
                </div>
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-black hover:bg-cyan-300"
              >
                Mock Donate
              </button>
            </form>
          </article>

          <article className="rounded-2xl border border-white/10 bg-zinc-900/70 p-6 backdrop-blur">
            <h2 className="text-2xl font-semibold">Recipient Flow</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Scholarship application intake for one annual plan per recipient
              ($2,400/year).
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Full name</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none ring-cyan-300/40 transition focus:ring"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Email</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none ring-cyan-300/40 transition focus:ring"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Why do you want this scholarship?</label>
                <textarea
                  rows={3}
                  className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none ring-cyan-300/40 transition focus:ring"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-300">What will you build with it?</label>
                <textarea
                  rows={3}
                  className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none ring-cyan-300/40 transition focus:ring"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Why does this matter to you?</label>
                <textarea
                  rows={3}
                  className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none ring-cyan-300/40 transition focus:ring"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl border border-cyan-300/50 bg-cyan-400/10 px-4 py-3 font-semibold text-cyan-100 hover:bg-cyan-400/20"
              >
                Mock Submit Application
              </button>
            </form>
          </article>
        </section>
      </main>
    </div>
  );
}
