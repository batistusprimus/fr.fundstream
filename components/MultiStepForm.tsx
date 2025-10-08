'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type FormData = {
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
};

export default function MultiStepForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    montant: '',
    projet: '',
    secteur: '',
    anciennete: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    consentement1: false,
    consentement2: false,
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (step === 1) {
      if (!formData.montant) newErrors.montant = 'Veuillez sélectionner un montant';
      if (!formData.projet) newErrors.projet = 'Veuillez sélectionner un projet';
    } else if (step === 2) {
      if (!formData.secteur) newErrors.secteur = 'Veuillez sélectionner un secteur';
      if (!formData.anciennete) newErrors.anciennete = 'Veuillez sélectionner l\'ancienneté';
    } else if (step === 3) {
      if (!formData.nom) newErrors.nom = 'Le nom est requis';
      if (!formData.prenom) newErrors.prenom = 'Le prénom est requis';
      if (!formData.email) {
        newErrors.email = 'L\'email est requis';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Email invalide';
      }
      if (!formData.telephone) {
        newErrors.telephone = 'Le téléphone est requis';
      } else if (!/^[\d\s+\-()]{10,}$/.test(formData.telephone)) {
        newErrors.telephone = 'Téléphone invalide';
      }
      if (!formData.entreprise) newErrors.entreprise = 'Le nom de l\'entreprise est requis';
    } else if (step === 4) {
      if (!formData.consentement1) {
        newErrors.consentement1 = 'Ce consentement est obligatoire' as any;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 4) {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(4)) {
      // Ici, vous pouvez envoyer les données à votre backend/API
      console.log('Form submitted:', formData);
      router.push('/merci');
    }
  };

  const progressPercentage = (currentStep / 4) * 100;

  return (
    <section id="formulaire" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
            Démarrez votre demande
          </h2>
          <p className="text-lg text-[#6B7280]">
            Remplissez ce formulaire en 2 minutes pour recevoir des offres adaptées
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-[#6B7280]">Étape {currentStep} sur 4</span>
            <span className="text-sm font-medium text-[#00B8A9]">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#00B8A9] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#F5F7FA] p-8 rounded-xl shadow-lg">
          {/* Étape 1 : Besoin de financement */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">Votre besoin de financement</h3>
              
              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-3">
                  Quel est le montant dont vous avez besoin ?
                </label>
                <div className="space-y-2">
                  {[
                    'Moins de 50 000 €',
                    '50 000 € - 100 000 €',
                    '100 000 € - 250 000 €',
                    '250 000 € - 500 000 €',
                    'Plus de 500 000 €'
                  ].map((option) => (
                    <label key={option} className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#00B8A9] cursor-pointer transition-all">
                      <input
                        type="radio"
                        name="montant"
                        value={option}
                        checked={formData.montant === option}
                        onChange={(e) => updateFormData('montant', e.target.value)}
                        className="w-4 h-4 text-[#00B8A9] focus:ring-[#00B8A9]"
                      />
                      <span className="ml-3 text-[#1E3A5F]">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.montant && <p className="mt-2 text-sm text-[#EF4444]">{errors.montant}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-3">
                  Pour quel projet ?
                </label>
                <div className="space-y-2">
                  {[
                    'Trésorerie / Fonds de roulement',
                    'Achat de matériel / équipement',
                    'Développement / Croissance',
                    'Acquisition de murs / local',
                    'Autre'
                  ].map((option) => (
                    <label key={option} className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#00B8A9] cursor-pointer transition-all">
                      <input
                        type="radio"
                        name="projet"
                        value={option}
                        checked={formData.projet === option}
                        onChange={(e) => updateFormData('projet', e.target.value)}
                        className="w-4 h-4 text-[#00B8A9] focus:ring-[#00B8A9]"
                      />
                      <span className="ml-3 text-[#1E3A5F]">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.projet && <p className="mt-2 text-sm text-[#EF4444]">{errors.projet}</p>}
              </div>
            </div>
          )}

          {/* Étape 2 : Votre entreprise */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">Votre entreprise</h3>
              
              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-3">
                  Quel est votre secteur d&apos;activité ?
                </label>
                <div className="space-y-2">
                  {[
                    'BTP / Construction',
                    'Commerce / Retail',
                    'Services aux entreprises',
                    'Tech / Digital',
                    'Industrie / Manufacturing',
                    'Autre'
                  ].map((option) => (
                    <label key={option} className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#00B8A9] cursor-pointer transition-all">
                      <input
                        type="radio"
                        name="secteur"
                        value={option}
                        checked={formData.secteur === option}
                        onChange={(e) => updateFormData('secteur', e.target.value)}
                        className="w-4 h-4 text-[#00B8A9] focus:ring-[#00B8A9]"
                      />
                      <span className="ml-3 text-[#1E3A5F]">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.secteur && <p className="mt-2 text-sm text-[#EF4444]">{errors.secteur}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-3">
                  Depuis combien de temps votre entreprise existe-t-elle ?
                </label>
                <div className="space-y-2">
                  {[
                    'Moins de 1 an',
                    '1 à 3 ans',
                    '3 à 5 ans',
                    'Plus de 5 ans'
                  ].map((option) => (
                    <label key={option} className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#00B8A9] cursor-pointer transition-all">
                      <input
                        type="radio"
                        name="anciennete"
                        value={option}
                        checked={formData.anciennete === option}
                        onChange={(e) => updateFormData('anciennete', e.target.value)}
                        className="w-4 h-4 text-[#00B8A9] focus:ring-[#00B8A9]"
                      />
                      <span className="ml-3 text-[#1E3A5F]">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.anciennete && <p className="mt-2 text-sm text-[#EF4444]">{errors.anciennete}</p>}
              </div>
            </div>
          )}

          {/* Étape 3 : Vos coordonnées */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">Vos coordonnées</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Nom *</label>
                  <input
                    type="text"
                    value={formData.nom}
                    onChange={(e) => updateFormData('nom', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B8A9] focus:border-transparent"
                  />
                  {errors.nom && <p className="mt-1 text-sm text-[#EF4444]">{errors.nom}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Prénom *</label>
                  <input
                    type="text"
                    value={formData.prenom}
                    onChange={(e) => updateFormData('prenom', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B8A9] focus:border-transparent"
                  />
                  {errors.prenom && <p className="mt-1 text-sm text-[#EF4444]">{errors.prenom}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Email professionnel *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B8A9] focus:border-transparent"
                />
                {errors.email && <p className="mt-1 text-sm text-[#EF4444]">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Téléphone *</label>
                <input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => updateFormData('telephone', e.target.value)}
                  placeholder="06 12 34 56 78"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B8A9] focus:border-transparent"
                />
                {errors.telephone && <p className="mt-1 text-sm text-[#EF4444]">{errors.telephone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Nom de l&apos;entreprise *</label>
                <input
                  type="text"
                  value={formData.entreprise}
                  onChange={(e) => updateFormData('entreprise', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B8A9] focus:border-transparent"
                />
                {errors.entreprise && <p className="mt-1 text-sm text-[#EF4444]">{errors.entreprise}</p>}
              </div>
            </div>
          )}

          {/* Étape 4 : Consentements */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">Consentements</h3>
              
              <div className="space-y-4">
                <label className="flex items-start p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#00B8A9] cursor-pointer transition-all">
                  <input
                    type="checkbox"
                    checked={formData.consentement1}
                    onChange={(e) => updateFormData('consentement1', e.target.checked)}
                    className="w-5 h-5 mt-1 text-[#00B8A9] focus:ring-[#00B8A9] rounded"
                  />
                  <span className="ml-3 text-sm text-[#1E3A5F]">
                    J&apos;accepte que mes coordonnées soient transmises à des partenaires financiers sélectionnés (banques, fintechs, courtiers) afin qu&apos;ils puissent me contacter pour étudier ma demande de financement. <a href="/politique-de-confidentialite" className="text-[#00B8A9] underline">Politique de confidentialité</a> *
                  </span>
                </label>
                {errors.consentement1 && <p className="text-sm text-[#EF4444]">{errors.consentement1}</p>}

                <label className="flex items-start p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#00B8A9] cursor-pointer transition-all">
                  <input
                    type="checkbox"
                    checked={formData.consentement2}
                    onChange={(e) => updateFormData('consentement2', e.target.checked)}
                    className="w-5 h-5 mt-1 text-[#00B8A9] focus:ring-[#00B8A9] rounded"
                  />
                  <span className="ml-3 text-sm text-[#1E3A5F]">
                    J&apos;accepte de recevoir des informations et offres commerciales de la part de fund-stream et ses partenaires. (Optionnel)
                  </span>
                </label>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-[#1E3A5F]">
                <p>
                  Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer vos droits, contactez-nous à <a href="mailto:privacy@fundstream.fr" className="text-[#00B8A9] underline">privacy@fundstream.fr</a>.
                </p>
              </div>

              <div className="text-center text-sm text-[#6B7280] pt-4">
                Gratuit et sans engagement · Réponse sous 48-72h · Données protégées RGPD
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-300">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="px-6 py-3 border-2 border-[#1E3A5F] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#1E3A5F] hover:text-white transition-all"
              >
                Précédent
              </button>
            )}
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-6 py-3 bg-[#00B8A9] text-white font-semibold rounded-lg hover:bg-[#009688] transition-all"
              >
                Suivant
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-8 py-3 bg-[#00B8A9] text-white font-semibold rounded-lg hover:bg-[#009688] transition-all shadow-lg"
              >
                Envoyer ma demande
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

