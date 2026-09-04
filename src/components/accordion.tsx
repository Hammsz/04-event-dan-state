"use client";

import { useState, type ReactNode } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">
        Almaty, Kazakhstan
      </h2>

      <Panel
        title="Tentang"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Dengan populasi sekitar 2 juta orang, Almaty adalah kota terbesar
        di Kazakhstan. Kota ini pernah menjadi ibu kota Kazakhstan dari
        tahun 1929 hingga 1997.
      </Panel>

      <Panel
        title="Etimologi"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Nama Almaty berasal dari kata dalam bahasa Kazakh yang berkaitan
        dengan apel. Wilayah di sekitar Almaty dikenal sebagai salah satu
        daerah asal tanaman apel.
      </Panel>
    </div>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow,
}: {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onShow: () => void;
}) {
  return (
    <section className="mb-4 rounded border border-gray-300 p-4">
      <h3 className="text-lg font-bold">{title}</h3>

      {isActive ? (
        <p className="mt-2">{children}</p>
      ) : (
        <button
          onClick={onShow}
          className="mt-2 rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-700"
        >
          Tampilkan
        </button>
      )}
    </section>
  );
}