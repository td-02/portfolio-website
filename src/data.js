export const links = {
  email: 'mailto:tapeshdas2002@gmail.com',
  github: 'https://github.com/td-02',
  scholar: 'https://scholar.google.com/citations?user=bz5uLYcAAAAJ&hl=en',
  springer: 'https://link.springer.com/chapter/10.1007/978-981-96-8694-0_20',
  substack: 'https://substack.com/@tapeshchandradas?utm_source=user-menu',
  medium: 'https://medium.com/'
};

export const projectArtifacts = [
  {
    title: 'Event-Driven Market Replay & Execution System',
    description:
      'A high-performance event-driven simulation framework designed to replay historical market data streams and evaluate algorithmic execution strategies under realistic microstructure conditions.',
    highlights: [
      'Event queue architecture for strict ordering and extensibility',
      'Deterministic replay engine for reproducible experiments',
      'Strategy plug-in interface for rapid alpha prototyping',
      'Latency-aware simulation of execution pathways',
      'Research-oriented modular design for benchmark studies'
    ],
    tags: ['Distributed Systems', 'Event Processing', 'Quant Infrastructure', 'Execution Simulation'],
    github: 'https://github.com/td-02/event-driven-market-replay-execution-system'
  },
  {
    title: 'Market Impact-Aware Algorithmic Trade Execution',
    description:
      'A quantitative execution framework modeling market impact dynamics to optimize trade scheduling strategies. Implements cost-aware execution algorithms incorporating liquidity constraints and slippage modeling.',
    highlights: [
      'Impact function modeling for temporary and permanent effects',
      'Adaptive order slicing based on market liquidity signals',
      'Slippage simulation under varying participation regimes',
      'Performance analytics for post-trade cost attribution'
    ],
    tags: ['Quantitative Finance', 'Optimization', 'Market Microstructure', 'Algorithmic Trading'],
    github: 'https://github.com/td-02/market-impact-aware-algorithmic-trade-execution'
  },
  {
    title: 'Legal Text Classification (BERT-Based)',
    description:
      'A transformer-based NLP framework for semantic classification of legal documents using fine-tuned BERT architectures. Focused on improving contextual understanding in domain-specific corpora.',
    highlights: [
      'Fine-tuned BERT model for legal-domain semantics',
      'TF-IDF baseline comparisons for rigorous benchmarking',
      'Precision/Recall/F1 evaluation across class labels',
      'Research-grade experimentation pipeline with traceability'
    ],
    tags: ['NLP', 'Transformers', 'Text Classification', 'Legal AI'],
    github: 'https://github.com/td-02/legal-text-classification'
  },
  {
    title: 'Chronos-DS Engine',
    description:
      'A data systems engine designed for structured data stream processing and experimental system-level data workflows. Built with emphasis on modularity, reproducibility, and scalable experimentation.',
    highlights: [
      'Stream abstraction layer for composable data ingestion',
      'Pipeline orchestration primitives for controlled workflows',
      'Clean data engineering architecture for maintainability',
      'Reproducible experiments via configuration-first design'
    ],
    tags: ['Data Systems', 'Stream Processing', 'Architecture', 'Engineering Infrastructure'],
    github: 'https://github.com/td-02/chronos-ds-engine'
  }
];

export const researchItems = [
  {
    title: 'AI-Powered Business Intelligence Agent (Indian Statistical Institute)',
    description:
      'Designed and evaluated an AI-assisted analytics workflow for converting heterogeneous enterprise signals into decision-ready intelligence artifacts. The work emphasizes pragmatic model integration and explainable output layers for organizational stakeholders.'
  },
  {
    title: 'Semantic Understanding of Legal Texts (Springer LNNS)',
    description:
      'Researched transformer-driven legal text classification with a BERT-focused methodology to improve contextual understanding across complex legal corpora. The study includes classical baseline comparisons and empirical performance analysis suitable for academic dissemination.'
  },
  {
    title: 'PDF Security & SHA-256 Cryptographic Analysis',
    description:
      'Conducted a systems-oriented security investigation into PDF integrity mechanisms, emphasizing SHA-256 based authenticity verification and tamper-detection behavior under adversarial document manipulation scenarios.'
  },
  {
    title: 'Pet Pose Estimation Using YOLOv8 (Samsung PRISM)',
    description:
      'Implemented and benchmarked pose estimation workflows for pet imagery using YOLOv8, focusing on inference quality, keypoint robustness, and model behavior under real-world environmental variations.'
  }
];

export const skillGroups = [
  {
    category: 'Programming',
    items: [
      { name: 'Python', level: 92 },
      { name: 'Java', level: 80 },
      { name: 'C', level: 76 },
      { name: 'C++', level: 79 }
    ]
  },
  {
    category: 'Systems & Infrastructure',
    items: [
      { name: 'Event-driven design', level: 90 },
      { name: 'Simulation engines', level: 86 },
      { name: 'Stream processing', level: 84 }
    ]
  },
  {
    category: 'Machine Learning',
    items: [
      { name: 'BERT', level: 88 },
      { name: 'YOLOv8', level: 78 },
      { name: 'Transformers', level: 85 },
      { name: 'Anomaly Detection', level: 74 }
    ]
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS', level: 81 },
      { name: 'Docker', level: 84 },
      { name: 'Terraform', level: 72 }
    ]
  },
  {
    category: 'Web',
    items: [
      { name: 'React', level: 86 },
      { name: 'MERN', level: 83 }
    ]
  }
];
