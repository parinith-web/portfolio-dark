import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Handtracking Piano',
    category: 'Computer Vision',
    year: '2025',
    slug: 'handtracking-piano',
    coverImage: '/projects/handtracking-piano.svg',
    description:
      'A real-time browser-based piano that turns hand landmarks into playable notes using MediaPipe and Tone.js, all running client-side through WebAssembly.',
    role: 'Built the gesture pipeline, browser inference flow, and audio interaction system.',
    client: 'Live Product',
    camera: 'React, TypeScript, MediaPipe, Tone.js, Vite, WebAssembly',
    location: 'Browser-based, on-device inference',
    techStack: ['React', 'TypeScript', 'MediaPipe', 'Tone.js', 'Vite', 'WebAssembly'],
    highlights: [
      'Engineered a real-time hand-tracking pipeline with sub-50ms end-to-end inference across 21 landmarks per frame.',
      'Designed a debounced gesture-to-audio mapping system with a 100ms cooldown to suppress jitter and improve note stability.',
      'Kept the full experience client-side for fast response, lower latency, and zero backend dependency.'
    ],
    links: {
      live: 'https://handtracking-piano.vercel.app/',
      repo: 'https://github.com/parinith-web/Handtracking-Piano'
    },
    images: [
      {
        id: '1-1',
        src: '/projects/handtracking-piano.svg',
        alt: 'Handtracking Piano project cover',
        aspectRatio: 'landscape',
        caption: 'Real-time hand landmark detection and browser audio synthesis.'
      }
    ]
  },
  {
    id: '2',
    title: 'Audify',
    category: 'Machine Learning',
    year: '2025',
    slug: 'audify',
    coverImage: '/projects/audify.svg',
    description:
      'A content-aware music recommendation system trained on Spotify audio features, combining clustering and similarity search for more relevant song discovery.',
    role: 'Built the recommendation logic, ML workflow, and product-facing application layer.',
    client: 'ML Recommendation Engine',
    camera: 'Python, Next.js, Scikit-learn, Spotify API, K-Means',
    location: 'Data-driven personalization',
    techStack: ['Python', 'Next.js', 'Scikit-learn', 'Spotify API', 'K-Means Clustering'],
    highlights: [
      'Trained on 10,000+ Spotify tracks using high-dimensional audio features like tempo, energy, valence, and danceability.',
      'Implemented a hybrid pipeline using cluster retrieval plus cosine similarity ranking.',
      'Balanced recommendation quality with discovery using 80% intra-cluster retrieval and 20% cross-cluster diversity sampling.'
    ],
    links: {
      repo: 'https://github.com/parinith-web/Audify'
    },
    images: [
      {
        id: '2-1',
        src: '/projects/audify.svg',
        alt: 'Audify project cover',
        aspectRatio: 'landscape',
        caption: 'Audio-feature clustering and hybrid recommendation ranking.'
      }
    ]
  },
  {
    id: '3',
    title: 'PurePixels',
    category: 'Full-Stack',
    year: '2025',
    slug: 'purepixels',
    coverImage: '/projects/purepixels.svg',
    description:
      'A full-stack image segmentation platform with FastAPI-powered background removal, account-aware request handling, and low-latency transparent PNG delivery.',
    role: 'Built the backend architecture, image-processing workflow, and the application stack around it.',
    client: 'Production-style Full-Stack Platform',
    camera: 'Next.js, TypeScript, Tailwind CSS, FastAPI, PostgreSQL',
    location: 'Scalable API and image workflow',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL'],
    highlights: [
      'Delivered transparent PNG outputs with sub-5 second processing latency.',
      'Engineered a RESTful backend for authentication, metadata persistence, and request validation.',
      'Enforced per-user daily rate limits while supporting 100+ concurrent sessions.'
    ],
    links: {
      repo: 'https://github.com/parinith-web/purepixels'
    },
    images: [
      {
        id: '3-1',
        src: '/projects/purepixels.svg',
        alt: 'PurePixels project cover',
        aspectRatio: 'landscape',
        caption: 'Background removal pipeline with user-aware API workflows.'
      }
    ]
  },
  {
    id: '4',
    title: 'F1 Strategy Prediction Engine',
    category: 'Research ML',
    year: '2026',
    slug: 'f1-strategy-prediction-engine',
    coverImage: '/projects/f1-strategy.svg',
    description:
      'A motorsport strategy modeling system that combines telemetry cleaning, stint-level feature engineering, and chained ML models to predict lap time, pit timing, and tyre compound decisions.',
    role: 'Designed the telemetry pipeline, feature engineering strategy, and model chain.',
    client: 'Research Project',
    camera: 'Python, XGBoost, Pandas, scikit-learn, Optuna, Streamlit',
    location: 'Telemetry ingestion and race strategy prediction',
    techStack: ['Python', 'XGBoost', 'Pandas', 'scikit-learn', 'Optuna', 'Streamlit'],
    highlights: [
      'Processed 200k+ laps across 20+ circuits and 4 seasons using FastF1 telemetry ingestion.',
      'Implemented safety-car filtering, fuel-load correction, and tyre degradation estimation using OLS slope fitting.',
      'Designed chained models with season-blocked validation to avoid temporal leakage across 2021-2024 race data.'
    ],
    links: {
      repo: 'https://github.com/parinith-web/f1-strategy-ml'
    },
    images: [
      {
        id: '4-1',
        src: '/projects/f1-strategy.svg',
        alt: 'F1 Strategy Prediction Engine project cover',
        aspectRatio: 'landscape',
        caption: 'Race telemetry pipeline and chained models for strategy decisions.'
      }
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
