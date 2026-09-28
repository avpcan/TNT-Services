import { business } from "../content/business";

export default function HeroSection() {
  return (
    <section className="shell grid items-center gap-12 pb-16 pt-10 sm:pb-24 sm:pt-16 lg:grid-cols-2" aria-labelledby="hero-title">
      <div>
        <p className="eyebrow">Family-run. Ready to lend a hand.</p>
        <h1 id="hero-title" className="max-w-xl font-serif text-5xl leading-[1.04] tracking-tight sm:text-7xl">A little help.<br />A big difference.</h1>
        <p className="copy mb-8 mt-7 max-w-md">From a fresh start for your yard to finally saying goodbye to that old hot tub, we’re here to help with the heavy lifting.</p>
        <a className="button" href="#contact">Tell us about your project <span aria-hidden="true">↗</span></a>
        <p className="mt-6 text-sm">Landscaping & junk removal in {business.serviceArea}</p>
      </div>
      <div className="relative pb-6">
        <div className="photo-placeholder min-h-80 rounded-t-[8rem] sm:min-h-[28rem]"><span>[HERO_PROJECT_PHOTO]</span></div>
        <div className="absolute -bottom-1 left-5 right-5 rounded-2xl bg-peach p-5 sm:left-auto sm:right-6 sm:max-w-64">
          <p className="font-serif text-2xl">Big jobs. Friendly faces.</p>
          <p className="mt-2 text-sm leading-6">Your local family team for the outdoor to-do list.</p>
        </div>
      </div>
    </section>
  );
}
