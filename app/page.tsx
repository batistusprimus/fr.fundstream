import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import MultiStepForm from '@/components/MultiStepForm';
import WhyFundStream from '@/components/WhyFundStream';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full">
        <Hero />
        <HowItWorks />
        <MultiStepForm />
        <WhyFundStream />
        <Testimonials />
        <FAQ />
        <CTAFinal />
        <Footer />
      </main>
    </>
  );
}
