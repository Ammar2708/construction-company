import fs from "node:fs";
import path from "node:path";
import ProjectGallery, { ProjectMedia } from "@/components/project/ProjectGallery";

function getProjectMedia(): { images: ProjectMedia[]; videos: ProjectMedia[] } {
  const publicDir = path.join(process.cwd(), "public");
  const files = fs.readdirSync(publicDir);

  const toMedia = (name: string, type: ProjectMedia["type"]): ProjectMedia => ({
    name,
    type,
    src: `/${name}`,
  });

  return {
    images: files
      .filter((name) => name.startsWith("WhatsApp Image") && /\.(jpe?g|png|webp)$/i.test(name))
      .sort((a, b) => a.localeCompare(b))
      .map((name) => toMedia(name, "image")),
    videos: files
      .filter((name) => name.startsWith("WhatsApp Video") && /\.mp4$/i.test(name))
      .sort((a, b) => a.localeCompare(b))
      .map((name) => toMedia(name, "video")),
  };
}

export default function Page() {
  const { images, videos } = getProjectMedia();

  return (
    <div className="bg-white text-black">
      <section className="grid gap-8 bg-black px-6 py-14 pt-29 text-white md:px-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
            Prime Build Portfolio
          </p>
          <h1 className="max-w-xl text-3xl font-light leading-tight md:text-5xl lg:text-6xl">
            Take a look at our <br /> recent projects
          </h1>
        </div>

        <p className="flex max-w-lg items-end text-base text-gray-400 md:text-lg">
          Explore the latest site photos and videos, where disciplined execution,
          clean detailing, and professional delivery come together.
        </p>
      </section>

      <ProjectGallery images={images} videos={videos} />
    </div>
  );
}
