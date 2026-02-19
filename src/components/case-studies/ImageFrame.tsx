import Image from "next/image";

type Props = {
  imageUrl?: string;
  alt?: string;
  onOpen?: () => void;
};

export default function ImageFrame({ imageUrl, alt = "Preview", onOpen }: Props) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 ring-1 ring-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5BFF]/60 focus-visible:ring-offset-0 transition-shadow"
      aria-label={`Open preview of ${alt}`}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
          priority={false}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-b from-white/10 to-transparent" />
      )}
      {/* Overlay */}
      <div
        className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 bg-black/35"
        style={{ transitionProperty: "opacity" }}
      >
        <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm">
          View Details
        </span>
      </div>
    </button>
  );
}
