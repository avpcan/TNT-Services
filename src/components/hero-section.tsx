import { business } from "../content/business";

export default function HeroSection() {
  return (
    <section className="bg-ink text-white" aria-labelledby="hero-title">
      <div className="shell grid items-center gap-8 py-14 sm:py-20 lg:grid-cols-[3fr_2fr] lg:py-24">
        <div>
          <h1 id="hero-title" className="display text-[clamp(2.5rem,10vw,6.8rem)] uppercase leading-[0.98] text-yellow">Big jobs.<br />Friendly faces.</h1>
          <p className="mb-7 mt-5 max-w-lg text-lg leading-snug sm:text-2xl">Property services and RV repairs in {business.serviceArea}.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a className="button" href="#contact">Contact us about your project</a>
            <a href="#services" className="py-3 font-bold underline underline-offset-8 hover:text-yellow">Explore our services</a>
          </div>
        </div>
        <div className="photo-placeholder lg:aspect-[4/3]">[HERO_PHOTO]</div>
      </div>
    </section>
  );
}
