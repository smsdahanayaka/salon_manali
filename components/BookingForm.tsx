"use client";

import { useState, type FormEvent } from "react";
import { buildWhatsappLink } from "@/lib/site-config";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [ceremonyTime, setCeremonyTime] = useState("");
  const [headcount, setHeadcount] = useState("");
  const [location, setLocation] = useState<"At Salon" | "At My Place">("At Salon");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const lines = [
      "Hi Salon Manali, I'd like to inquire about a bridal booking:",
      `Name: ${name}`,
      `Phone: ${phone}`,
      weddingDate ? `Wedding date: ${weddingDate}` : null,
      ceremonyTime ? `Ceremony time: ${ceremonyTime}` : null,
      headcount ? `Number of people: ${headcount}` : null,
      `Location: ${location}`,
      message ? `Message: ${message}` : null,
    ].filter(Boolean);

    window.open(buildWhatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const inputClasses =
    "w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none";
  const labelClasses = "mb-1 block text-sm font-medium text-charcoal/80";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
            placeholder="e.g. Sachini Perera"
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="phone">
            Phone / WhatsApp Number
          </label>
          <input
            id="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClasses}
            placeholder="e.g. 077 123 4567"
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="weddingDate">
            Wedding Date
          </label>
          <input
            id="weddingDate"
            type="date"
            value={weddingDate}
            onChange={(e) => setWeddingDate(e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="ceremonyTime">
            Ceremony Time
          </label>
          <input
            id="ceremonyTime"
            type="time"
            value={ceremonyTime}
            onChange={(e) => setCeremonyTime(e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="headcount">
            Number of People
          </label>
          <input
            id="headcount"
            value={headcount}
            onChange={(e) => setHeadcount(e.target.value)}
            className={inputClasses}
            placeholder="e.g. Bride + 3"
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="location">
            Location
          </label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value as "At Salon" | "At My Place")}
            className={inputClasses}
          >
            <option value="At Salon">At Salon</option>
            <option value="At My Place">At My Place</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="message">
          Message (optional)
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className={inputClasses}
          placeholder="Tell us anything else that would help"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-cream shadow-sm hover:bg-gold-dark sm:w-auto"
      >
        Send via WhatsApp
      </button>
      <p className="text-xs text-charcoal/50">
        This opens WhatsApp with your details filled in, ready to send.
      </p>
    </form>
  );
}
