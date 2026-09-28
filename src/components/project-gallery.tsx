export default function ProjectGallery() {
  return (
    <section id="work" className="shell section" aria-labelledby="work-title">
      <p className="eyebrow">From our workday</p><h2 id="work-title" className="heading">A little look at what we do.</h2>
      <div className="mt-10 grid gap-7 md:grid-cols-3">
        <figure><div className="photo-placeholder">[FENCE_PROJECT_PHOTO]</div><figcaption className="mt-4 text-sm">[FENCE_PROJECT_CAPTION]</figcaption></figure>
        <figure><div className="photo-placeholder bg-[#e9dfd0]">[LANDSCAPING_PROJECT_PHOTO]</div><figcaption className="mt-4 text-sm">[LANDSCAPING_PROJECT_CAPTION]</figcaption></figure>
        <figure><div className="photo-placeholder bg-[#ecd4bf]">[REMOVAL_PROJECT_PHOTO]</div><figcaption className="mt-4 text-sm">[REMOVAL_PROJECT_CAPTION]</figcaption></figure>
      </div>
    </section>
  );
}
