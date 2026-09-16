/* Generated section — footer in the hero's navy/glass system. */

const COLUMNS: [string, string[]][] = [
  ['Platform', ['Threat intel', 'Zero-trust', 'Observability', 'Compliance']],
  ['Company', ['About', 'Careers', 'Newsroom', 'Contact']],
  ['Resources', ['Documentation', 'Status', 'Security', 'Trust center']],
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      data-section="03-footer"
      className="relative w-full bg-[#050a12] px-6 pt-20 pb-8 sm:px-10 md:px-16"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 max-w-xs md:col-span-1">
            <span className="font-cinzel text-xl tracking-wide text-white">SENTINEL</span>
            <p className="font-outfit mt-4 text-sm leading-relaxed text-blue-100/60">
              Adaptive security for companies that cannot afford to be caught off guard.
            </p>
          </div>
          {COLUMNS.map(([title, links]) => (
            <nav key={title} aria-label={title}>
              <h3 className="font-outfit text-[11px] uppercase tracking-[0.2em] text-blue-200/50">
                {title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-outfit text-sm text-blue-100/75 transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-outfit text-xs text-blue-200/45">© 2026 Sentinel Systems. All rights reserved.</p>
          <div className="font-outfit flex gap-6 text-xs text-blue-200/45">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">SOC 2</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
