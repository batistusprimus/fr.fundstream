import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import MultiStepForm from '@/components/MultiStepForm';
import WhyFundStream from '@/components/WhyFundStream';
import MediaCoverage from '@/components/MediaCoverage';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTAFinal from '@/components/CTAFinal';
import Disclaimer from '@/components/Disclaimer';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <HowItWorks />
      <MultiStepForm />
      <WhyFundStream />
      <MediaCoverage />
      <Testimonials />
      <FAQ />
      <CTAFinal />
      <Disclaimer />
    </main>
  );
}
