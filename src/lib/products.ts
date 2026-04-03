export type ProductCategory = {
  title: string;
  items: string[];
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  image: string;
  shortDescription: string;
  description: string;
  categories: ProductCategory[];
};

export const products: Product[] = [
  {
    id: 'sprinklers',
    slug: 'sprinklers',
    title: 'Sprinklers',
    image:
      // 'https://images.unsplash.com/photo-1558449028-b53a39d100fc9?q=80&w=1600&auto=format&fit=crop',
      "/sprinkler_prod.jpeg",
    shortDescription:
      'Uniform, wide-area irrigation using impact and rain-gun sprinklers built for tough field conditions.',
    description:
      'Precision-engineered sprinklers that deliver even coverage for row crops, orchards, and field corners. Built with UV-stabilized polymers and brass nozzles to withstand pressure cycles and harsh sunlight while keeping maintenance low.',
    categories: [
      {
        title: 'Models',
        items: [
          '110SS (TM) (Single Nozzle)',
          '110+ST (TM) (Twin Nozzle)',
          'RAYN (TM)',
          'RAYN LOPS (TM) (Twin Nozzle, Low Operating Pressure)',
          'ZNO23 (Single Nozzle)',
          'ZNO23D (Twin Nozzle)',
          'ZNO23W (Full and Part Circle)',
          'ZNO23LOPS (Twin Nozzle, Low Operating Pressure)',
          '150SS (Single Nozzle)',
          '150ST (Twin Nozzle)',
          'ZL22 (Single Nozzle)',
          'ZL22D (Twin Nozzle)',
          'ZL22W (Full and Part Circle)',
          'ZL22LOPS (Twin Nozzle, Low Operating Pressure)',
        ],
      },
      {
        title: 'Types',
        items: ['Impact sprinklers', 'Rain-gun sprinklers', 'Micro-sprinklers'],
      },
      {
        title: 'Systems',
        items: [
          'Full-circle and part-circle rotation options',
          'Adjustable trajectory nozzles',
          'Quick-coupling risers and stands',
        ],
      },
      {
        title: 'Features',
        items: [
          'Uniform droplet distribution for low wind drift',
          'Corrosion-resistant components',
          'Service-friendly swivels and seals',
        ],
      },
    ],
  },
  {
    id: 'drip',
    slug: 'drip',
    title: 'Drip',
    image:
      // 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop',
      "/drip_prod.png",
    shortDescription:
      'Water-efficient drip lines with pressure-compensating emitters for vegetables, orchards, and greenhouses.',
    description:
      'High-uniformity drip systems that protect root zones, minimize evaporation, and maintain clog resistance. Ideal for open field vegetables, orchards, and protected cultivation where precise moisture control drives yield.',
    categories: [
      {
        title: 'Product Lines',
        items: ['Drip In', 'LLDPE Tubing', 'InDrip', 'Tapes - InDrip Lite'],
      },
      {
        title: 'Emitters',
        items: ['TABE', 'EDEN PCND', 'NAYA', 'NEIN EPC'],
      },
      {
        title: 'Filters',
        items: [
          'Disc Filters',
          'Sand/Media Filters',
          'Mesh/Screen Filters',
          'Stainless Steel Mesh/Screen Filters',
          'Hydrocyclone Filters',
        ],
      },
      {
        title: 'Accessories',
        items: ['Spray Jets', 'Fertilizer Tanks', 'Air and Vacuum Relief Valves', 'Venturi Injector'],
      },
      {
        title: 'Foggers',
        items: ['Foggers - One Way, Four Way and Assembly'],
      },
      {
        title: 'Types',
        items: ['Flat inline drip lines', 'Round inline drip laterals', 'On-line button drippers'],
      },
      {
        title: 'Systems',
        items: [
          'Filtration and fertigation-ready manifolds',
          'Pressure-compensating and non-PC options',
          'Sub-surface and surface layouts',
        ],
      },
      {
        title: 'Features',
        items: [
          'Anti-siphon and anti-clog emitters',
          'UV-stabilized LLDPE construction',
          'Wide labyrinth flow paths for debris tolerance',
        ],
      },
    ],
  },
  {
    id: 'portable-hdpe-piping',
    slug: 'portable-hdpe-piping',
    title: 'Portable HDPE Piping',
    image:
      // 'https://images.unsplash.com/photo-1584017374018-09142ec3b499?q=80&w=1600&auto=format&fit=crop',
      "/hdpe_system_prod.jpg",
    shortDescription:
      'Move water fast with lightweight, flexible HDPE piping built for rapid field deployment.',
    description:
      'Portable HDPE piping systems engineered for quick coupling, easy relocations, and dependable flow. Designed for farms that reconfigure irrigation blocks frequently and need rugged pipes that resist kinks and abrasion.',
    categories: [
      {
        title: 'Systems',
        items: [
          'SuperLoc (TM) System',
          'SuperLoc (TM) High Pressure System',
          'QwikLoc (TM) System',
          'RotoLoc (TM) System',
          'EasiLoc (TM) System',
          'SLX++ (TM)',
        ],
      },
      {
        title: 'Types',
        items: ['Coiled portable laterals', 'Quick-joint delivery mains', 'Flexible drag hoses'],
      },
      {
        title: 'Couplers & Compatibility',
        items: [
          'Clamp and quick-coupling connectors',
          'Hydrant take-offs and valves',
          'Compatible with sprinkler and drip manifolds',
        ],
      },
      {
        title: 'Features',
        items: [
          'High tensile strength with low weight',
          'Crack- and kink-resistant HDPE',
          'Smooth inner bore for reduced friction losses',
        ],
      },
    ],
  },
  {
    id: 'hdpe-pipes',
    slug: 'hdpe-pipes',
    title: 'HDPE Pipes',
    image:
      "/hdpe-coil-pipes_prod.jpg",
    shortDescription:
      'Pressure-rated HDPE pipes for long-life irrigation mains, submains, and infrastructure lines.',
    description:
      'Industrial-grade HDPE pipes extruded with consistent wall thickness, excellent crack resistance, and high pressure ratings. Suitable for underground mains, booster pump connections, and rugged agricultural networks.',
    categories: [
      {
        title: 'Product Formats',
        items: ['HDPE Plain Pipes', 'HDPE Coiled Pipes', 'Shouldered End Piping System (SEHDPE TM)'],
      },
      {
        title: 'Standards',
        items: ['IS:4984', 'IS:14151 Part 1'],
      },
      {
        title: 'Types',
        items: ['PN 4 to PN 16 pressure classes', 'Coils and straight lengths', 'Butt-fusion compatible ends'],
      },
      {
        title: 'Systems',
        items: [
          'Butt-fusion, electrofusion, and compression fittings',
          'Buried and above-ground installation',
          'Compatible with steel and PVC transitions',
          'Shouldered end piping compatibility (SEHDPE TM)',
        ],
      },
      {
        title: 'Features',
        items: [
          'High impact strength and chemical resistance',
          'Smooth bore for low head loss',
          'Long service life with UV stabilization',
        ],
      },
    ],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
