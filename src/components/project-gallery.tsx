import Image from "next/image";

export default function ProjectGallery() {
  return (
    <section id="work" className="shell section" aria-labelledby="work-title">
      <p className="eyebrow">Our work</p>
      <h2 id="work-title" className="heading">A little look at what we do.</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <div className="photo-placeholder">
          <Image src="/images/landscaping.png" alt="" fill sizes="(min-width: 1280px) 370px, (min-width: 768px) 33vw, 100vw" className="object-cover opacity-40" />
          <span className="relative">[FENCE_PROJECT_PHOTO]</span>
        </div>
        <div className="photo-placeholder">
          <Image src="/images/landscaping.png" alt="" fill sizes="(min-width: 1280px) 370px, (min-width: 768px) 33vw, 100vw" className="object-cover object-right opacity-40" />
          <span className="relative">[LANDSCAPING_PROJECT_PHOTO]</span>
        </div>
        <div className="photo-placeholder">
          <Image src="/images/junk-removal.png" alt="" fill sizes="(min-width: 1280px) 370px, (min-width: 768px) 33vw, 100vw" className="object-cover opacity-40" />
          <span className="relative">[REMOVAL_PROJECT_PHOTO]</span>
        </div>
      </div>
    </section>
  );
}
