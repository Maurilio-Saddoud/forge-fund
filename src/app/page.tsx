import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const principles = [
  {
    title: "Fund access",
    body: "Donations pool into annual scholarships covering one full Claude Code or Codex Max plan.",
  },
  {
    title: "Back builders",
    body: "Applicants share what they’re building and why it matters. We prioritize clear execution intent.",
  },
  {
    title: "Show outcomes",
    body: "Recipients publish progress so donors can see what their contribution helped bring to life.",
  },
];

const stats = [
  ["$2,400", "Annual scholarship value"],
  ["1 Plan", "Per recipient"],
  ["Global", "Any age, any country"],
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06070b] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06070b]/70 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between">
          <div className="text-sm font-semibold tracking-[0.18em] text-cyan-200">FORGE FUND</div>
          <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <a href="#mission" className="hover:text-white transition">Mission</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>
          <Button href="/donate" variant="secondary" className="px-4 py-2">
            Donate
          </Button>
        </Container>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10 py-20 md:py-28">
          <div className="hero-glow" />
          <Container className="relative z-10">
            <p className="inline-flex rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cyan-100">
              ship the thing
            </p>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              Scholarships for builders who actually ship.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              Forge Fund raises money to remove tooling cost barriers. We fund annual Claude Code or Codex Max plans for high-conviction builders.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/donate">Donate to Forge Fund</Button>
              <Button href="/apply" variant="secondary">
                Apply for Scholarship
              </Button>
            </div>

            <div className="mt-14 grid gap-3 md:grid-cols-3">
              {stats.map(([value, label]) => (
                <article key={label} className="rounded-2xl border border-white/12 bg-white/5 p-5 transition duration-300 hover:bg-white/[0.08] hover:-translate-y-0.5">
                  <p className="text-3xl font-semibold tracking-tight">{value}</p>
                  <p className="mt-1 text-sm text-zinc-300">{label}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="mission" className="border-b border-white/10 py-16 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="Mission"
              title="Forge Fund exists to turn blocked potential into shipped products."
              subtitle="Great builders get stuck behind subscription cost. We unlock access and channel support toward people ready to build in public."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {principles.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition duration-300 hover:border-cyan-200/35 hover:bg-zinc-900/80">
                  <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-300">{item.body}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="how" className="border-b border-white/10 py-16 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="How it works"
              title="Simple funding loop, transparent impact."
              subtitle="Designed for clarity and conversion—donors know where money goes, recipients know what’s expected."
            />

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {[
                "Donors contribute any amount to the fund.",
                "Builders apply with project intent and execution plan.",
                "Selected recipients receive one annual scholarship.",
                "Impact stories show what got shipped.",
              ].map((step, index) => (
                <div
                  key={step}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 transition duration-300 hover:border-cyan-200/35"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200/90">Step {index + 1}</p>
                  <p className="mt-3 text-lg leading-7 text-zinc-200">{step}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="faq" className="py-16 md:py-24">
          <Container>
            <SectionHeading eyebrow="FAQ" title="Fast answers" />
            <div className="mt-10 space-y-4">
              {[
                ["Who can apply?", "Any age, any country, as long as you're actively building."],
                ["What does a scholarship cover?", "One annual Claude Code or Codex Max plan ($2,400/year value)."],
                ["Can one person get both plans?", "No. One recipient gets one plan."],
              ].map(([q, a]) => (
                <article key={q} className="rounded-2xl border border-white/10 bg-zinc-900/45 p-6">
                  <h3 className="text-lg font-medium">{q}</h3>
                  <p className="mt-2 text-zinc-300">{a}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Button href="/donate">Donate</Button>
              <Button href="/apply" variant="secondary">
                Apply
              </Button>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
