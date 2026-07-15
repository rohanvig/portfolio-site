"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { PERSONAL_INFO } from "@/data/personal";
import { SectionHeader } from "@/components/shared/section-header";
import { SocialIcon } from "@/components/shared/social-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { validateContactForm } from "@/lib/validations";
import type { ContactFormData } from "@/types";

export function Contact() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(form);
    const errorMap: Record<string, string> = {};
    Object.entries(validationErrors).forEach(([key, value]) => {
      if (value) errorMap[key] = value;
    });

    if (Object.keys(errorMap).length > 0) {
      setErrors(errorMap);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32" aria-label="Contact section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear from you"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{PERSONAL_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {PERSONAL_INFO.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                  aria-label={link.name}
                >
                  <SocialIcon icon={link.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl border border-border/50 bg-muted/50">
              <div className="flex h-48 items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="mx-auto h-8 w-8 text-primary/50" />
                  <p className="mt-2 text-sm">Map Placeholder</p>
                  <p className="text-xs">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm sm:p-8"
              noValidate
            >
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex items-center gap-2 rounded-xl bg-emerald-500/10 p-4 text-emerald-600 dark:text-emerald-400"
                  role="status"
                >
                  <CheckCircle className="h-5 w-5" />
                  <p className="text-sm font-medium">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-xs text-red-500">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="mt-6 space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" className="mt-6 w-full">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
