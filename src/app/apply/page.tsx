import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[#06070b] text-white">
      <Container className="py-12 md:py-16">
        <Button href="/" variant="ghost" className="px-0">← Back home</Button>

        <div className="mt-6 rounded-3xl border border-white/10 bg-zinc-900/55 p-7 md:p-10">
          <SectionHeading
            eyebrow="Recipient Flow"
            title="Apply for a scholarship"
            subtitle="One recipient gets one annual plan ($2,400/year). Open globally to any age."
          />

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-zinc-300">Full name</span>
                <input className="field" type="text" />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-zinc-300">Email</span>
                <input className="field" type="email" />
              </label>
            </div>

            <label className="space-y-2 block">
              <span className="text-sm text-zinc-300">Why do you want this scholarship?</span>
              <textarea className="field min-h-28" />
            </label>

            <label className="space-y-2 block">
              <span className="text-sm text-zinc-300">What will you build with it?</span>
              <textarea className="field min-h-28" />
            </label>

            <label className="space-y-2 block">
              <span className="text-sm text-zinc-300">Why does this matter to you?</span>
              <textarea className="field min-h-28" />
            </label>

            <button type="button" className="cta-secondary w-full">
              Mock Submit Application
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
