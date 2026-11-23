import { business } from "../content/business";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-yellow" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="shell grid gap-8 py-10 lg:grid-cols-[1.8fr_1fr]">
        <div>
          <h2 id="contact-title" className="heading uppercase after:mt-4 after:block after:h-[3px] after:w-12 after:bg-red">Contact {business.name}</h2>
          <p className="copy mt-4">Tell us a bit about your project and where you&rsquo;re located.</p>
        </div>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 lg:border-l lg:border-black/30 lg:pl-8">
          <dt className="font-bold">Phone</dt>
          <dd className="wrap-anywhere">{business.phone}</dd>
          <dt className="font-bold">Facebook</dt>
          <dd><a className="underline underline-offset-4 hover:decoration-2" href={business.facebookUrl}>{business.name} on Facebook</a></dd>
          <dt className="font-bold">Service area</dt>
          <dd>{business.contactServiceArea}</dd>
        </dl>
      </div>
    </section>
  );
}
