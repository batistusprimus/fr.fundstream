import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Nous contacter | fund-stream',
  description: 'Contactez l\'équipe fund-stream pour toute question',
};

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Link href="/" className="text-[#00B8A9] hover:underline mb-8 inline-block">
            ← Retour à l&apos;accueil
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-8">
            Nous contacter
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#F5F7FA] p-8 rounded-xl">
              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">Questions générales</h2>
              <p className="text-[#6B7280] mb-4">
                Pour toute question sur nos services ou votre demande de financement :
              </p>
              <a href="mailto:contact@fundstream.fr" className="text-[#00B8A9] hover:underline font-semibold">
                contact@fundstream.fr
              </a>
            </div>

            <div className="bg-[#F5F7FA] p-8 rounded-xl">
              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">Protection des données</h2>
              <p className="text-[#6B7280] mb-4">
                Pour exercer vos droits RGPD ou toute question sur la protection de vos données :
              </p>
              <a href="mailto:privacy@fundstream.fr" className="text-[#00B8A9] hover:underline font-semibold">
                privacy@fundstream.fr
              </a>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">Informations légales</h2>
            <div className="space-y-2 text-[#6B7280]">
              <p><strong>Éditeur :</strong> BPC Group</p>
              <p><strong>Site :</strong> fundstreamfr.bpcorp.eu</p>
              <p><strong>Email :</strong> contact@fundstream.fr</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">Formulaire de contact</h2>
            <ContactForm />
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="inline-block bg-[#00B8A9] hover:bg-[#009688] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200">
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
