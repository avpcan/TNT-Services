import { business } from "../content/business";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-peach" aria-labelledby="contact-title">
      <div className="shell section grid gap-10 md:grid-cols-2 md:gap-16">
        <div><p className="eyebrow">Let’s take it off your list</p><h2 id="contact-title" className="heading">Got a project in mind?<br />Say hello.</h2><p className="copy mt-6 max-w-md">Tell us what you need a hand with, where you’re located, and when you’re hoping to get started. Photos are always helpful, too.</p></div>
        <div className="rounded-3xl bg-cream/70 p-7 sm:p-9"><h3 className="font-serif text-2xl">Request a quote</h3><dl className="mt-6 space-y-5 text-sm"><div><dt className="font-bold">Best way to reach us</dt><dd className="mt-1 break-words">{business.contactMethod}</dd></div><div><dt className="font-bold">Phone</dt><dd className="mt-1">{business.phone}</dd></div><div><dt className="font-bold">Email</dt><dd className="mt-1 break-words">{business.email}</dd></div><div><dt className="font-bold">Hours</dt><dd className="mt-1">{business.hours}</dd></div></dl></div>
      </div>
    </section>
  );
}
