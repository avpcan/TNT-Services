import { business } from "../content/business";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-yellow" aria-labelledby="contact-title">
      <div className="shell grid gap-8 py-10 lg:grid-cols-[1.8fr_1fr]">
        <div>
          <h2 id="contact-title" className="heading uppercase after:mt-4 after:block after:h-[3px] after:w-12 after:bg-red">Let&rsquo;s take it off your list.</h2>
          <p className="mt-4 leading-relaxed">Landscaping. Junk removal. Hot tub removal. Done right, by a local family team.</p>
        </div>
        <dl className="grid gap-4 text-sm lg:border-l lg:border-black/30 lg:pl-8">
          <div className="flex items-center gap-4"><dt className="w-6 shrink-0 text-center"><span aria-hidden="true">✉</span><span className="sr-only">Preferred contact method</span></dt><dd className="break-all">{business.contactMethod}</dd></div>
          <div className="flex items-center gap-4"><dt className="w-6 shrink-0 text-center"><span aria-hidden="true">☎</span><span className="sr-only">Phone</span></dt><dd>{business.phone}</dd></div>
          <div className="flex items-center gap-4"><dt className="w-6 shrink-0 text-center"><span aria-hidden="true">@</span><span className="sr-only">Email</span></dt><dd className="break-all">{business.email}</dd></div>
          <div className="flex items-center gap-4"><dt className="w-6 shrink-0 text-center"><span aria-hidden="true">⌖</span><span className="sr-only">Service area</span></dt><dd>{business.serviceArea}</dd></div>
        </dl>
      </div>
    </section>
  );
}
