import { NextResponse } from 'next/server';

type ContactPayload = {
  nom: string;
  email: string;
  message: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<ContactPayload>;

    if (!payload.nom || !payload.email || !payload.message) {
      return NextResponse.json({ error: 'Champs requis: nom, email, message' }, { status: 400 });
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }

    // Ici: envoyez un email ou enregistrez la demande.
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Requête invalide' }, { status: 400 });
  }
}


