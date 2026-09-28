export default function LandscapingSection() {
  return (
    <section id="services" className="border-y border-forest/15 bg-white/40" aria-labelledby="landscaping-title">
      <div className="shell section">
        <p className="eyebrow">A helping hand, outdoors</p>
        <div className="grid gap-6 md:grid-cols-2 md:gap-16">
          <h2 id="landscaping-title" className="heading">Make room for a yard<br className="hidden sm:block" /> you love.</h2>
          <p className="copy">A new fence. A little more privacy. That stubborn stump out of the way. Let’s take care of the jobs that help you enjoy your space.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-3xl bg-moss p-8"><span className="text-sm" aria-hidden="true">01 /</span><h3 className="mb-3 mt-8 font-serif text-3xl">Fence building</h3><p className="copy">Give your yard a fresh boundary and a space to call your own.</p></article>
          <article className="rounded-3xl bg-moss p-8"><span className="text-sm" aria-hidden="true">02 /</span><h3 className="mb-3 mt-8 font-serif text-3xl">Stump removal</h3><p className="copy">Clear the way for your next garden idea, or simply a bit more room.</p></article>
          <article className="rounded-3xl bg-moss p-8"><span className="text-sm" aria-hidden="true">03 /</span><h3 className="mb-3 mt-8 font-serif text-3xl">Hedge planting</h3><p className="copy">Bring a little green to your outdoor space with a newly planted hedge.</p></article>
        </div>
      </div>
    </section>
  );
}
