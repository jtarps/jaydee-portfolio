"use client";
"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/gallery/work1.jpg", alt: "Work Project 1", category: "Work" },
  { src: "/gallery/travel1.jpg", alt: "Travel - Beach", category: "Travel" },
  {
    src: "/gallery/inspo1.jpg",
    alt: "Inspiration - Design",
    category: "Inspiration",
  },
];

const categories = ["All", "Work", "Travel", "Inspiration"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <p className="mb-6">
        A visual archive of my work, travels, and inspiration.
      </p>

      <div className="mb-6 flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded-full text-sm border ${
              filter === cat ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((img, idx) => (
          <div
            key={idx}
            className="cursor-pointer"
            onClick={() => setSelectedImage(img.src)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              className="w-full h-auto rounded shadow"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            className="max-w-full max-h-[90vh] rounded"
          />
        </div>
      )}
    </main>
  );
}
