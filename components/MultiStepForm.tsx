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

type FormErrors = {
  [K in keyof FormData]?: string;
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
  const [errors, setErrors] = useState<FormErrors>({});

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

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
        newErrors.consentement1 = 'Ce consentement est obligatoire';
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
    <section id="formulaire" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-6">
            Démarrez votre demande
          </h2>
          <p className="text-xl text-[#64748B]">
            Remplissez ce formulaire en 2 minutes pour recevoir des offres adaptées
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between mb-3">
            <span className="text-base font-semibold text-[#1E3A5F]">Étape {currentStep} sur 4</span>
            <span className="text-base font-semibold text-[#00B8A9]">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-[#E2E8F0] rounded-full h-3 shadow-inner">
            <div
              className="bg-gradient-to-r from-[#00B8A9] to-[#009688] h-3 rounded-full transition-all duration-500 shadow-md"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-xl border border-[#E2E8F0]">
          {/* Étape 1 : Besoin de financement */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">Votre besoin de financement</h3>
              
              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-3">
                  Quel est le montant dont vous avez besoin ?
                </label>
                <div className="space-y-3">
                  {[
                    'Moins de 50 000 €',
                    '50 000 € - 100 000 €',
                    '100 000 € - 250 000 €',
                    '250 000 € - 500 000 €',
                    'Plus de 500 000 €'
                  ].map((option) => (
                    <label key={option} className="flex items-center p-5 bg-[#F8FAFC] rounded-xl border-2 border-[#E2E8F0] hover:border-[#00B8A9] hover:bg-white cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                      <input
                        type="radio"
                        name="montant"
                        value={option}
                        checked={formData.montant === option}
                        onChange={(e) => updateFormData('montant', e.target.value)}
                        className="w-5 h-5 text-[#00B8A9] focus:ring-[#00B8A9]"
                      />
                      <span className="ml-4 text-[#1E3A5F] font-medium">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.montant && <p className="mt-2 text-sm text-[#EF4444]">{errors.montant}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-3">
                  Pour quel projet ?
                </label>
                <div className="space-y-3">
                  {[
                    'Trésorerie / Fonds de roulement',
                    'Achat de matériel / équipement',
                    'Développement / Croissance',
                    'Acquisition de murs / local',
                    'Autre'
                  ].map((option) => (
                    <label key={option} className="flex items-center p-5 bg-[#F8FAFC] rounded-xl border-2 border-[#E2E8F0] hover:border-[#00B8A9] hover:bg-white cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                      <input
                        type="radio"
                        name="projet"
                        value={option}
                        checked={formData.projet === option}
                        onChange={(e) => updateFormData('projet', e.target.value)}
                        className="w-5 h-5 text-[#00B8A9] focus:ring-[#00B8A9]"
                      />
                      <span className="ml-4 text-[#1E3A5F] font-medium">{option}</span>
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
                <div className="space-y-3">
                  {[
                    'BTP / Construction',
                    'Commerce / Retail',
                    'Services aux entreprises',
                    'Tech / Digital',
                    'Industrie / Manufacturing',
                    'Autre'
                  ].map((option) => (
                    <label key={option} className="flex items-center p-5 bg-[#F8FAFC] rounded-xl border-2 border-[#E2E8F0] hover:border-[#00B8A9] hover:bg-white cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                      <input
                        type="radio"
                        name="secteur"
                        value={option}
                        checked={formData.secteur === option}
                        onChange={(e) => updateFormData('secteur', e.target.value)}
                        className="w-5 h-5 text-[#00B8A9] focus:ring-[#00B8A9]"
                      />
                      <span className="ml-4 text-[#1E3A5F] font-medium">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.secteur && <p className="mt-2 text-sm text-[#EF4444]">{errors.secteur}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-3">
                  Depuis combien de temps votre entreprise existe-t-elle ?
                </label>
                <div className="space-y-3">
                  {[
                    'Moins de 1 an',
                    '1 à 3 ans',
                    '3 à 5 ans',
                    'Plus de 5 ans'
                  ].map((option) => (
                    <label key={option} className="flex items-center p-5 bg-[#F8FAFC] rounded-xl border-2 border-[#E2E8F0] hover:border-[#00B8A9] hover:bg-white cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                      <input
                        type="radio"
                        name="anciennete"
                        value={option}
                        checked={formData.anciennete === option}
                        onChange={(e) => updateFormData('anciennete', e.target.value)}
                        className="w-5 h-5 text-[#00B8A9] focus:ring-[#00B8A9]"
                      />
                      <span className="ml-4 text-[#1E3A5F] font-medium">{option}</span>
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
                  <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Nom *</label>
                  <input
                    type="text"
                    value={formData.nom}
                    onChange={(e) => updateFormData('nom', e.target.value)}
                    className="w-full px-5 py-4 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#00B8A9] focus:border-[#00B8A9] transition-all duration-200"
                  />
                  {errors.nom && <p className="mt-1 text-sm text-[#EF4444]">{errors.nom}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Prénom *</label>
                  <input
                    type="text"
                    value={formData.prenom}
                    onChange={(e) => updateFormData('prenom', e.target.value)}
                    className="w-full px-5 py-4 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#00B8A9] focus:border-[#00B8A9] transition-all duration-200"
                  />
                  {errors.prenom && <p className="mt-1 text-sm text-[#EF4444]">{errors.prenom}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Email professionnel *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full px-5 py-4 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#00B8A9] focus:border-[#00B8A9] transition-all duration-200"
                />
                {errors.email && <p className="mt-1 text-sm text-[#EF4444]">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Téléphone *</label>
                <input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => updateFormData('telephone', e.target.value)}
                  placeholder="06 12 34 56 78"
                  className="w-full px-5 py-4 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#00B8A9] focus:border-[#00B8A9] transition-all duration-200"
                />
                {errors.telephone && <p className="mt-1 text-sm text-[#EF4444]">{errors.telephone}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">Nom de l&apos;entreprise *</label>
                <input
                  type="text"
                  value={formData.entreprise}
                  onChange={(e) => updateFormData('entreprise', e.target.value)}
                  className="w-full px-5 py-4 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#00B8A9] focus:border-[#00B8A9] transition-all duration-200"
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
                <label className="flex items-start p-5 bg-[#F8FAFC] rounded-xl border-2 border-[#E2E8F0] hover:border-[#00B8A9] hover:bg-white cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                  <input
                    type="checkbox"
                    checked={formData.consentement1}
                    onChange={(e) => updateFormData('consentement1', e.target.checked)}
                    className="w-5 h-5 mt-1 text-[#00B8A9] focus:ring-[#00B8A9] rounded-md"
                  />
                  <span className="ml-4 text-sm text-[#1E3A5F] leading-relaxed">
                    J&apos;accepte que mes coordonnées soient transmises à des partenaires financiers sélectionnés (banques, fintechs, courtiers) afin qu&apos;ils puissent me contacter pour étudier ma demande de financement. <a href="/politique-de-confidentialite" className="text-[#00B8A9] font-semibold hover:underline">Politique de confidentialité</a> *
                  </span>
                </label>
                {errors.consentement1 && <p className="text-sm text-[#EF4444] font-medium">{errors.consentement1}</p>}

                <label className="flex items-start p-5 bg-[#F8FAFC] rounded-xl border-2 border-[#E2E8F0] hover:border-[#00B8A9] hover:bg-white cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">
                  <input
                    type="checkbox"
                    checked={formData.consentement2}
                    onChange={(e) => updateFormData('consentement2', e.target.checked)}
                    className="w-5 h-5 mt-1 text-[#00B8A9] focus:ring-[#00B8A9] rounded-md"
                  />
                  <span className="ml-4 text-sm text-[#1E3A5F] leading-relaxed">
                    J&apos;accepte de recevoir des informations et offres commerciales de la part de fund-stream et ses partenaires. (Optionnel)
                  </span>
                </label>
              </div>

              <div className="bg-[#EFF6FF] border-2 border-[#BFDBFE] rounded-xl p-5 text-sm text-[#1E3A5F]">
                <p className="leading-relaxed">
                  Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer vos droits, contactez-nous à <a href="mailto:privacy@fundstream.fr" className="text-[#00B8A9] font-semibold hover:underline">privacy@fundstream.fr</a>.
                </p>
              </div>

              <div className="text-center text-base text-[#64748B] pt-4 font-medium">
                Gratuit et sans engagement · Réponse sous 48-72h · Données protégées RGPD
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10 pt-8 border-t-2 border-[#E2E8F0]">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="px-8 py-4 border-2 border-[#1E3A5F] text-[#1E3A5F] font-semibold rounded-xl hover:bg-[#1E3A5F] hover:text-white transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Précédent
              </button>
            )}
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-8 py-4 bg-gradient-to-r from-[#00B8A9] to-[#009688] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-200 shadow-lg transform hover:scale-105"
              >
                Suivant
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-10 py-4 bg-gradient-to-r from-[#00B8A9] to-[#009688] text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-200 shadow-xl transform hover:scale-105 text-lg"
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

