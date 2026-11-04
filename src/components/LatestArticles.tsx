import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Article } from '../types';

interface LatestArticlesProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const LatestArticles: React.FC<LatestArticlesProps> = ({
  articles,
  onSelectArticle,
}) => {
  return (
    <section
      id="insights"
      className="bg-[#F5F2EA] text-[#0B0B0B] py-14 sm:py-20 lg:py-28 border-b border-[#0B0B0B]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 min-[380px]:px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#0B0B0B]/60" />
              <span className="text-[10.5px] sm:text-[11px] font-sans tracking-[0.25em] text-[#0B0B0B] uppercase font-bold">
                Insights
              </span>
            </div>

            <h2 className="font-editorial text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl text-[#0B0B0B] font-medium tracking-tight mb-3 sm:mb-4">
              Latest <br />
              Articles
            </h2>

            <p className="text-xs sm:text-sm font-sans text-[#0B0B0B] font-medium leading-relaxed max-w-sm">
              Contemporary legal commentaries, statutory updates, and procedural guides for informed decision-making.
            </p>
          </div>

          {/* Right Column: 3 Article Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => onSelectArticle(article)}
                  className="group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Monochrome Rectangular Thumbnail */}
                    <div className="relative overflow-hidden rounded-sm bg-[#151515] aspect-[16/10] mb-4 border border-[#0B0B0B]/10">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover grayscale contrast-125 brightness-95 transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="font-editorial text-base sm:text-lg font-medium text-[#0B0B0B] leading-snug tracking-tight group-hover:text-[#0B0B0B]/70 transition-colors">
                      {article.title}
                    </h3>
                  </div>

                  {/* Bottom: Arrow icon */}
                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#0B0B0B]/10">
                    <span className="text-[10px] font-sans uppercase tracking-widest text-[#0B0B0B] font-bold">
                      {article.category}
                    </span>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-[#0B0B0B] group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
