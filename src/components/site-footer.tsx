import { business } from "../content/business";

export default function SiteFooter() {
  return (
    <footer className="shell flex flex-wrap items-center justify-between gap-5 py-8 text-sm"><div><p className="font-bold">{business.name}</p><p className="mt-2">Family-run landscaping & junk removal.</p></div><a href="#" className="underline underline-offset-4">Back to top ↑</a></footer>
  );
}
