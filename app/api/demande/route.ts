import { NextResponse } from 'next/server';

type DemandePayload = {
  montant: string;
  projet: string;
  secteur: string;
  anciennete: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  entreprise: string;
  consentement1: boolean;
  consentement2: boolean;
  // Champs de tracking (optionnels)
  utm_source?: string;
  utm_campaign?: string;
  utm_medium?: string;
  utm_content?: string;
  utm_term?: string;
  device?: string;
  referrer?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return /^[\d\s+\-()]{10,}$/.test(phone);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<DemandePayload>;

    const requiredStringFields: Array<keyof DemandePayload> = [
      'montant',
      'projet',
      'secteur',
      'anciennete',
      'nom',
      'prenom',
      'email',
      'telephone',
      'entreprise',
    ];

    for (const field of requiredStringFields) {
      if (!payload[field] || typeof payload[field] !== 'string') {
        return NextResponse.json({ error: `Champ manquant ou invalide: ${String(field)}` }, { status: 400 });
      }
    }

    if (!payload.consentement1) {
      return NextResponse.json({ error: 'Le consentement principal est requis' }, { status: 400 });
    }

    if (!isValidEmail(payload.email!)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }

    if (!isValidPhone(payload.telephone!)) {
      return NextResponse.json({ error: 'Téléphone invalide' }, { status: 400 });
    }

    // Ici vous pourriez persister la demande (DB, CRM) ou envoyer un email.
    // Pour l’instant, on confirme simplement la réception.

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Requête invalide' }, { status: 400 });
  }
}


