"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Lanyard from "./Lanyard/Lanyard";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div id="contact" className="py-16 md:py-24 flex flex-col text-[#FBFBFB]">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[rgba(255,255,255,0.35)]">
            Get in Touch
          </span>
          <h2 className="font-sora font-bold text-2xl md:text-4xl text-white leading-tight">
            Let&apos;s{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3BF686, #4CA9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connect
            </span>
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-[rgba(59,246,134,0.3)] to-transparent ml-4 hidden md:block" />
      </motion.div>

      {/* Main grid: Lanyard left, Form right */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* ── LEFT: Lanyard (full) ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="h-[650px] md:h-full min-h-[550px]">
            <Lanyard position={[-1, 0, 12]} gravity={[0, -40, 0]} />
          </div>
        </motion.div>

        {/* ── RIGHT: Contact Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-3 rounded-2xl p-6 md:p-8 relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Background decoration */}
          <div
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(59,246,134,0.06), transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(76,169,255,0.06), transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <h3 className="text-lg font-bold text-white font-sora mb-1">
              Send me a message
            </h3>
            <p className="text-xs text-[rgba(255,255,255,0.4)] mb-6">
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-[rgba(255,255,255,0.35)] font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="contact-input w-full px-4 py-3 rounded-xl text-sm text-white font-sora outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-[rgba(255,255,255,0.35)] font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="contact-input w-full px-4 py-3 rounded-xl text-sm text-white font-sora outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-widest text-[rgba(255,255,255,0.35)] font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="contact-input w-full px-4 py-3 rounded-xl text-sm text-white font-sora outline-none transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  placeholder="What's this about?"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-widest text-[rgba(255,255,255,0.35)] font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="contact-input w-full px-4 py-3 rounded-xl text-sm text-white font-sora outline-none transition-all duration-300 resize-none"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 rounded-xl text-sm font-bold font-sora text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #3BF686, #4CA9FF)",
                  boxShadow: "0 8px 30px rgba(59,246,134,0.2)",
                }}
              >
                {sending ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold"
                  style={{
                    background: "rgba(59,246,134,0.1)",
                    border: "1px solid rgba(59,246,134,0.3)",
                    color: "#3BF686",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold"
                  style={{
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    color: "#ef4444",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  Failed to send. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>

      {/* Back to top */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center pt-16 pb-4"
      >
        <a href="#main">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,246,134,0.15), rgba(76,169,255,0.15))",
              border: "1px solid rgba(59,246,134,0.3)",
            }}
          >
            <HiOutlineChevronDoubleUp className="text-[#3BF686]" size={20} />
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
