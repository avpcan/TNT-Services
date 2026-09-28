export default function SiteHeader() {
  return (
    <header className="border-b-4 border-red bg-ink text-white">
      <div className="shell flex flex-wrap items-center justify-between gap-6 py-5">
        <a href="#" aria-label="TNT Services home" className="wordmark">TNT<br />SERVICES</a>
        <nav aria-label="Main navigation" className="order-last flex w-full flex-wrap items-center justify-between gap-x-5 gap-y-4 text-sm sm:order-none sm:w-auto sm:gap-x-10">
          <a className="hover:text-yellow" href="#services">Our services</a>
          <a className="hover:text-yellow" href="#work">Our work</a>
          <a className="hover:text-yellow" href="#team">Meet the team</a>
        </nav>
        <a className="button" href="#contact">Let&rsquo;s chat <span aria-hidden="true">→</span></a>
      </div>
    </header>
  );
}
