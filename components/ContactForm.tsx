'use client';

import { useState } from 'react';

type ContactFormData = {
  nom: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({ nom: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onChange = (field: keyof ContactFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Une erreur est survenue.");
        return;
      }
      setSuccess('Votre message a été envoyé. Nous revenons vers vous rapidement.');
      setFormData({ nom: '', email: '', message: '' });
    } catch {
      setError("Impossible d'envoyer votre message pour le moment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="bg-white p-8 rounded-xl border border-[#E2E8F0] shadow-md">
      {success && (
        <div className="mb-4 rounded-lg border border-green-200 bg-green-50 text-green-800 px-4 py-3 text-sm">
          {success}
        </div>
      )}
      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">
          {error}
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Nom *</label>
          <input
            name="nom"
            required
            value={formData.nom}
            onChange={onChange('nom')}
            className="w-full px-5 py-4 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#00B8A9] focus:border-[#00B8A9]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={onChange('email')}
            className="w-full px-5 py-4 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#00B8A9] focus:border-[#00B8A9]"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={onChange('message')}
          className="w-full px-5 py-4 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#00B8A9] focus:border-[#00B8A9]"
        />
      </div>
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          disabled={submitting}
          className="px-8 py-4 bg-gradient-to-r from-[#00B8A9] to-[#009688] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-200 disabled:opacity-60"
        >
          {submitting ? 'Envoi...' : 'Envoyer'}
        </button>
      </div>
    </form>
  );
}


