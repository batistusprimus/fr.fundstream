import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white py-16 mt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/fundstream_transparent.png"
              alt="fund-stream"
              width={150}
              height={45}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm">
              La solution simple et rapide pour trouver le financement adapté à votre entreprise.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/politique-de-confidentialite" className="text-gray-300 hover:text-[#00B8A9] transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="/conditions-generales" className="text-gray-300 hover:text-[#00B8A9] transition-colors">
                  Conditions générales d&apos;utilisation
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-[#00B8A9] transition-colors">
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email : contact@fundstream.fr</li>
              <li>Protection des données : privacy@fundstream.fr</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">fund-stream par BPC Group</p>
          <p>&copy; 2025 BPC Group. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

