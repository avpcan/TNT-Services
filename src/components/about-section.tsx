import { business } from "../content/business";

export default function AboutSection() {
  return (
    <section id="team" className="bg-moss" aria-labelledby="team-title">
      <div className="shell section grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="photo-placeholder min-h-80 bg-cream/60">[TEAM_PHOTO]</div>
        <div><p className="eyebrow">A small team with a family feel</p><h2 id="team-title" className="heading">Meet the team.</h2><p className="copy mt-6">Hi! We’re {business.name}, a small family business helping with landscaping and junk removal around {business.serviceArea}.</p><p className="copy mt-4">We like practical work, a friendly chat, and helping people make more of their space. Tell us what you have in mind — we’d love to hear about it.</p><p className="mt-5 text-sm leading-7">{business.teamIntroduction}</p></div>
      </div>
    </section>
  );
}
