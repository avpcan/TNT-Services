export default function HotTubSection() {
  return (
    <section className="shell" aria-labelledby="hot-tub-title">
      <div className="grid gap-10 rounded-[2rem] bg-forest p-8 text-cream sm:p-12 md:grid-cols-2 md:items-center">
        <div><p className="eyebrow text-peach">Yes, the hot tub too.</p><h2 id="hot-tub-title" className="heading">Reclaim your<br />little patch of peace.</h2><p className="copy mb-7 mt-6">An unused hot tub can take up a whole lot of backyard. Let’s chat about getting it out of your way.</p><a href="#contact" className="button bg-peach text-forest hover:bg-[#f8cfae]">Ask about hot tub removal <span aria-hidden="true">↗</span></a></div>
        <div className="rounded-2xl border border-cream/25 p-7"><h3 className="font-serif text-2xl">A few details help us get started</h3><ul className="mt-6 list-disc space-y-4 pl-5 text-sm leading-7"><li>A photo and the approximate size of the tub.</li><li>Where it is and what access looks like, including gates or steps.</li><li>Whether it’s drained and disconnected.</li></ul><p className="mt-6 border-t border-cream/25 pt-5 text-sm leading-7">[HOT_TUB_SERVICE_DETAILS]</p></div>
      </div>
    </section>
  );
}
