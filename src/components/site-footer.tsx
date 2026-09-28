export default function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="shell flex flex-wrap items-center justify-between gap-6 py-7">
        <a href="#" className="display text-2xl text-yellow" aria-label="TNT Services home">TNT SERVICES</a>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 text-xs">
          <a className="hover:text-yellow" href="#services">Our services</a>
          <a className="hover:text-yellow" href="#work">Our work</a>
          <a className="hover:text-yellow" href="#team">Meet the team</a>
        </nav>
      </div>
    </footer>
  );
}
