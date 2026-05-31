"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeftRight, CheckCircle2, Play, Sparkles, X } from "lucide-react";

export type ProjectMedia = {
  src: string;
  name: string;
  type: "image" | "video";
};

type ProjectGalleryProps = {
  images: ProjectMedia[];
  videos: ProjectMedia[];
};

type TransformationProject = {
  title: string;
  summary: string;
  before: ProjectMedia[];
  after: ProjectMedia[];
  highlights: string[];
};

const TRANSFORMATION_PROJECTS: TransformationProject[] = [
  {
    title: "Exterior Renewal Case Study",
    summary:
      "A focused upgrade from exposed site conditions to a cleaner, sharper finished exterior with balanced detailing and a more premium street presence.",
    before: [
      { src: "/b1.jpeg", name: "b1.jpeg", type: "image" },
      { src: "/b2.jpeg", name: "b2.jpeg", type: "image" },
      { src: "/b3.jpeg", name: "b3.jpeg", type: "image" },
    ],
    after: [
      { src: "/a1.jpeg", name: "a1.jpeg", type: "image" },
      { src: "/a2.jpeg", name: "a2.jpeg", type: "image" },
    ],
    highlights: ["Surface preparation", "Clean exterior finishing", "Sharper final detailing"],
  },
  {
    title: "Patio Paving Transformation",
    summary:
      "A second project record showing the patio works from active preparation through to a clean paved finish with crisp alignment and practical outdoor flow.",
    before: [
      { src: "/1b.jpeg", name: "1b.jpeg", type: "image" },
    ],
    after: [
      { src: "/1a.jpeg", name: "1a.jpeg", type: "image" },
      { src: "/2a.jpeg", name: "2a.jpeg", type: "image" },
      { src: "/3a.jpeg", name: "3a.jpeg", type: "image" },
    ],
    highlights: ["Ground preparation", "Precision paving", "Clean outdoor finish"],
  },
  {
    title: "Outdoor Structure Upgrade",
    summary:
      "A complete exterior improvement showing the site before works and the finished result, with a stronger built form and a more refined outdoor presentation.",
    before: [
      { src: "/bb.jpeg", name: "bb.jpeg", type: "image" },
      { src: "/bb1.jpeg", name: "bb1.jpeg", type: "image" },
      { src: "/bb2.jpeg", name: "bb2.jpeg", type: "image" },
    ],
    after: [
      { src: "/a4.jpeg", name: "a4.jpeg", type: "image" },
    ],
    highlights: ["Site preparation", "Structural improvement", "Finished exterior result"],
  },
];

function ComparisonSlider({
  project,
  index,
}: {
  project: TransformationProject;
  index: number;
}) {
  const [position, setPosition] = useState(56);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-60px" }}
      className="relative overflow-hidden bg-[#111111] text-white"
    >
      <div className="relative aspect-[4/5] min-h-[380px] overflow-hidden sm:aspect-[16/12] lg:aspect-[4/5] xl:aspect-[16/11]">
        <Image
          src={project.after[0].src}
          alt={`${project.title} after`}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={project.before[Math.min(1, project.before.length - 1)].src}
            alt={`${project.title} before`}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover grayscale"
          />
        </div>

        <div
          className="pointer-events-none absolute top-0 h-full w-px bg-white"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-black/70 shadow-2xl backdrop-blur">
            <ArrowLeftRight size={20} className="text-[#D4AF37]" />
          </div>
        </div>

        <input
          aria-label={`Reveal before and after for ${project.title}`}
          type="range"
          min="18"
          max="82"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-4">
          <span className="bg-black/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur">
            Before
          </span>
          <span className="bg-[#D4AF37] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-black">
            After
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            Interactive Reveal
          </p>
          <h3 className="mt-2 text-lg font-light md:text-xl">{project.title}</h3>
        </div>
        <span className="font-serif text-2xl text-white/25">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}

function PhaseGallery({
  title,
  label,
  items,
  onOpen,
}: {
  title: string;
  label: string;
  items: ProjectMedia[];
  onOpen: (item: ProjectMedia) => void;
}) {
  return (
    <div className="border border-black/10 bg-white">
      <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
            {label}
          </p>
          <h3 className="mt-1 text-base font-light">{title}</h3>
        </div>
        <span className="font-serif text-xl text-black/25">
          {String(items.length).padStart(2, "0")}
        </span>
      </div>
      <div className={`grid grid-cols-1 gap-px bg-black/10 ${items.length > 1 ? "sm:grid-cols-3" : ""}`}>
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => onOpen(item)}
            className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden bg-[#111111] text-left"
          >
            <Image
              src={item.src}
              alt={`${title} ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 bg-black/65 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function TransformationCard({
  project,
  index,
  onOpen,
}: {
  project: TransformationProject;
  index: number;
  onOpen: (item: ProjectMedia) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-60px" }}
      className="border border-black/10 bg-[#ECEFF2] p-3 md:p-5"
    >
      <div className="mb-5 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            Case Study {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-2xl font-light leading-tight md:text-3xl">
            {project.title}
          </h3>
        </div>
        <div className="text-sm leading-relaxed text-gray-500">
          <p>{project.summary}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {project.highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white px-3 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-black">
                <CheckCircle2 size={16} className="shrink-0 text-[#D4AF37]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ComparisonSlider project={project} index={index} />
        <div className="grid content-start gap-6">
          <PhaseGallery
            title="Original site condition"
            label="Before"
            items={project.before}
            onOpen={onOpen}
          />
          <PhaseGallery
            title="Delivered finish"
            label="After"
            items={project.after}
            onOpen={onOpen}
          />
        </div>
      </div>
    </motion.article>
  );
}

function ImageLightbox({
  image,
  onClose,
}: {
  image: ProjectMedia | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!image) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 px-4 py-5 text-white md:px-8"
      role="dialog"
      aria-modal="true"
      aria-label="Full project image"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close full image"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-black md:right-8 md:top-6"
      >
        <X size={22} />
      </button>

      <div className="relative h-full w-full" onClick={(event) => event.stopPropagation()}>
        <Image
          src={image.src}
          alt={image.name}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}

export default function ProjectGallery({ images, videos }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ProjectMedia | null>(null);

  return (
    <>
      <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />

      <section className="bg-[#F5F6F8] px-6 py-14 md:px-12 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                <Sparkles size={14} />
                Project Transformation
              </div>
              <h2 className="max-w-xl text-3xl font-light leading-tight md:text-5xl">
                One project, documented from before to final finish
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
              Compare selected Prime Build transformations with interactive before and after views, plus complete project frames you can open full-screen.
            </p>
          </div>

          <div className="grid gap-8">
            {TRANSFORMATION_PROJECTS.map((project, index) => (
              <TransformationCard
                key={project.title}
                project={project}
                index={index}
                onOpen={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </section>

      

      <section className="bg-[#0A0A0A] px-6 md:px-12 py-14 text-white">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
              Project Videos
            </p>
            <h2 className="mt-3 text-2xl md:text-4xl font-light">
              Walkthroughs and site movement
            </h2>
          </div>
          <p className="text-sm text-white/45">
            {videos.length} video uploads
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {videos.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group border border-white/10 bg-white/[0.03]"
            >
              <div className="relative overflow-hidden bg-black">
                <video
                  src={item.src}
                  controls
                  preload="metadata"
                  className="aspect-video w-full object-cover"
                />
                <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 bg-black/60 px-3 py-2 backdrop-blur">
                  <Play size={14} className="text-[#D4AF37]" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/80">
                    Video {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
