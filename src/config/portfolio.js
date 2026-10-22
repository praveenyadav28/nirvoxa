export const portfolioData = [
  {
    id: 'garage-flow-concept',
    slug: 'garage-flow-concept',
    title: 'Multi-Branch Automotive Workshop Suite',
    category: 'SaaS Products',
    type: 'Concept Architecture',
    tagline: 'Streamlined job cards, technician queues & parts billing for modern garages',
    description:
      'A comprehensive demonstration system built to showcase end-to-end garage operations: from customer WhatsApp estimate approval to automated bay allocation and GST-ready invoicing.',
    challenge:
      'Garages frequently suffer from unbilled spare parts, miscommunicated repairs with vehicle owners, paper job cards getting lost, and inaccurate revenue calculations.',
    solution:
      'We designed an intuitive, touch-friendly digital job card interface with automatic inventory deduction upon mechanic issue, digital customer signature capture, and automated follow-up scheduling.',
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'WebSockets'],
    keyFeatures: [
      'Digital Job Card with vehicle inspection canvas',
      'Barcode-driven spare parts catalog & billing',
      'Live mechanic bay status monitors',
      'Automated WhatsApp estimate approval links',
    ],
    isConcept: true,
  },
  {
    id: 'omni-stock-concept',
    slug: 'omni-stock-concept',
    title: 'Multi-Warehouse Inventory & Fulfillment Hub',
    category: 'Business Management Systems',
    type: 'Concept Architecture',
    tagline: 'Real-time stock balancing, batch tracking & barcode dispatch',
    description:
      'An enterprise inventory management concept engineered for high-volume wholesale distributors needing real-time bin allocation, automated purchase orders, and multi-location transfer orders.',
    challenge:
      'Manual spreadsheets resulted in frequent stock discrepancies, expired batches, and delayed order picking during peak customer hours.',
    solution:
      'A centralized cloud inventory architecture featuring mobile barcode scanning, automated FEFO dispatch, and intelligent reorder thresholds based on historical sales velocity.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Redis', 'PostgreSQL'],
    keyFeatures: [
      'Visual bin & aisle layout tracker',
      'Batch, serial & expiry date control',
      'Inter-branch stock transfer workflows',
      'Automated purchase order recommendations',
    ],
    isConcept: true,
  },
  {
    id: 'diagnostix-lims-concept',
    slug: 'diagnostix-lims-concept',
    title: 'Pathology & Diagnostic Laboratory Platform',
    category: 'Web Applications',
    type: 'Concept Architecture',
    tagline: 'Barcode specimen accessioning, dual-step approval & digital report dispatch',
    description:
      'A streamlined laboratory workflow demonstration illustrating sample tracking from phlebotomy collection to automated analyzer integration and instant patient report delivery.',
    challenge:
      'Diagnostic centers need to prevent specimen mix-ups, reduce report turnaround time (TAT), and ensure strict quality control before report issuance.',
    solution:
      'Built a barcode-governed LIMS workflow with parameter range anomaly alerts, dual verification by technicians and pathologists, and secure PDF delivery via QR-verified links.',
    techStack: ['React', 'Node.js', 'Express', 'PDFKit', 'MongoDB'],
    keyFeatures: [
      'Specimen barcode label generation',
      'Configurable biological reference norms',
      'Two-step verification (Technician + Doctor)',
      'WhatsApp & patient portal PDF delivery',
    ],
    isConcept: true,
  },
  {
    id: 'staycore-pms-concept',
    slug: 'staycore-pms-concept',
    title: 'Dual-Mode Hotel & Hostel Property System',
    category: 'Custom Software',
    type: 'Concept Architecture',
    tagline: 'Seamless room reservations and student hostel bed allocation',
    description:
      'A versatile property management concept addressing both daily transient hotel bookings and monthly recurring student hostel bed subscriptions.',
    challenge:
      'Standard hotel software cannot handle individual student bed allocation and recurring monthly fee schedules, while hostel tools lack hotel-grade booking calendars.',
    solution:
      'Created a hybrid accommodation platform featuring an interactive visual room/bed grid, digital KYC capture, automated monthly rent dues, and maintenance ticketing.',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    keyFeatures: [
      'Interactive room & bunk bed availability grid',
      'Digital guest ID proof capture & KYC',
      'Automated recurring hostel rent invoicing',
      'Housekeeping status & repair ticket tracking',
    ],
    isConcept: true,
  },
];
