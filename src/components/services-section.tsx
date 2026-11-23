import Image from "next/image";
import { serviceGroups } from "../content/services";

export default function ServicesSection() {
  return (
    <section id="services" className="shell section" aria-labelledby="services-title">
      <h2 id="services-title" className="heading heading-rule">Our services</h2>
      <div className="mt-8 grid gap-5 sm:auto-rows-fr sm:grid-cols-2 lg:grid-cols-3">
        {serviceGroups.map(({ title, photo, services }) => (
          <article key={title} className="service-card">
            <div className="relative isolate aspect-[4/3]">
              <Image
                src={`/images/${photo.file}`}
                alt={photo.alt}
                fill
                sizes="(min-width: 1280px) 371px, (min-width: 1024px) calc((100vw - 168px) / 3), (min-width: 640px) calc((100vw - 100px) / 2), calc(100vw - 48px)"
                className="-z-20 object-cover"
                style={{ objectPosition: photo.position }}
              />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-transparent from-25% via-ink/65 via-75% to-ink" />
              <h3>{title}</h3>
            </div>
            <ul role="list" className="mx-5 mb-6 mt-4 list-disc space-y-1.5 pl-5 text-white/90 marker:text-yellow sm:mx-6">
              {services.map((service) => <li key={service}>{service}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
