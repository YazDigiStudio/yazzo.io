"use client";

// BookingModal — investor meeting request form with date/time suggestion
import { useState } from "react";

type Props = {
  buttonLabel: string;
  buttonClassName: string;
};

const TIME_SLOTS = [
  { label: "Morning", sub: "9:00 – 12:00", value: "morning" },
  { label: "Afternoon", sub: "12:00 – 16:00", value: "afternoon" },
  { label: "Evening", sub: "16:00 – 19:00", value: "evening" },
];

export default function BookingModal({ buttonLabel, buttonClassName }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    formData.forEach((value, key) => params.append(key, value.toString()));

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    setSubmitted(true);
  };

  const close = () => {
    setIsOpen(false);
    setSubmitted(false);
    setSelectedTime("");
  };

  // Today's date in YYYY-MM-DD for min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={buttonClassName}>
        {buttonLabel}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={close}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-yazzo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yazzo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request sent!</h3>
                <p className="text-gray-500">We will be in touch to confirm your meeting.</p>
                <button
                  onClick={close}
                  className="mt-6 bg-yazzo-500 hover:bg-yazzo-600 text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Book a Meeting</h3>
                <p className="text-gray-500 text-sm mb-5">
                  Suggest a preferred time and we will confirm.
                </p>

                {/* Direct contact options */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <a
                    href="mailto:info@yazzo.io"
                    className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl px-4 py-3 text-sm text-gray-700 flex-1"
                  >
                    <svg className="w-4 h-4 text-yazzo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@yazzo.io
                  </a>
                  <a
                    href="tel:+358453306645"
                    className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl px-4 py-3 text-sm text-gray-700 flex-1"
                  >
                    <svg className="w-4 h-4 text-yazzo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +358 45 330 6645
                  </a>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-xs text-gray-400">or fill in the form</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <form
                  name="booking"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="booking" />
                  <input type="hidden" name="preferred-time" value={selectedTime} />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yazzo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yazzo-500"
                    />
                  </div>

                  {/* Date picker */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred date
                    </label>
                    <input
                      type="date"
                      name="preferred-date"
                      required
                      min={today}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yazzo-500"
                    />
                  </div>

                  {/* Time slot selector */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred time
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot.value}
                          type="button"
                          onClick={() => setSelectedTime(slot.value)}
                          className={`flex flex-col items-center py-3 px-2 rounded-xl border text-center transition-colors ${
                            selectedTime === slot.value
                              ? "border-yazzo-500 bg-yazzo-50 text-yazzo-700"
                              : "border-gray-200 hover:border-yazzo-300 text-gray-600"
                          }`}
                        >
                          <span className="text-sm font-semibold">{slot.label}</span>
                          <span className="text-xs text-gray-400 mt-0.5">{slot.sub}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us a bit about yourself and your interest..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yazzo-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yazzo-500 hover:bg-yazzo-600 text-white font-bold py-3.5 rounded-full transition-colors text-sm"
                  >
                    Send Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
