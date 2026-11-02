import { PracticeArea, CaseStudy, Testimonial, Article, StatItem } from '../types';

export const statsData: StatItem[] = [
  {
    value: '8+',
    label: 'Years of Practice',
    sublabel: 'Active High Court Litigation',
    icon: 'wreath',
  },
  {
    value: '500+',
    label: 'Cases Handled',
    sublabel: 'Across Civil, Criminal & Corporate',
    icon: 'briefcase',
  },
  {
    value: '95%',
    label: 'Client Satisfaction',
    sublabel: 'Based on Verified Engagements',
    icon: 'scales',
  },
];

export const practiceAreasData: PracticeArea[] = [
  {
    id: 'criminal-law',
    number: '01',
    title: 'Criminal Law',
    description: 'Bail applications, trial representation, criminal appeals, and white-collar economic defence.',
    extendedDescription: 'Specialized criminal litigation representing clients in sessions trials, anticipatory & regular bail applications before the High Court of Kerala and Sessions Courts, quashing petitions (Section 482 CrPC / BNSS), and economic offences.',
    iconName: 'scales',
    keyServices: [
      'Anticipatory & Regular Bail',
      'Trial Defence & Cross-Examination',
      'High Court Criminal Appeals & Revisions',
      'White-Collar & Economic Offences',
    ],
  },
  {
    id: 'civil-law',
    number: '02',
    title: 'Civil Law',
    description: 'Contract enforcement, injunction suits, recovery proceedings, and writ jurisdiction.',
    extendedDescription: 'Comprehensive civil advocacy spanning breach of commercial contracts, specific performance, recovery of dues, declaration of title, and Article 226 Constitutional Writ Petitions for judicial review.',
    iconName: 'file-text',
    keyServices: [
      'Specific Performance & Injunctions',
      'Constitutional Writ Petitions (Art. 226)',
      'Commercial Money Suits & Debt Recovery',
      'Civil Appeals & Dispute Arbitration',
    ],
  },
  {
    id: 'corporate-law',
    number: '03',
    title: 'Corporate Law',
    description: 'Statutory compliance, board advisories, regulatory disputes, and contract structuring.',
    extendedDescription: 'Advisory and dispute counsel for startups, family enterprises, and established corporate entities on Companies Act compliances, partnership dissolutions, director fiduciary liabilities, and NCLT representation.',
    iconName: 'building',
    keyServices: [
      'NCLT Insolvency & Oppression Matters',
      'Regulatory & Statutory Compliance',
      'Commercial Contract Drafting & Vetting',
      'Shareholder Dispute Resolution',
    ],
  },
  {
    id: 'property-law',
    number: '04',
    title: 'Property Law',
    description: 'Ancestral land partition, title deed due diligence, mutation disputes, and tenancy rights.',
    extendedDescription: 'In-depth domain expertise in Kerala real estate law, revenue records scrutiny, partition suits, eviction petitions under Rent Control legislation, and boundary/easement rights determination.',
    iconName: 'home',
    keyServices: [
      'Title Investigation & Due Diligence',
      'Ancestral Property Partition Suits',
      'Tenancy & Rent Control Proceedings',
      'Revenue & Land Registration Disputes',
    ],
  },
];

