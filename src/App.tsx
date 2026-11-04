import React, { useState } from 'react';
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
  const [consultationArea, setConsultationArea] = useState<string>('Criminal Cases');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<PracticeArea | null>(null);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleOpenConsultation = (areaTitle?: string) => {
    if (areaTitle) {
      setConsultationArea(areaTitle);
    }
    setIsConsultationOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#F5F2EA] selection:text-[#0B0B0B]">
        {/* Sticky Navigation */}
        <Navbar onOpenConsultation={() => handleOpenConsultation()} />

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
