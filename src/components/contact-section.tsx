import { business } from "../content/business";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-yellow" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="shell grid gap-8 py-10 sm:py-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
        <div>
          <h2 id="contact-title" className="heading heading-rule uppercase">Contact us</h2>
          <p className="copy mt-4">Call to book a free quote! Tell us a bit about your project and where you&rsquo;re located.</p>
        </div>
        <dl className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-3 border-t border-ink/25 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
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
