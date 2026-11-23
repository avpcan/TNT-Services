import Image from "next/image";
import { business } from "../content/business";

export default function AboutSection() {
  return (
    <section id="team" className="shell pb-10 sm:pb-12" aria-labelledby="team-title">
      <div className="grid border border-ink/10 bg-moss/35 md:grid-cols-[minmax(17rem,0.85fr)_1.65fr]">
        <div className="self-center px-6 py-8 sm:p-10 md:col-start-2 md:row-start-1 lg:p-12">
          <h2 id="team-title" className="heading uppercase">Meet the team</h2>
          <p className="mt-4 max-w-xl leading-relaxed sm:text-lg">{business.teamIntroduction}</p>
        </div>
        <div className="flex items-center justify-center border-t-4 border-yellow bg-ink p-3 sm:p-4 md:col-start-1 md:row-start-1 md:border-r-4 md:border-t-0">
          <Image
            src="/images/MeetTheTeam.jpg"
            alt="Four members of the TNT Services team wearing company shirts"
            width={206}
            height={206}
            unoptimized
            className="h-auto w-full max-w-80 ring-1 ring-white/20"
          />
        </div>
      </div>
    </section>
  );
}
