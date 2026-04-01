export type Service = {
  id: string;
  slug: string;
  title: string;
  heroImage: string;
  summary: string;
  description: string[];
  highlights: string[];
  bullets?: {
    title?: string;
    items: string[];
  }[];
  gallery?: {
    title: string;
    images: { src: string; alt: string }[];
  }[];
};

export const services: Service[] = [
  {
    id: 'export',
    slug: 'export',
    title: 'Export',
    heroImage:
      // 'https://images.unsplash.com/photo-1530023367847-a683933f4177?q=80&w=1600&auto=format&fit=crop',
      '/export.jpg',
    summary:
      'International irrigation programs with localized design, training, and support across Asia, the Middle East, and Africa.',
    description: [
      'Over the years, farmers, horticulturists and plantation owners from many developing agricultural economies across Asia, Middle East and Africa have benefited from our expertise.',
      'With experience across diverse crops, climates and soils, we tailor practical and economical solutions that global customers rely on.',
      'Facilities and processes enable us to work with local partners and farmers to evolve solutions that match site needs and ensure success.',
      'We provide equipment, training, and after-sales support from design through to on-site commissioning at customer doorstep.',
    ],
    highlights: [
      'Localized design for challenging terrains',
      'Gravity kit redesigns for cost efficiency',
      'Factory and on-site training',
      'End-to-end after-sales support',
    ],
  },
  {
    id: 'subsidy',
    slug: 'subsidy',
    title: 'Subsidy',
    heroImage:
      // 'https://images.unsplash.com/photo-1520671454184-dc4ac155cb5c?q=80&w=1600&auto=format&fit=crop',
      '/subsidy.webp',
    summary:
      'Scheme-compliant irrigation deployments with approvals, documentation, and installations aligned to government guidelines.',
    description: [
      'Pradhan Mantri Krishi Sinchayee Yojna (PMKSY) was launched on 1 July 2015 with the vision of “Har Khet ko Pani” to extend irrigation coverage and improve water-use efficiency through end-to-end solutions covering source creation, distribution, management, field application, and extension activities.',
      'Programme components include Accelerated Irrigation Benefit Programme (AIBP), Har Khet ko Pani for water-scarce areas, micro-level storage and precision irrigation systems, ridge/area treatment and watershed development, and Per Drop More Crop cost-sharing between state and central governments (typical split 55%/45%, state variations apply).',
    ],
    bullets: [
      {
        title: 'PMKSY Objectives',
        items: [
          'Achieve convergence of investments in irrigation at the field level.',
          'Expand cultivable area under assured irrigation.',
          'Improve on-farm water-use efficiency to reduce wastage of water.',
          'Enhance adoption of precision irrigation and other water-saving technologies.',
          'Introduce sustainable water-conservation practices, including reuse of treated municipal wastewater for peri-urban agriculture.',
          'Enhance recharge of aquifers.',
          'Attract private investment in precision irrigation systems.',
        ],
      },
      {
        title: 'Programme Components',
        items: [
          'Accelerated Irrigation Benefit Programme (AIBP) for faster completion of major and medium projects.',
          'Har Khet ko Pani: focus on water plenty to water-scarce areas, rainwater harvesting, and restoration of traditional bodies (MoWR, RD&GR).',
          'Micro-level storage, efficient conveyance & application, precision irrigation, and storage/extension activities (DAC&FW).',
          'Watershed Development: ridge-area treatment, drainage line treatment, soil and moisture conservation, water harvesting, livelihood support (DoLR).',
          'Per Drop More Crop: cost shared by state and central governments (typ. 55%/45%; varies by state).',
        ],
      },
    ],
    highlights: [
      'Converge irrigation investments at field level',
      'Expand cultivable area under assured irrigation',
      'Improve on-farm water-use efficiency',
      'Enhance adoption of precision & water-saving tech',
      'Promote reuse of treated wastewater for peri-urban agriculture',
      'Enhance recharge of aquifers',
      'Attract private investment in precision irrigation systems',
      'Inspection-ready documentation and compliance support',
    ],
  },
  {
    id: 'non-subsidy',
    slug: 'non-subsidy',
    title: 'Non-Subsidy',
    heroImage:
      // 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop',
      "/plant_2.jpeg",
    summary:
      'Fast, flexible irrigation projects for customers who prefer direct procurement without scheme constraints.',
    description: [
      'SRA Polymers has introduced new products to cater to the needs of the farming community – including corporates, leased farmers and large farmers who do not fall under the subsidy limit/eligibility and are not willing to have a huge waiting period.',
      'Our products are affordable and highly cost-effective, the result of SRA POLYMER’s constant innovation and product optimization.',
    ],
    highlights: [
      'Direct procurement',
      'Custom system design',
      'Rapid delivery',
      'Flexible SLAs',
    ],
    gallery: [
      {
        title: 'Drip In',
        images: [
          {
            // src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600&auto=format&fit=crop',
            src:"/pipes.jpeg",
            alt: 'Drip In coil 1',
          },
          {
            // src: 'https://images.unsplash.com/photo-1602524813303-29b0d2d0b7e8?q=80&w=600&auto=format&fit=crop',
            src: '/pipe_2.jpeg',
            alt: 'Drip In coil 2',
          },
          {
            // src: 'https://images.unsplash.com/photo-1602524813303-29b0d2d0b7e8?q=80&w=600&auto=format&fit=crop',
            src: '/nozel.jpeg',
            alt: 'Drip In coil 2',
          },
        ],
      },
      // {
      //   title: 'InDrip Lite',
      //   images: [
      //     {
      //       src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop',
      //       alt: 'InDrip Lite roll 1',
      //     },
      //     {
      //       src: 'https://images.unsplash.com/photo-1568600891621-2b9c0b76e3c0?q=80&w=600&auto=format&fit=crop',
      //       alt: 'InDrip Lite roll 2',
      //     },
      //   ],
      // },
      // {
      //   title: 'Plain Lateral',
      //   images: [
      //     {
      //       src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=600&auto=format&fit=crop',
      //       alt: 'Plain lateral roll 1',
      //     },
      //     {
      //       src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=600&auto=format&fit=crop',
      //       alt: 'Plain lateral roll 2',
      //     },
      //   ],
      // },
    ],
  },
  {
    id: 'plantation',
    slug: 'plantation',
    title: 'Plantation',
    heroImage:
      // 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1600&auto=format&fit=crop',
      "/field_3.jpeg",
    summary:
      'High-pressure capable sprinkler and piping systems tailored for tea, coffee, and cardamom plantations with full lifecycle support.',
    description: [
      'SRA POLYMERS is the pioneer manufacturer of modern water-saving irrigation systems and equipment in India.',
      'We have developed rugged, high-pressure capable sprinkler and piping systems for plantations that have helped tea plantations in North East India and tea, coffee, and cardamom plantations in South India.',
      'We provide customized design, post-sales service, and customer support to enable plantation owners to get high returns on their investment.',
    ],
    highlights: [
      'High-pressure capable sprinkler and piping systems',
      'Customized plantation design and layouts',
      'Post-sales service and customer support',
      'Focused on tea, coffee, and cardamom estates',
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
