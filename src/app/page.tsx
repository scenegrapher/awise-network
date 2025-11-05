import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import TrustSignals from '@/components/home/TrustSignals';
import Challenges from '@/components/home/Challenges';
import Ecosystem from '@/components/home/Ecosystem';
import FAQ from '@/components/home/FAQ';
import JoinForm from '@/components/home/JoinForm';
import MentorshipPopup from '@/components/modals/MentorshipPopup';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSignals />
        <Challenges />
        <Ecosystem />
        <FAQ />
        <JoinForm />
      </main>
      <Footer />
      <MentorshipPopup />
      <WhatsAppButton />
    </>
  );
}
