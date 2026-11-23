import Image from "next/image";
import { business } from "../content/business";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white" aria-labelledby="hero-title">
      <div className="shell relative z-10 pb-4 pt-12 sm:pt-16 lg:grid lg:min-h-[clamp(34rem,47vw,45rem)] lg:grid-cols-[1.03fr_1fr] lg:items-center lg:py-20">
        <div className="lg:col-start-2 lg:pl-8">
          <h1 id="hero-title" className="display heading-rule text-[clamp(2.75rem,12vw,6.5rem)] uppercase leading-[0.93] tracking-tight text-yellow lg:w-min lg:text-[clamp(4rem,8.4vw,7.5rem)]">
            {business.name}
          </h1>
          <p className="mt-5 text-xl font-bold sm:text-2xl">Big jobs. Friendly faces.</p>
          <p className="mb-7 mt-3 max-w-md text-base leading-relaxed text-white/90 sm:text-xl">Machines and muscles to get your project done, in and around {business.serviceArea}.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a className="button" href="#contact">Schedule a free quote</a>
            <a href="#services" className="py-3 font-bold underline underline-offset-8 hover:text-yellow">Explore our services</a>
          </div>
        </div>
      </div>
      <div className="relative aspect-[4/3] after:absolute after:inset-0 after:bg-linear-to-b after:from-ink after:to-transparent after:to-30% sm:aspect-[16/10] lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:w-4/5 lg:after:bg-linear-to-r lg:after:from-transparent lg:after:from-30% lg:after:to-ink lg:after:to-90%">
        <Image
          src="/images/SkiddyBW.jpg"
          alt="TNT Services skid steer beside a tree stump"
          fill
          sizes="(min-width: 1024px) 80vw, 100vw"
          loading="eager"
          fetchPriority="high"
          className="object-cover object-[center_56%]"
        />
      </div>
    </section>
  );
}
