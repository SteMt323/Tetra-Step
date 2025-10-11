import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PresentationSection } from './components/PresentationSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { TeamSection } from './components/TeamSection';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <PresentationSection />
        <ProblemSection />
        <SolutionSection />
        <TeamSection/>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}