import Image from "next/image";
import { business } from "../content/business";

export default function AboutSection() {
  return (
    <section id="team" className="shell section" aria-labelledby="team-title">
      <div className="grid items-center gap-8 md:grid-cols-[minmax(17rem,0.9fr)_1.3fr] md:gap-12 lg:gap-16">
        <div className="md:col-start-2 md:row-start-1">
          <h2 id="team-title" className="heading heading-rule uppercase">Meet the team</h2>
          <p className="mt-4 max-w-xl leading-relaxed sm:text-lg">{business.teamIntroduction}</p>
        </div>
        <div className="w-full max-w-[21rem] border-b-4 border-yellow bg-ink p-2 md:col-start-1 md:row-start-1 md:justify-self-center">
          <Image
            src="/images/MeetTheTeam.jpg"
            alt="Four members of the TNT Services team wearing company shirts"
            width={206}
            height={206}
            unoptimized
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
