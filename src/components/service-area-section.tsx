import { business } from "../content/business";

export default function ServiceAreaSection() {
  return (
    <section className="shell section text-center" aria-labelledby="area-title">
      <p className="eyebrow">Close to home</p><h2 id="area-title" className="heading">Your neighbourhood.<br />Our neck of the woods.</h2><p className="mt-7 text-lg">Serving {business.serviceArea}</p><p className="copy mx-auto mt-4 max-w-lg">Not sure if we come your way? Get in touch and we’ll figure it out together.</p>
    </section>
  );
}
