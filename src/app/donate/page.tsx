import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const amounts = [25, 50, 100, 250, 500, 1000];

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-[#06070b] text-white">
      <Container className="py-12 md:py-16">
        <Button href="/" variant="ghost" className="px-0">← Back home</Button>

        <div className="mt-6 rounded-3xl border border-white/10 bg-zinc-900/55 p-7 md:p-10">
          <SectionHeading
            eyebrow="Donor Flow"
            title="Fund a builder"
            subtitle="Mock checkout for POC. We capture donor and amount data to connect donations to shipped outcomes."
          />

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-zinc-300">Name</span>
                <input className="field" placeholder="Ada Lovelace" type="text" />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-zinc-300">Email</span>
                <input className="field" placeholder="ada@build.com" type="email" />
              </label>
            </div>

            <div>
              <p className="mb-2 text-sm text-zinc-300">Amount (USD)</p>
              <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
                {amounts.map((v) => (
                  <button key={v} type="button" className="amount-btn">
                    ${v}
                  </button>
                ))}
              </div>
              <input className="field mt-3" placeholder="Custom amount" type="number" />
            </div>

            <button type="button" className="cta-primary w-full">
              Mock Donate
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
