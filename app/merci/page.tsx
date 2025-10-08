import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Merci ! | fund-stream',
  description: 'Votre demande a bien été transmise',
};

export default function ThankYou() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gradient-to-br from-[#1E3A5F] to-[#2d5077] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="mb-8">
              <svg className="w-24 h-24 text-[#00B8A9] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Merci ! Votre demande a bien été transmise.
            </h1>
            <p className="text-xl text-gray-200">
              Nos partenaires financiers vont étudier votre demande et vous contacteront sous 48-72h si votre profil correspond à leurs critères.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Prochaines étapes :</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#00B8A9] rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Vérifiez votre boîte email</h3>
                  <p className="text-gray-200">Une confirmation vous a été envoyée par email</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#00B8A9] rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Préparez vos documents financiers</h3>
                  <p className="text-gray-200">Bilan, compte de résultat, prévisionnel</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#00B8A9] rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Vous serez contacté sous 48-72h</h3>
                  <p className="text-gray-200">Par les partenaires intéressés par votre demande</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg mb-6">Besoin d&apos;aide ?</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#1E3A5F] hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
            >
              Contactez-nous
            </Link>
            <div className="mt-8">
              <Link href="/" className="text-[#00B8A9] hover:underline">
                ← Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

