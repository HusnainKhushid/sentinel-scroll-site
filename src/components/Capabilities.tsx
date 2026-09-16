import { useEffect, useRef } from 'react';
import { ShieldCheck, Radar, Lock, Activity } from 'lucide-react';

/* Generated section — the raw site was a single 16:9 hero. Matches its
   navy ground, glass panels, blue accents and Cinzel/Playfair display. */

const CAPS = [
  { icon: ShieldCheck, title: 'Adaptive defense', body: 'Threat models that retrain on your traffic, not last year’s signatures.' },
  { icon: Radar, title: 'Continuous watch', body: 'Every surface, every region, one pane of glass — sub-second telemetry.' },
  { icon: Lock, title: 'Zero-trust core', body: 'Identity on every request. Nothing inside the perimeter is assumed safe.' },
  { icon: Activity, title: 'Proven uptime', body: '99.99% across nine regions, with a public status history you can audit.' },
];

const STATS: [string, string][] = [
  ['4.2B', 'Threats blocked / day'],
  ['90 ms', 'Median response'],
  ['9', 'Regions'],
  ['99.99%', 'Uptime, trailing year'],
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (el.classList.add('is-in'), io.disconnect()),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Capabilities() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id="services"
      data-section="02-capabilities"
      className="sen-reveal relative w-full bg-[#070e17] px-6 py-24 sm:px-10 md:px-16 md:py-32 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.18)_0%,rgba(37,99,235,0)_70%)]" />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div data-r>
            <p className="font-outfit text-[11px] uppercase tracking-[0.28em] text-blue-300/80">
              What we defend
            </p>
            <h2 className="font-serif-display mt-5 text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl">
              Security that
              <br />
              thinks ahead
            </h2>
          </div>
          <p className="font-outfit max-w-md text-[15px] leading-relaxed text-blue-100/70" data-r>
            Sentinel is one adaptive layer across your whole estate — sensing, deciding
            and responding faster than the threats it is built to stop.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {CAPS.map(({ icon: Icon, title, body }, i) => (
            <article
              key={title}
              data-r
              style={{ transitionDelay: `${120 + i * 80}ms` }}
              className="glass-panel group flex flex-col gap-5 rounded-2xl p-6 md:p-7 transition-colors duration-300 hover:border-blue-400/60"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-300 ring-1 ring-white/15">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="font-cinzel text-lg text-white">{title}</h3>
              <p className="font-outfit text-sm leading-relaxed text-blue-100/65">{body}</p>
            </article>
          ))}
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 md:grid-cols-4">
          {STATS.map(([value, label], i) => (
            <div key={label} data-r style={{ transitionDelay: `${140 + i * 70}ms` }}>
              <dt className="font-serif-display text-3xl text-white md:text-4xl">{value}</dt>
              <dd className="font-outfit mt-2 text-[11px] uppercase tracking-[0.16em] text-blue-200/55">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
