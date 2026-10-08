/**
 * =========================================================================
 * RESUME & PORTFOLIO DATA CONFIGURATION: PROFESSOR KENT LUNDIN
 * =========================================================================
 * Real professional profile, research, teaching, and advisory history.
 */

const portfolioData = {
  // --- Personal Information ---
  personal: {
    name: "Kent Lundin",
    role: "Professor of Digital Marketing | AI Strategist & GEO Pioneer",
    tagline: "Pioneering Generative Engine Optimization (GEO), AI-driven marketing strategies, and entity knowledge graphs.",
    location: "Rexburg, ID / BYU-Idaho",
    email: "lundink@byui.edu",
    phone: "",
    availability: "Open to Speaking, Advisory, & Educational Collaborations",
    avatar: "https://kentlundin.com/wp-content/uploads/2024/10/6sexjp-LogoMakr.png",
    about: [
      "I am a Professor of Digital Marketing at Brigham Young University–Idaho with over two decades of experience teaching and mentoring thousands of students in digital marketing, analytics, and entrepreneurship.",
      "As an early leader and researcher in Generative Engine Optimization (GEO), my work explores how generative AI systems (ChatGPT, Google Gemini, Perplexity) retrieve, rank, and cite content. I focus on knowledge graphs, entity optimization, schema markup, and answer-optimized content architecture.",
      "Beyond academia, I have served on the Board of PolicyTech International, Inc. (acquired by Navex Global) and assisted tech startup HotDocs, Inc. during its growth and acquisition by LexisNexis. My mission is empowering professionals to lead in an AI-driven economy by treating technology as a collaborative catalyst for human creativity."
    ],
    socials: {
      github: "https://github.com/kentlundin",
      linkedin: "https://www.linkedin.com/in/kentlundin/",
      twitter: "",
      website: "https://kentlundin.com"
    }
  },

  // --- Skills Matrix ---
  skills: [
    { name: "Generative Engine Optimization (GEO)", category: "frontend", level: "Pioneer", icon: "sparkles" },
    { name: "AI Marketing Strategy (Gemini, ChatGPT, Perplexity)", category: "frontend", level: "Expert", icon: "cpu" },
    { name: "Entity SEO & Knowledge Graphs", category: "frontend", level: "Expert", icon: "network" },
    { name: "Schema.org & Structured Data", category: "frontend", level: "Expert", icon: "code-2" },
    { name: "Digital Marketing Analytics", category: "backend", level: "Expert", icon: "bar-chart-3" },
    { name: "MarTech Stack Integration", category: "backend", level: "Expert", icon: "layers" },
    { name: "Answer Engine Optimization (AEO)", category: "frontend", level: "Expert", icon: "search" },
    { name: "Conversion Rate Optimization (CRO)", category: "backend", level: "Proficient", icon: "trending-up" },
    { name: "Curriculum Design & Higher Ed Pedagogy", category: "devops", level: "20+ Years", icon: "graduation-cap" },
    { name: "Executive & Board Advisory", category: "devops", level: "Seasoned", icon: "shield-check" },
    { name: "AI Co-Creation Methodologies", category: "tools", level: "Expert", icon: "bot" },
    { name: "Content Architecture & Trust Signals", category: "tools", level: "Expert", icon: "check-circle-2" },
    { name: "HighLevel & Marketing Automation", category: "tools", level: "Proficient", icon: "zap" },
    { name: "Google Analytics 4 & Search Console", category: "tools", level: "Expert", icon: "globe" }
  ],

  // --- Featured Projects & Research ---
  projects: [
    {
      id: "geo-framework",
      title: "Generative Engine Optimization (GEO) Framework",
      category: "fullstack",
      description: "A foundational methodology and research framework helping brands optimize content for discovery and citation across LLMs (ChatGPT, Gemini, Perplexity).",
      detailedDescription: "Systematized the three core pillars of modern AI retrieval: Entity Clarity, Knowledge Graph Integration, and Answer-Optimized Content. Developed the 'AI Co-Creation Method' to examine how generative algorithms verify credibility, rank answers, and reference sources.",
      tags: ["Generative AI", "GEO", "LLM Retrieval", "Schema Markup", "Knowledge Graphs"],
      liveUrl: "https://kentlundin.com",
      githubUrl: "",
      featured: true,
      metrics: "Pioneering GEO Research & Methodology"
    },
    {
      id: "kentlundin-hub",
      title: "KentLundin.com – AI & Digital Strategy Hub",
      category: "ai",
      description: "Digital research hub publishing frameworks, interactive diagrams, and whitepapers on the future of digital influence and AI visibility.",
      detailedDescription: "Designed to educate marketers, educators, and enterprise leaders on shifting from traditional keyword SEO to semantic entity-based authority. Highlights strategies for optimizing brand footprints for LLM citation engines.",
      tags: ["Digital Marketing", "Thought Leadership", "Content Strategy", "MarTech"],
      liveUrl: "https://kentlundin.com/about/",
      githubUrl: "",
      featured: true,
      metrics: "Thousands of monthly professional readers"
    },
    {
      id: "policytech-board",
      title: "PolicyTech International – Board Advisory",
      category: "tools",
      description: "Served on the Board of Directors for PolicyTech International, guiding strategic market positioning and governance leading to acquisition by Navex Global.",
      detailedDescription: "Advised executive leadership on go-to-market strategies, software product alignment, and compliance management solutions, culminating in successful enterprise acquisition.",
      tags: ["Corporate Governance", "Board of Directors", "M&A", "SaaS Strategy"],
      liveUrl: "https://kentlundin.com",
      githubUrl: "",
      featured: true,
      metrics: "Successfully Acquired by Navex Global, Inc."
    },
    {
      id: "hotdocs-growth",
      title: "HotDocs, Inc. – Startup Growth & Acquisition",
      category: "tools",
      description: "Strategic advisory supporting document automation startup HotDocs through critical growth phases leading to acquisition by LexisNexis.",
      detailedDescription: "Provided product commercialization insights, digital demand generation, and positioning strategies in legal technology automation.",
      tags: ["Tech Startup", "LegalTech", "Scale-Up", "LexisNexis Acquisition"],
      liveUrl: "https://kentlundin.com",
      githubUrl: "",
      featured: false,
      metrics: "Acquired by LexisNexis"
    }
  ],

  // --- Work Experience Timeline ---
  experience: [
    {
      role: "Professor of Digital Marketing",
      company: "Brigham Young University–Idaho",
      location: "Rexburg, ID",
      period: "2004 - Present (20+ Years)",
      achievements: [
        "Educated and mentored thousands of university students in digital marketing, analytics, SEO/GEO, and digital entrepreneurship.",
        "Pioneered first-of-its-kind curriculum integrating Generative Engine Optimization (GEO) and AI workflow tools into undergraduate marketing degree programs.",
        "Founded KentLundin.com to publish open-access research, visual frameworks, and thought leadership on AI-driven marketing strategies."
      ]
    },
    {
      role: "Board of Directors & Strategic Advisor",
      company: "PolicyTech International, Inc.",
      location: "Rexburg, ID",
      period: "Advisory Tenure",
      achievements: [
        "Served on the Board of Directors, steering corporate governance and SaaS market expansion.",
        "Guided strategic initiatives that positioned the firm for successful acquisition by Navex Global, Inc."
      ]
    },
    {
      role: "Strategic Growth Advisor",
      company: "HotDocs, Inc.",
      location: "Utah / Idaho",
      period: "Advisory Tenure",
      achievements: [
        "Advised leadership during pivotal growth scaling phase in legal document automation technology.",
        "Supported market expansion strategies leading to acquisition by LexisNexis."
      ]
    }
  ],

  // --- Education & Academic Credentials ---
  education: [
    {
      degree: "Faculty Member, Department of Marketing",
      institution: "Brigham Young University–Idaho",
      year: "2004 - Present",
      details: "Senior faculty member shaping digital marketing, analytics, and AI education across the university."
    }
  ],

  // --- Certifications & Professional Affiliations ---
  certifications: [
    {
      name: "Thought Leader: Generative Engine Optimization (GEO)",
      issuer: "KentLundin.com / BYU-Idaho",
      year: "2024 - Present",
      credentialUrl: "https://kentlundin.com"
    },
    {
      name: "Leadership & Community Partner",
      issuer: "Snake River Digital Marketing Collective (DMC)",
      year: "Ongoing",
      credentialUrl: "https://kentlundin.com"
    }
  ]
};

// Export to window for browser usage
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
