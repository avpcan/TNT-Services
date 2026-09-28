import { business } from "../content/business";

export default function SiteHeader() {
  return (
    <header className="shell flex flex-wrap items-center justify-between gap-5 py-7">
      <a href="#" aria-label={`${business.name} home`} className="flex items-center gap-3 text-sm font-bold tracking-wide">
        <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-full bg-forest text-xl text-cream">✳</span>
        {business.name}
      </a>
      <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <a className="hover:underline" href="#services">Our services</a>
        <a className="hover:underline" href="#work">Our work</a>
        <a className="hover:underline" href="#team">Meet the team</a>
        <a className="button" href="#contact">Let’s chat <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
