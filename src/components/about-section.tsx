import { business } from "../content/business";

export default function AboutSection() {
  return (
    <section id="team" className="shell grid items-center gap-8 pb-10 md:grid-cols-2" aria-labelledby="team-title">
      <div className="photo-placeholder min-h-52 bg-gradient-to-br from-[#6a6d6e] to-[#343738]">[TEAM_PHOTO]</div>
      <div>
        <p className="eyebrow">Our people</p>
        <h2 id="team-title" className="heading uppercase">Meet the team.</h2>
        <p className="mt-3 text-xl">A small family team, ready to lend a hand.</p>
        <p className="mt-5 text-sm leading-relaxed">{business.teamIntroduction}</p>
      </div>
    </section>
  );
}
