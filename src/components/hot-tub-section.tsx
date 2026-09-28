import Image from "next/image";

export default function HotTubSection() {
  return (
    <section className="bg-ink text-white" aria-labelledby="hot-tub-title">
      <div className="shell section grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="eyebrow">Hot tub removal</p>
          <h2 id="hot-tub-title" className="heading uppercase text-yellow">Yes, the hot tub too.</h2>
          <p className="copy mb-6 mt-4 max-w-sm">Old, broken, or just taking up space?<br />We&rsquo;ll remove your hot tub quickly and safely so you can get your backyard back.</p>
          <a href="#contact" className="button">Get a quote for hot tub removal <span aria-hidden="true">→</span></a>
        </div>
        <div className="photo-placeholder min-h-64">
          <Image src="/images/hot-tub.png" alt="" fill sizes="(min-width: 1280px) 560px, (min-width: 768px) 50vw, 100vw" className="object-cover opacity-40" />
          <span className="relative">[HOT_TUB_PROJECT_PHOTO]</span>
        </div>
      </div>
    </section>
  );
}