export const selectedCasesData: CaseStudy[] = [
  {
    id: 'case-land-dispute',
    category: 'Land Dispute Resolution',
    title: 'Ancestral Property Partition & Title Regularization',
    shortDescription: 'Favourable settlement in a complex property dispute spanning multi-generational inheritance claims.',
    fullOverview: 'Represented co-sharers in an inherited estate in Ernakulam district spanning prime commercial and agricultural parcels, entangled in disputed registered settlement deeds and pending revenue records mutation.',
    strategy: 'Conducted rigorous historical revenue scrutiny, challenged erroneous title claims through preliminary survey commissions, and facilitated structured court-directed mediation safeguarding client equity.',
    outcome: 'Secured equitable final partition decree with clear demarcation and mutated revenue patta without prolonged trial delay.',
    jurisdiction: 'Principal Sub-Court & High Court of Kerala',
  },
  {
    id: 'case-corporate-compliance',
    category: 'Corporate Compliance',
    title: 'Statutory Governance & Regulatory Dispute',
    shortDescription: 'Legal advisory and compliance for a growing firm navigating complex statutory regulations.',
    fullOverview: 'Advised an emerging logistics technology enterprise facing show-cause notices under regional transport regulations and inter-state logistics tax licensing mandates.',
    strategy: 'Structured an updated compliance ledger, prepared detailed statutory responses citing landmark High Court precedents on regulatory overreach, and represented directors in administrative hearings.',
    outcome: 'Show-cause notices dropped without penal sanction, followed by institutionalized quarterly governance protocols.',
    jurisdiction: 'State Regulatory Authority & Commercial Court',
  },
  {
    id: 'case-criminal-defence',
    category: 'Criminal Defence',
    title: 'Quashing of Baseless Commercial Prosecution',
    shortDescription: 'Representation in a high-profile criminal matter arising from a civil contract breach.',
    fullOverview: 'Defended senior business executives wrongfully named in a criminal complaint alleging cheating and criminal breach of trust (Sections 406/420 IPC) arising strictly from a commercial business transaction.',
    strategy: 'Invoked the inherent powers of the High Court under Section 482 CrPC, establishing through documentary trail that civil dispute cannot be given a criminal cloak.',
    outcome: 'High Court quashed the FIR and proceedings in their entirety, upholding client reputation and commercial standing.',
    jurisdiction: 'High Court of Kerala',
  },
  {
    id: 'case-constitutional-writ',
    category: 'Constitutional Law',
    title: 'Writ Petition Protecting Agricultural Land Rights',
    shortDescription: 'Secured landmark interim protection against arbitrary state acquisition without fair compensation.',
    fullOverview: 'Filed Article 226 Writ Petition on behalf of traditional agrarian landowners against summary road widening notices that bypassed statutory fair compensation procedures.',
    strategy: 'Demonstrated violation of procedural due process under the Right to Fair Compensation and Transparency in Land Acquisition Act.',
    outcome: 'Interim stay granted, mandating fair compensation valuation at prevailing market rates before possession.',
    jurisdiction: 'High Court of Kerala',
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'Professional, approachable and absolutely reliable. His legal guidance made a complex situation much easier.',
    clientRole: 'Managing Director, LogiTrans Logistics',
    caseType: 'Commercial Regulatory Dispute',
    year: '2025',
  },
  {
    id: 'testimonial-2',
    quote: 'Adv. Arjun Menon brought exceptional clarity to our multi-decade family property conflict. His composure in court and meticulous drafting delivered the outcome we had sought for years.',
    clientRole: 'Co-Trustee, Menon Family Estate',
    caseType: 'Property Partition & Title Suit',
    year: '2024',
  },
  {
    id: 'testimonial-3',
    quote: 'In our darkest hour during an unjustified prosecution, Arjun stood as a rock of integrity and legal acumen. His swift relief before the High Court gave us our life and dignity back.',
    clientRole: 'Founder & Tech Entrepreneur',
    caseType: 'Criminal Defence & 482 Quashing',
    year: '2025',
  },
];

export const articlesData: Article[] = [
  {
    id: 'property-disputes-kerala',
    title: 'Understanding Property Disputes in Kerala',
    excerpt: 'Key legal insights into title verification, partition claims, and navigating the Kerala Land Reforms Act effectively.',
    date: 'February 2026',
    readTime: '5 min read',
    category: 'Property Law',
    image: '/article-pillars.jpg',
    content: [
      'Property disputes in Kerala often carry generational complexities, ranging from unrecorded ancestral partitions to conflicting revenue pattas and mutation anomalies.',
      'The foundational step in mitigating property exposure is rigorous title vetting spanning at least 30 years through the Sub-Registrar records, combined with on-ground possession verification.',
      'When disputes arise, early civil remedies including interim temporary injunctions under Order 39 of the Code of Civil Procedure are essential to prevent alienation or unilateral construction pending adjudication.',
    ],
  },
  {
    id: 'rights-of-accused',
    title: 'Key Rights of an Accused in Criminal Cases',
    excerpt: 'Essential constitutional safeguards under Article 20, 21, and 22, and practical guidelines on bail and police interrogation.',
    date: 'January 2026',
    readTime: '6 min read',
    category: 'Criminal Law',
    image: '/article-gavel.jpg',
    content: [
      'The Constitution of India enshrines the presumption of innocence as a sacrosanct cornerstone of the criminal justice system under Article 21.',
      'An individual summoned or detained possesses the absolute right to know the precise grounds of arrest, the right against self-incrimination, and the right to communicate immediately with legal counsel.',
      'In non-heinous offences, compliance with landmark guidelines such as Arnesh Kumar vs State of Bihar remains mandatory before custodial arrest, ensuring liberty is not curbed casually.',
    ],
  },
  {
    id: 'guide-to-civil-litigation',
    title: 'A Quick Guide to Civil Litigation',
    excerpt: 'From statutory legal notices to plaint drafting, discovery, and execution decrees: what clients need to know.',
    date: 'December 2025',
    readTime: '7 min read',
    category: 'Civil Practice',
    image: '/article-books.jpg',
    content: [
      'Civil litigation in India is an evidentiary marathon requiring precision in pleadings and comprehensive documentary substantiation right from the date of cause of action.',
      'Before instituting a suit, a well-crafted Statutory Legal Notice often sets the evidentiary baseline and in many commercial cases facilitates dispute resolution without contested litigation.',
      'Understanding court hierarchies, limitation periods under the Limitation Act 1963, and modern pre-institution mediation channels under the Commercial Courts Act saves valuable time and resources.',
    ],
  },
];

export const credentialsData = [
  {
    title: 'LL.B, Government Law College',
    description: 'Distinction in Constitutional & Procedural Law',
    icon: 'graduation',
  },
  {
    title: '8+ Years of Practice',
    description: 'High Court of Kerala & Subordinate Judiciary',
    icon: 'gavel',
  },
  {
    title: 'Result-Oriented Approach',
    description: 'Upholding ethics, clarity & practical insight',
    icon: 'shield',
  },
];
