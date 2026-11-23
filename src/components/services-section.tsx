import Image from "next/image";
import { serviceGroups } from "../content/services";

export default function ServicesSection() {
  return (
    <section id="services" className="shell section" aria-labelledby="services-title">
      <h2 id="services-title" className="heading">Our services</h2>
      <div className="mt-6 grid gap-5 sm:auto-rows-fr sm:grid-cols-2 lg:grid-cols-3">
        {serviceGroups.map(({ title, photo, services }) => (
          <article key={title} className="service-card">
            <div className="relative aspect-[4/3]">
              <Image
                src={`/images/${photo.file}`}
                alt={photo.alt}
                fill
                sizes="(min-width: 1280px) 371px, (min-width: 1024px) calc((100vw - 168px) / 3), (min-width: 640px) calc((100vw - 100px) / 2), calc(100vw - 48px)"
                className="object-cover"
                style={{ objectPosition: photo.position }}
              />
            </div>
            <div className="p-6">
              <h3>{title}</h3>
              <ul role="list" className="list-disc space-y-1 pl-5 marker:text-yellow">
                {services.map((service) => <li key={service}>{service}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
