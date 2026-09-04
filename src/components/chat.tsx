"use client";

import { useState } from "react";

const contacts = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
];

type Contact = {
  name: string;
  email: string;
};

function ContactList({
  selectedContact,
  contacts,
  onSelect,
}: {
  selectedContact: Contact;
  contacts: Contact[];
  onSelect: (contact: Contact) => void;
}) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email} className="mb-2">
            <button
              onClick={() => onSelect(contact)}
              className={`rounded px-3 py-2 text-white ${
                selectedContact.email === contact.email
                  ? "bg-blue-700"
                  : "bg-blue-500"
              }`}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Chat({ contact }: { contact: Contact }) {
  const [text, setText] = useState("");

  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={`Mengobrol dengan ${contact.name}`}
        onChange={(e) => setText(e.target.value)}
        className="h-28 w-80 rounded border border-gray-400 p-2"
      />

      <p className="mt-2">
        Mengirim pesan ke: <b>{contact.email}</b>
      </p>
    </section>
  );
}

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Messenger</h2>

      <div className="flex gap-6">
        <ContactList
          contacts={contacts}
          selectedContact={to}
          onSelect={(contact) => setTo(contact)}
        />

        <Chat key={to.email} contact={to} />
      </div>
    </div>
  );
}