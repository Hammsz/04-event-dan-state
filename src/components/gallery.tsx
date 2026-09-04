"use client";

import { useState } from "react";
import { sculptureList } from "@/data/article";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleNext() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    }
  }

  function handlePrevious() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  const sculpture = sculptureList[index];

  return (
    <div className="p-4">
      <div className="flex gap-2">
        <button
          onClick={handlePrevious}
          disabled={index === 0}
          className="rounded bg-gray-500 p-3 text-white disabled:opacity-50"
        >
          Artikel Sebelumnya
        </button>

        <button
          onClick={handleNext}
          disabled={index === sculptureList.length - 1}
          className="rounded bg-blue-500 p-3 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          Artikel Selanjutnya
        </button>
      </div>

      <h2 className="mt-4 text-xl">
        <i>{sculpture.name}</i> oleh {sculpture.artist}
      </h2>

      <h3>
        ({index + 1} dari {sculptureList.length})
      </h3>

      <img
        src={sculpture.url}
        alt={sculpture.alt}
        className="my-4 max-w-sm"
      />

      <p>{sculpture.description}</p>
    </div>
  );
}