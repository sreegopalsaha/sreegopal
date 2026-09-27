import { NAV_LINKS } from "@/constants/links";
import { LinkCard } from "@/components/LinkCard";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto px-4 pt-10 pb-8">
      <section className="border-b border-foreground pb-8">
        <div className="font-mono text-xs tracking-widest uppercase mb-4">
          Developer / Builder / Mentor
        </div>
        <h1 className="m-0 font-sans text-[clamp(3rem,14vw,5.125rem)] leading-[0.9] tracking-tighter font-bold">
          <span className="block">SREE</span>
          <span
            className="block text-transparent"
            style={{ WebkitTextStroke: "1.5px var(--color-foreground)" }}
          >
            GOPAL
          </span>
          <span className="block">SAHA.</span>
        </h1>
        <p className="font-serif max-w-md mt-7 text-lg leading-relaxed text-neutral-600 tracking-tight">
          I build things on the internet I wish existed. Sometimes useful. Sometimes weird. Always worth trying.
        </p>
      </section>

      <nav className="mt-6">
        {NAV_LINKS.map((link, index) => (
          <LinkCard key={link.title} link={link} isFirst={index === 0} />
        ))}
      </nav>

      <footer className="mt-16 pt-5 border-t border-foreground flex justify-between gap-5 font-mono text-[0.625rem] uppercase text-muted">
        <span>© 2026 Sree Gopal Saha</span>
        <span>West Bengal, India</span>
      </footer>
    </main>
  );
}
