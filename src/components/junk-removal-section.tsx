export default function JunkRemovalSection() {
  return (
    <section className="shell section grid gap-8 md:grid-cols-2 md:gap-16" aria-labelledby="junk-title">
      <div><p className="eyebrow">Less stuff. More space.</p><h2 id="junk-title" className="heading">Ready to let it go?<br />We can help.</h2></div>
      <div><p className="copy">Whether it’s an old hot tub or other unwanted items taking up room, tell us what needs to go. We’ll talk through the job and confirm what we can collect.</p><p className="mt-5 text-sm leading-7">Other accepted items: [ACCEPTED_ITEMS]</p><a className="mt-6 inline-block font-bold underline decoration-forest/40 underline-offset-8" href="#contact">Ask about a pickup <span aria-hidden="true">↗</span></a></div>
    </section>
  );
}
