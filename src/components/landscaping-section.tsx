import Image from "next/image";

export default function LandscapingSection() {
  return (
    <section id="services" className="shell section" aria-labelledby="services-title">
      <p className="eyebrow">Our services</p>
      <h2 id="services-title" className="heading">A helping hand, outdoors.</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <article className="service-card">
          <Image src="/images/landscaping.png" alt="" fill sizes="(min-width: 1280px) 370px, (min-width: 768px) 33vw, 100vw" className="object-cover opacity-35" />
          <h3>Landscaping</h3>
          <p>From fences and hedges to stumps and general property cleanup, we help you create and maintain the outdoor space you want.</p>
        </article>
        <article className="service-card">
          <Image src="/images/junk-removal.png" alt="" fill sizes="(min-width: 1280px) 370px, (min-width: 768px) 33vw, 100vw" className="object-cover opacity-35" />
          <h3>Junk removal</h3>
          <p>Big or small, we clear out the junk so you can enjoy a cleaner, safer space</p>
        </article>
        <article className="service-card">
          <Image src="/images/hot-tub.png" alt="" fill sizes="(min-width: 1280px) 370px, (min-width: 768px) 33vw, 100vw" className="object-cover opacity-35" />
          <h3>Hot tub removal</h3>
          <p>Yes, we remove hot tubs! We handle the heavy lifting, so you can reclaim your backyard without the hassle.</p>
        </article>
      </div>
    </section>
  );
}
