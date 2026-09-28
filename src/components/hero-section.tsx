import Image from "next/image";
import { business } from "../content/business";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white" aria-labelledby="hero-title">
      <Image src="/images/skid-steer.png" alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[65%_50%]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
      <div className="shell py-14 sm:py-20 lg:py-24">
        <p className="mb-6 text-xs font-bold uppercase tracking-widest after:mt-3 after:block after:h-[3px] after:w-10 after:bg-red">A local family team</p>
        <h1 id="hero-title" className="display text-[clamp(2.5rem,12.5vw,6.8rem)] uppercase leading-[0.98] text-yellow">Big jobs.<br />Friendly faces.</h1>
        <p className="mb-7 mt-5 max-w-lg text-lg leading-snug sm:text-2xl">Family-run landscaping &amp; junk removal<br className="hidden sm:block" /> in {business.serviceArea}.</p>
        <div className="flex flex-wrap items-center gap-6">
          <a className="button" href="#contact">Tell us about your project <span aria-hidden="true">→</span></a>
          <a href="#services" className="py-3 font-bold underline underline-offset-8 hover:text-yellow">Explore our services</a>
        </div>
      </div>
    </section>
  );
}
