import Image from "next/image";
import { business } from "../content/business";

export default function HeroSection() {
  return (
    <section className="relative isolate bg-ink text-white" aria-labelledby="hero-title">
      <div className="shell relative z-10 py-12 sm:py-16 lg:grid lg:min-h-[clamp(32rem,43vw,43rem)] lg:grid-cols-[1.08fr_1fr] lg:items-center lg:py-20">
        <div className="lg:col-start-2 lg:pl-7">
          <h1 id="hero-title" className="display text-[clamp(2.75rem,12vw,6.5rem)] uppercase leading-[0.95] tracking-tight text-yellow lg:text-[clamp(4rem,7.5vw,6.5rem)]">
            {business.name}
          </h1>
          <p className="mt-5 text-xl font-bold sm:text-2xl">Big jobs. Friendly faces.</p>
          <p className="mb-7 mt-3 max-w-lg text-base leading-snug sm:text-xl">Machines and muscles to get your project done, in and around {business.serviceArea}.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a className="button" href="#contact">Contact us about your project</a>
            <a href="#services" className="py-3 font-bold underline underline-offset-8 hover:text-yellow">Explore our services</a>
          </div>
        </div>
      </div>
      <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:w-[64%] lg:after:absolute lg:after:inset-0 lg:after:bg-linear-to-r lg:after:from-transparent lg:after:from-[48%] lg:after:to-ink lg:after:to-[93%]">
        <Image
          src="/images/SkiddyBW.jpg"
          alt="TNT Services skid steer beside a tree stump"
          fill
          sizes="(min-width: 1024px) 64vw, 100vw"
          loading="eager"
          fetchPriority="high"
          className="object-cover object-[center_56%]"
        />
      </div>
    </section>
  );
}
