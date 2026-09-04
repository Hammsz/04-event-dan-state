"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "typing" | "submitting" | "success"
  >("typing");

  if (status === "success") {
    return <h1 className="text-xl font-bold">Jawaban benar!</h1>;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("submitting");
    setError(null);

    try {
      await submitForm(answer);
      setStatus("success");
    } catch {
      setStatus("typing");
      setError("Jawaban masih salah. Silakan coba lagi.");
    }
  }

  function handleTextareaChange(
    e: ChangeEvent<HTMLTextAreaElement>
  ) {
    setAnswer(e.target.value);
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Kuis Kota</h2>

      <p className="my-2">
        Di kota mana terdapat papan reklame yang dapat
        mengubah udara menjadi air minum?
      </p>

      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
          className="rounded border border-gray-400 p-2"
        />

        <br />

        <button
          disabled={
            answer.length === 0 || status === "submitting"
          }
          className="mt-2 rounded bg-blue-500 p-2 text-white disabled:opacity-50"
        >
          Kirim
        </button>

        {error !== null && (
          <p className="mt-2 text-red-500">{error}</p>
        )}
      </form>
    </div>
  );
}

function submitForm(answer: string) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "lima") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

export function Form_2() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  function handleFirstNameChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    setLastName(e.target.value);
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">
        Silahkan isi nama lengkap anda
      </h2>

      <label>
        Nama depan:
        <input
          value={firstName}
          onChange={handleFirstNameChange}
          className="m-2 rounded border border-gray-400 p-2"
        />
      </label>

      <br />

      <label>
        Nama belakang:
        <input
          value={lastName}
          onChange={handleLastNameChange}
          className="m-2 rounded border border-gray-400 p-2"
        />
      </label>

      <p className="mt-2">
        Nama lengkap Anda adalah:{" "}
        <b className="text-blue-600">{fullName}</b>
      </p>
    </div>
  );
}