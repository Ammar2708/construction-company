"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export type ProjectMedia = {
  src: string;
  name: string;
  type: "image" | "video";
};

type ProjectGalleryProps = {
  images: ProjectMedia[];
  videos: ProjectMedia[];
};

export default function ProjectGallery({ images, videos }: ProjectGalleryProps) {
  return (
    <>
      <section className="px-6 md:px-12 py-14">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
              Complete Project Library
            </p>
            <h2 className="mt-3 text-2xl md:text-4xl font-light">
              Site progress, finishes, and delivered work
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-gray-500">
            A full visual record from the latest project uploads, presented without changing the Prime Build visual language.
          </p>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
          {images.map((item, index) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.02, 0.24) }}
              viewport={{ once: true, margin: "-40px" }}
              className="group mb-5 break-inside-avoid overflow-hidden bg-[#F5F6F8]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={`Prime Build project photo ${index + 1}`}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex items-center justify-between border-t border-black/5 px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Project Photo
                </span>
                <span className="font-serif text-sm text-black/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </motion.figure>
          ))}
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
