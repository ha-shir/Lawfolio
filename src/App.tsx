import React, { useState } from 'react';
import { Smartphone, Monitor } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { PracticeAreas } from './components/PracticeAreas';
import { AboutSection } from './components/AboutSection';
import { SelectedCases } from './components/SelectedCases';
import { TestimonialSection } from './components/TestimonialSection';
import { LatestArticles } from './components/LatestArticles';
import { FinalConsultationCTA } from './components/FinalConsultationCTA';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { VideoModal } from './components/VideoModal';
import { PracticeModal } from './components/PracticeModal';
import { CaseModal } from './components/CaseModal';
import { ArticleModal } from './components/ArticleModal';
import { AboutModal } from './components/AboutModal';
import { IPhonePreview } from './components/IPhonePreview';

import {
  statsData,
  practiceAreasData,
  selectedCasesData,
  testimonialsData,
  articlesData,
} from './data/portfolioData';

import { PracticeArea, CaseStudy, Article } from './types';

export default function App() {
  // Modal states
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationArea, setConsultationArea] = useState<string>('Criminal Law');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<PracticeArea | null>(null);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Device Showcase Toggle (Fullscreen Responsive vs iPhone 16 Pro Mockup Frame)
  const [isIPhonePreview, setIsIPhonePreview] = useState(false);

  const handleOpenConsultation = (areaTitle?: string) => {
    if (areaTitle) {
      setConsultationArea(areaTitle);
    }
    setIsConsultationOpen(true);
  };

  const renderContent = () => (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#F5F2EA] selection:text-[#0B0B0B]">
      {/* Sticky Navigation */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        isIPhonePreview={isIPhonePreview}
        onToggleIPhonePreview={() => setIsIPhonePreview(!isIPhonePreview)}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenVideo={() => setIsVideoOpen(true)}
        />

        {/* 2. Experience & Credibility Bar */}
        <StatsBar stats={statsData} />

        {/* 3. Practice Areas Section */}
        <PracticeAreas
          practiceAreas={practiceAreasData}
          onSelectPracticeArea={(area) => setSelectedPracticeArea(area)}
        />

        {/* 4. About Section */}
        <AboutSection onOpenAboutModal={() => setIsAboutModalOpen(true)} />

        {/* 5. Selected Cases Section */}
        <SelectedCases
          cases={selectedCasesData}
          onSelectCase={(caseItem) => setSelectedCase(caseItem)}
        />

        {/* 6. Testimonial Section */}
        <TestimonialSection testimonials={testimonialsData} />

        {/* 7. Latest Articles Section */}
        <LatestArticles
          articles={articlesData}
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* 8. Final Consultation CTA */}
        <FinalConsultationCTA
          onOpenConsultation={() => handleOpenConsultation()}
        />
      </main>

      {/* 9. Minimalist Footer */}
      <Footer />
    </div>
  );

  return (
    <>
      {isIPhonePreview ? (
        <IPhonePreview onClose={() => setIsIPhonePreview(false)}>
          {renderContent()}
        </IPhonePreview>
      ) : (
        <>
          {renderContent()}

          {/* Floating Device Showcase Switcher Pill (Desktop/Tablet) */}
          <div className="fixed bottom-6 right-6 z-40 hidden md:block">
            <button
              type="button"
              onClick={() => setIsIPhonePreview(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#151515]/90 hover:bg-[#1f1f1f] text-[#F5F2EA] border border-white/20 shadow-2xl backdrop-blur-md text-xs font-sans font-medium tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              title="Preview in iPhone 16 Pro Frame"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#F5F2EA]" />
              <span>iPhone Frame Showcase</span>
            </button>
          </div>
        </>
      )}

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedPracticeArea={consultationArea}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <PracticeModal
        practiceArea={selectedPracticeArea}
        onClose={() => setSelectedPracticeArea(null)}
        onOpenConsultationWithArea={(areaTitle) => handleOpenConsultation(areaTitle)}
      />

      <CaseModal
        caseItem={selectedCase}
        onClose={() => setSelectedCase(null)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    </>
  );
}
