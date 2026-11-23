import Image from "next/image";

const projectPhotos = [
  {
    file: "Before.jpg",
    stage: "Before",
    alt: "Patchy grass between the driveway and front walkway",
  },
  {
    file: "During.jpg",
    stage: "During",
    alt: "Bare soil with a roll of sod at the edge of the walkway",
  },
  {
    file: "After.jpg",
    stage: "After",
    alt: "A green lawn with clean edges along the driveway and walkway",
  },
];

export default function ProjectGallery() {
  return (
    <section id="work" className="bg-ink text-white" aria-labelledby="work-title">
      <div className="shell section">
        <p className="eyebrow">Project photos</p>
        <h2 id="work-title" className="heading heading-rule text-yellow">Front lawn replacement</h2>
        <ol role="list" className="mt-8 grid gap-5 border-t border-white/20 pt-6 md:grid-cols-3">
          {projectPhotos.map(({ file, stage, alt }, index) => (
            <li key={file} className="relative min-w-0 pl-7 md:pl-0">
              {index < projectPhotos.length - 1 && (
                <span aria-hidden="true" className="project-timeline-connector" />
              )}
              <span
                aria-hidden="true"
                className="absolute left-0 top-[7px] size-3 rounded-full border-2 border-ink bg-yellow md:left-1/2 md:-translate-x-1/2"
              />
              <h3 className="mb-3 text-sm font-bold uppercase leading-7 tracking-wider md:mt-8 md:text-center">{stage}</h3>
              <Image
                src={`/images/${file}`}
                alt={alt}
                width={2048}
                height={1536}
                sizes="(min-width: 1280px) 371px, (min-width: 1024px) calc((100vw - 168px) / 3), (min-width: 768px) calc((100vw - 120px) / 3), (min-width: 640px) calc(100vw - 108px), calc(100vw - 76px)"
                className="aspect-[4/3] w-full object-cover"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
