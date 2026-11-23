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
    <section id="work" className="shell section" aria-labelledby="work-title">
      <p className="eyebrow">Project photos</p>
      <h2 id="work-title" className="heading">Front lawn replacement</h2>
      <ol role="list" className="mt-6 grid gap-5 border border-ink/10 bg-moss/35 p-4 sm:p-6 md:grid-cols-3">
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
              sizes="(min-width: 1280px) 354px, (min-width: 1024px) calc((100vw - 218px) / 3), (min-width: 768px) calc((100vw - 170px) / 3), (min-width: 640px) calc(100vw - 158px), calc(100vw - 110px)"
              className="aspect-[4/3] w-full object-cover"
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
