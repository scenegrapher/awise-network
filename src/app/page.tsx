import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Challenges from '@/components/home/Challenges';
import Ecosystem from '@/components/home/Ecosystem';
import FAQ from '@/components/home/FAQ';
import JoinForm from '@/components/home/JoinForm';
import MentorshipPopup from '@/components/modals/MentorshipPopup';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Challenges />
        <Ecosystem />
        <FAQ />
        <JoinForm />
      </main>
      <Footer />
      <MentorshipPopup />
    </>
  );
}
