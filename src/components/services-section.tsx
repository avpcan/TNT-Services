import { serviceGroups } from "../content/services";

export default function ServicesSection() {
  return (
    <section id="services" className="shell section" aria-labelledby="services-title">
      <h2 id="services-title" className="heading">Our services</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {serviceGroups.map(({ title, photoPlaceholder, services }) => (
          <article key={title} className="service-card">
            <div className="photo-placeholder">{photoPlaceholder}</div>
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
