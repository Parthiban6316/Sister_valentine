import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { gallery } from "../data/content";

export function Gallery() {
  // Build a 3x3 grid (9 cells). If there are fewer than 9 items in content,
  // fill the remaining cells with gentle placeholders the user can later customize.
  const cells = Array.from({ length: 9 }, (_, index) => {
    const base = gallery.items[index];
    if (base) return base;

    return {
      id: `placeholder-${index}`,
      label: "Add your memory here",
      note: "Upload a photo and write a little note just for the two of you.",
      placeholder: true,
    };
  });

  return (
    <section
      id="gallery"
      className="relative bg-gradient-to-b from-rose-100/60 via-white to-rose-50 px-4 py-20 dark:from-rose-950/70 dark:via-black dark:to-wine-dark/80"
    >
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.h2
          className="mb-3 text-center font-display text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-rose-50"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          {gallery.title}
        </motion.h2>
        <motion.p
          className="mb-10 text-center text-sm text-slate-600 sm:text-base dark:text-rose-100/70"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          {gallery.description}
        </motion.p>

        <motion.div
          className="grid gap-6 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {cells.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18, rotate: index % 3 === 1 ? 3 : -3 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index, duration: 0.6 }}
              whileHover={{
                rotate: index % 3 === 1 ? 0 : index % 3 === 0 ? -2 : 2,
                translateY: -6,
              }}
              className="group relative aspect-[4/5] cursor-default"
            >
              <div className="absolute inset-2 rotate-[-1.5deg] rounded-3xl border border-slate-200/80 bg-slate-50/90 shadow-xl shadow-slate-300/80 transition-transform duration-300 group-hover:rotate-1.5 group-hover:shadow-2xl dark:border-rose-900/80 dark:bg-black/70 dark:shadow-black/70">
                <div className="flex h-2 border-b border-dashed border-slate-200/80 px-4 dark:border-rose-900/70">
                  <div className="mt-1 flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-300/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-300/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between p-4 pb-5">
                  {/* Image area */}
                  <div className="flex flex-1 items-center justify-center overflow-hidden rounded-2xl border border-dashed border-slate-200/70 bg-gradient-to-br from-rose-100/60 via-white to-sky-100/60 text-slate-400 dark:border-rose-900/60 dark:from-rose-950/70 dark:via-black dark:to-slate-900">
                    {item.src ? (
                      <img
                        src={item.src}
                        alt={item.label}
                        className="h-full w-full rounded-2xl object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <ImageIcon className="h-9 w-9 text-rose-300/90 dark:text-rose-400/90" />
                    )}
                  </div>
                  {/* Text content */}
                  <div className="mt-4">
                    <p className="font-display text-sm text-slate-900 dark:text-rose-50">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-600 dark:text-rose-100/70">
                      {item.note}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;

