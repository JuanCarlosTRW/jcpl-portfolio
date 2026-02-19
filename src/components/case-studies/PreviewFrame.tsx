import Image from "next/image";

type PreviewFrameProps = {
  title: string;
  domain: string;
  screenshotUrl?: string;
  onOpen: () => void;
};

export default function PreviewFrame({ title, domain, screenshotUrl, onOpen }: PreviewFrameProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 ring-1 ring-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5BFF]/60 focus-visible:ring-offset-0 transition-shadow"
      aria-label={`Open live preview of ${title}`}
    >
      {/* Browser chrome bar */}
      <div className="absolute top-0 left-0 right-0 h-9 flex items-center gap-2 px-3 bg-black/25 backdrop-blur-[2px] border-b border-white/10 z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
        <span className="ml-2 text-[11px] text-white/55 truncate">{domain}</span>
      </div>
      {/* Main preview area */}
      <div className="absolute inset-0 top-9">
        {screenshotUrl ? (
          <Image
            src={screenshotUrl}
            alt={`${title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
            priority={false}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-white/10 to-transparent">
            {/* Optional subtle grid */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>
        )}
      </div>
      {/* Interactive overlay */}
      <div
        className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 bg-black/35"
        style={{ transitionProperty: "opacity" }}
      >
        <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm">
          Live Preview
        </span>
      </div>
    </button>
  );
}
