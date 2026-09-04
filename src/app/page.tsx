"use client";

import Tombol_1, {
  Tombol_2,
  Tombol_3,
} from "@/components/button";

import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h2>Kuis Kota</h2>

      <Tombol_1 />

      <hr className="my-4" />

      <Tombol_2
        isiPesan="Ini Pesanku"
        namaTombol="Pesan"
      />

      <hr className="my-4" />

      <div
        className="bg-red-300 p-4"
        onClick={() => alert("Parent Element : Div")}
      >
        <Tombol_3
          isiPesan="Child Element : Tombol-1"
          namaTombol="Tombol-1"
        />

        <Tombol_3
          isiPesan="Child Element : Tombol-2"
          namaTombol="Tombol-2"
        />
      </div>

      <hr className="my-4" />

      <Gallery />
    </main>
  );
}