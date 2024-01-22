import type {
  CardContentType,
  HomeBgContentType,
  ListType,
  NavLinksType,
} from '~/types';

export const NavLinks: NavLinksType[] = [
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'About',
    path: '/about',
  },
  {
    text: 'Products & Services',
    path: '/services',
  },
  {
    text: 'Industry',
    path: '/industry',
  },
  {
    text: 'Career',
    path: '/career',
  },
  {
    text: 'Gallery',
    path: '/gallery',
  },

  {
    text: 'Contact',
    path: '/contact',
  },
] as const;

export const ProductCardContent: CardContentType[] = [
  {
    cardTitle: ' Electrical Contracting Service',
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FpowerPlant.jpg?alt=media&token=cf0504d6-e755-4739-b974-d49cca3fbefe',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-1.jpg?alt=media&token=64fa3bae-1d6b-4fb1-b126-09677f93699a',
    cardText:
      'ANTRUM ENGINEERING is an experienced and reputable electrical contractor which provides professional electrical construction, installation testing and commissioning. We deliver project on time and within budget…..',
  },
  {
    cardTitle: 'Power Plant Development & Installations',
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2F3d.jpg?alt=media&token=c2617a76-94a4-4fca-9772-6490cc38969e',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2F3d-blur.jpg?alt=media&token=419afc0f-4c49-4b3d-93ed-a0f22298a9b5',
    cardText:
      'Every application (Industrial or Residential) has its peculiar power demand (requirement) which informs the requisite power solution to be implemented….',
  },
  {
    cardTitle: `Power Infrastructure Management`,
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FpowerInfra.jpg?alt=media&token=28786c86-dc40-4a58-b9bb-eeee0169ddda',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-2.jpg?alt=media&token=2d37f080-79ee-4f88-b11c-a3f829ad38e4',
    cardText: `Proper power management is germane for reliable power and desirable equipment/ infrastructure useful life span. Adherence to the OEM’s (Original Equipment Manufacturer) operational and maintenance standards; use of requisite tools and relevant technology ensures a reliable system.
`,
  },
  {
    cardTitle: 'Electrical Panels',
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-10.jpg?alt=media&token=8baa552a-7fb3-4d64-9c71-b62d6118d20b',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-15.jpg?alt=media&token=64e751d7-9f56-4993-a5c8-517fc6c4b913',
    cardText:
      'For proper electrical gadget installation and standardisation, Electrical panel form an integral part of the installation from where trained personnel can monitor and control the functioning of…',
  },
  {
    cardTitle:
      'Metering Service Provision – Specification, Supply & Installation',
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fsmart-meter%20(1).jpg?alt=media&token=20a33733-2dd9-49b5-b222-d0601c0b41c6',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-16.jpg?alt=media&token=3da95fb8-0f65-4a34-ae94-44f1c8c894c9',
    cardText:
      'Being accustomed to the Nigeria metering code, standards and specification in relation to the customer’s needs, AET has delivered successfully in metering service provision ranging from……',
  },
  {
    cardTitle: 'Solar Inverter System',
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FsolarPanels.jpg?alt=media&token=fcc8a7ba-902e-46e7-b7e0-39bb1649bc82',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-4.jpg?alt=media&token=929f9bd7-8508-43f0-9a0b-ceace7ae1c1e',
    cardText: `AET has several experiences in solar electrification and inverter for industries, hospital, pharmacy others where uninterruptible power is paramount.
      We offer installation, maintenance and supply of PV solar panel, batteries, inverters, charge…..
    `,
  },
  {
    cardTitle: `Generator Maintenance and Escalation intervention`,
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2FCAT-Big-Generator-Prices-in-Nigeria-nigeriantech.com_.ng_.jpg?alt=media&token=d939e65c-9a4d-4355-b79c-ed04abb96603',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-17.jpg?alt=media&token=71516845-0eb3-43be-a5e3-fdc24da6391f',
    cardText:
      'Good maintenance culture is key for an efficient diesel gen set unit. Rather than just filters and oil change, generator maintenance entails regular checks and part replacement at earmarked hours of operations as recommended by the OEM….',
  },
  {
    cardTitle: 'Rental power',
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Frental-power.jpg?alt=media&token=10ee5e2a-31f3-41d9-adf0-c3b990d10165',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fblur-9.jpg?alt=media&token=c205f58e-8b4a-4e56-a071-d6a44822bfd3',
    cardText: `Emergency stop gap is inevitable for most application without redundancy of times of unplanned breakdowns, short term projects, such as construction / development works, upgrade works, others.
    Such requires dependable rugged generator to satisfy immediate needs with no hassles…
    `,
  },
];

export const HomeBgContent: HomeBgContentType[] = [
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fpexels-saya-kimura-401107.jpg?alt=media&token=5ff37b4e-16d0-4a55-b86f-817382edca60',
    title: 'DELIVERING PROFICIENT TECHNICAL / AUTOMATED POWER SOLUTIONS ',
    subtitle: `We offer various forms of Power engineering services that encompass Power project development, Implementation, Standardization and Commissioning.
Our scope covers Grid, off grid, Island and Independent Power involving Planning, Installation, Testing and Commissioning.
`,
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fpexels-photomix-company-95916.jpg?alt=media&token=57f437ea-fa63-44e9-b51d-b2e17a240a14',
    title: 'REAL TIME DATA ORIENTED AND EFFICIENT POWER MANAGEMENT ',
    subtitle:
      '24/7 on-site operation and maintenance support with backend remote assistance banking on real time data for instant technical advice that help to ensure immediate resolution of escalation for dependable power.',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/carousel%2Fbg-2.jpg?alt=media&token=bf865a48-081d-48f3-b739-3ff76fa1efce',
    title:
      'INNOVATIVE RECOMMENDATION AND COST EFFECTIVE CLIENT- CENTRIC APPROACH ',
    subtitle:
      'AET has over a decade years of experience in PIM (power infrastructure management); Rural, Industrial and Residential electrification; High, Medium and Low Voltage Projects; Solar- Inverter Alternative Power; and Accustomed Technical Know-how on wide range of generators SDMO, CAT, Perkins and others, medium and large sizes.',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fpexels-anamul-rezwan-1216544.jpg?alt=media&token=91558421-099a-45a5-a54b-022da809c4b7',
    title: 'REQUIREMENT BASED CONSTRUCTION PROJECTS',
    subtitle:
      'We have proven experience of designing and constructing need specific solution for Electrical panels; Automation; Clear fuel supply Lines and Backup storages; HT and LT circuits, Street lighting and others.',
  },
] as const;

// export const ViewerImages: string[] = [
//   'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-3.jpg?alt=media&token=f44a8678-1f79-4f99-a09d-9db0166d5bf5',
//   'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-8.jpg?alt=media&token=400f964d-2acb-460d-9edc-b2df7917c04e',
// ] as const;

export const IndustriesCardContent: CardContentType[] = [
  {
    cardTitle: 'Real Estate',
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-2.jpg?alt=media&token=a9f163f1-beee-4d75-a26d-ba41885d0ed1',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-2.jpg?alt=media&token=57ed2eba-0364-4103-a28e-04c9dea83393',
  },
  {
    cardTitle: 'Commercial, Industrial & residential building',
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-7.jpg?alt=media&token=645c2f33-f6b3-4ee1-9a57-89872b028285',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-7.jpg?alt=media&token=ee96644f-8a0b-4494-89f4-0bb1514f66e0',
  },
  {
    cardTitle: 'Telecom',
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-5.jpg?alt=media&token=dbac563f-f876-4b2a-992c-9a3bcb2e90f5',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-5.jpg?alt=media&token=e1ded4bc-9b6b-42b0-ae0b-4637a58d5661',
  },
  {
    cardTitle: 'Manufacturing and Pharmaceuticals',
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-4.jpg?alt=media&token=17e103c2-ab59-46ca-aad7-e283f62d6d3c',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-4.jpg?alt=media&token=20ae48b4-0d80-4598-8377-0e12396b78ef',
  },
  {
    cardTitle: 'Hospital',
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-1.jpg?alt=media&token=8934c880-6d39-4cf5-9b6d-166ece9c9bb3',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-1.jpg?alt=media&token=688578e6-311a-4c76-8284-ba618cc596f9',
  },
  {
    cardTitle: 'Media House',
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-6.jpg?alt=media&token=9fa2240d-ac10-4bf6-b7b0-3b4723d8d101',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-6.jpg?alt=media&token=8135a053-98ec-431f-9ff0-db1e2c7e18a4',
  },
  {
    cardTitle: 'Agriculture',
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-8.jpg?alt=media&token=bb27e320-62bc-42b2-8c72-edf06d338c06',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-8.jpg?alt=media&token=09207f17-fba2-4122-80f5-aa7f6f622686',
  },
  {
    cardTitle: 'Food and Beverages',
    cardImage:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-3.jpg?alt=media&token=67ba7034-f300-40be-9ca9-df0df3c59c4b',
    cardImageLazyLoad:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Findustries%2Findus-blur-3.jpg?alt=media&token=a96cbd73-ca16-4ecc-987c-8c7e9d3cdf98',
  },
] as const;

export const AESSolutionList: ListType[] = [
  {
    title: 'Energy Efficiency Management Services (EEMS):',
    text: `We offer comprehensive energy
    efficiency management services to both residential and commercial clients. Our
    expertise lies in identifying energy wastage, implementing cost-effective solutions,
    and reducing environmental impact.`,
  },
  {
    title: 'Renewable Energy Solutions (RES):',
    text: `Antrum Energy Spectra leads the charge in the
    renewable energy revolution, delivering cutting-edge and reliable green energy
    solutions, including solar, wind, and other eco-friendly technologies. Our goal is to
    equip clients with sustainable energy choices, showcasing our unwavering
    commitment to a greener future.
    `,
  },
  {
    title: 'Smart Metering Solutions (SMS):',
    text: `We provide cutting-edge smart metering solutions
    that empower our clients with real-time energy consumption data. Our smart
    metering systems enable efficient energy usage, billing accuracy, and informed
    decision-making.`,
  },
  {
    title: 'Building-Integrated Photovoltaics (BIPV):',
    text: `AES excels in cutting-edge BIPV solutions,
    seamlessly blending solar panels into building design, creating energy-generating
    assets that harmonize aesthetics and functionality. solar, wind, and green tech, with a
    focus on empowering clients through sustainable energy choices.
    `,
  },
] as const;
export const ValueList: ListType[] = [
  {
    title: 'Teamwork',
    text: `Collaboration is fundamental to our success. We integrate teamwork into
    our operational methodology to ensure seamless coordination, efficient
    communication, and optimal results for all stakeholders.`,
  },
  {
    title: 'Innovation',
    text: `We embrace innovation in all aspects of our work, constantly seeking
    new and better ways to solve energy challenges and provide groundbreaking
    solutions.
    `,
  },
  {
    title: 'Sustainability',
    text: `We are dedicated to promoting sustainable practices that reduce
    carbon footprints, conserve resources, and contribute to a greener planet.
    `,
  },
  {
    title: 'Excellence',
    text: ` Our team is driven by a pursuit of excellence in every project we
    undertake, ensuring the highest quality of service and results that stand the test of
    time. `,
  },
  {
    title: 'Safety and Environment',
    text: `The safety of life and property is a cornerstone of our
    approach. We prioritize Health, Safety, and Environment (HSE) measures in all our
    practices, maintaining strict adherence to policies that safeguard the well-being of
    our employees, clients, and communities.`,
  },
] as const;

export const ClientsImage = [
  {
    id: 'Client 1',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-16.png?alt=media&token=3154c8f4-2d91-45e5-8ca8-f312c609376f',
  },

  {
    id: 'Client 2',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcli-1.jpg?alt=media&token=45df49dd-ed15-48d7-a976-d84f41a8130d',
  },
  {
    id: 'Client 3',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-10.jpg?alt=media&token=0917df94-fc3a-4911-b17e-a9dd80673e33',
  },
  {
    id: 'Client 4',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-4.jpg?alt=media&token=ed6584bd-e29f-4229-87eb-f3f7e7282e70',
  },
  {
    id: 'Client 5',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-9.jpg?alt=media&token=6a71c596-d079-4ba7-b5a9-1c4b43bc901a',
  },
  {
    id: 'Client 6',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-15.png?alt=media&token=323fff38-d204-4710-b47f-f662dc794f26',
  },
  {
    id: 'Client 7',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcli-5.jpg?alt=media&token=69e6ae09-e68b-4101-8106-90b7a1e642dd',
  },
  {
    id: 'Client 8',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcli-8.jpg?alt=media&token=0d8351cc-9601-488f-9706-8ec67fbc30aa',
  },
  {
    id: 'Client 9',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcli-2.jpg?alt=media&token=892ff47e-745a-4c2e-a99a-0c15aae967ed',
  },
  {
    id: 'Client 10',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2FNew%20clients%2Fcbre-excellerate_676.jpg?alt=media&token=36b44f85-94d5-4f85-bae3-4cd5530617f4',
  },
  {
    id: 'Client 11',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-7.jpg?alt=media&token=d3065474-c620-4c2f-946e-0ecf4ff5ac9e',
  },
  {
    id: 'Client 12',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-11.jpg?alt=media&token=8675312e-d7d4-4591-a70e-109f94417b9b',
  },
  {
    id: 'Client 13',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2FNew%20clients%2Fsas%20space.jpg?alt=media&token=8774f197-2782-4046-a857-b525308d532e',
  },
  {
    id: 'Client 14',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-3.jpg?alt=media&token=e6feb5bd-5d9d-4eef-b0dc-82747f5d6288',
  },
  {
    id: 'Client 15',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2FNew%20clients%2Fibedc-logo.png?alt=media&token=0d191e4b-67c3-429f-a660-6fbb3ddfe0a1',
  },
  {
    id: 'Client 16',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2FNew%20clients%2FColeman-Cables.png?alt=media&token=576a4a44-8261-4400-b080-a9d8de2debd3',
  },
  {
    id: 'Client 17',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-6.jpg?alt=media&token=95dfa127-5832-4f4e-ab6e-0c387786b320',
  },
  {
    id: 'Client 18',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2FNew%20clients%2Fsapio-u.jpeg?alt=media&token=f24721fc-d654-4218-91ec-f76a96738eae',
  },
  {
    id: 'Client 19',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcli-12.jpg?alt=media&token=ec3687e5-2221-4ace-9508-a7c81fbe3cf0',
  },
  {
    id: 'Client 20',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2FNew%20clients%2Ffountain.jpg?alt=media&token=0d1d02ba-f0da-472e-b002-05c4f4b5acf0',
  },
  {
    id: 'Client 21',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-14.jpg?alt=media&token=1d62087a-20dc-4e8c-b55e-48549f7eb868',
  },
  {
    id: 'Client 22',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2Fcl-13.jpg?alt=media&token=1e0c5f69-4c8c-4daa-bf4a-58410c3320f7',
  },
  {
    id: 'Client 23',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2FNew%20clients%2Furaga.png?alt=media&token=47c62964-781f-476f-88db-12bda20cf73d',
  },
  {
    id: 'Client 24',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2FNew%20clients%2FPerkins-Logo.png?alt=media&token=fea69bfd-a863-4ec6-8ab2-e601a2686899',
  },
  {
    id: 'Client 25',
    image:
      'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fclients%2FNew%20clients%2Fupdc.png?alt=media&token=1f8bd79a-bddb-4e66-a021-083eff69f394',
  },
] as const;

export const ViewerImages = [
  //Lastest one
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-68.jpg?alt=media&token=65f4eb65-279f-4397-befb-37e74df622f9',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-73.jpg?alt=media&token=1ed19292-c418-4d55-beaa-a525f5e82544',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-75.jpg?alt=media&token=fd0325f7-fcb9-4169-9063-ad97dabb7311',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-81.jpeg?alt=media&token=3ac59624-41b3-4339-90c1-4013b4261c1a',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-69.jpg?alt=media&token=0215ded1-0c05-4dd9-b0a7-eefa8e9c153e',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-70.jpg?alt=media&token=4b0498e1-d19c-45e3-9145-265bee27c4fd',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-71.jpg?alt=media&token=1121daff-c23b-413d-919c-083d10d160eb',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-72.jpg?alt=media&token=5371d158-cc91-4b3c-b7a3-eaff7762fe07',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-74.jpg?alt=media&token=7f4919f4-88e9-4d0f-8228-099606799c17',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-76.jpg?alt=media&token=6e6521b2-c9e6-4acf-98b0-389006ad5adf',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-79.jpeg?alt=media&token=e33d6653-4a8e-4cd1-a383-85e3087aa99a',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-80.jpeg?alt=media&token=3345ff7e-e500-430d-973b-439a87b71730',

  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-1.jpg?alt=media&token=8e40726c-7c15-48c7-9dd0-ce6a50af7d45',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-2.jpg?alt=media&token=ac91f986-1a4c-4ae6-a305-241946eef19d',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-3.jpg?alt=media&token=f44a8678-1f79-4f99-a09d-9db0166d5bf5',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-4.jpg?alt=media&token=620e008b-182a-4d98-9037-f968b702f45a',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-5.jpg?alt=media&token=aa138f7d-724e-48cf-9511-500f49ee1476',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-6.jpg?alt=media&token=2df17228-c830-48dc-8555-04b874707dcb',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-7.jpg?alt=media&token=6438dd2d-dac1-471a-b80f-3cba7a392d04',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-8.jpg?alt=media&token=400f964d-2acb-460d-9edc-b2df7917c04e',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-9.jpg?alt=media&token=4ce62dcd-2a7f-40a3-a562-9fcddb04e359',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-10.jpg?alt=media&token=8baa552a-7fb3-4d64-9c71-b62d6118d20b',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-11.jpg?alt=media&token=fc48cc5b-80be-4497-a58b-7e20a6bb70ea',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-12.jpg?alt=media&token=efdf8ac5-fbab-43bc-a9a5-172c351f5d7b',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-13.jpg?alt=media&token=9ca98da5-edb7-490f-87e6-612cb9f2ff09',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-14.jpg?alt=media&token=e8a2f0e5-6edb-4728-8916-71dd81a16cc5',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-15.jpg?alt=media&token=b7fd4191-4853-4e6a-9c1f-95c36ff11d5d',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-16.jpg?alt=media&token=b5922ff1-ef2a-4836-baac-02951e703d8e',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-17.jpg?alt=media&token=221ba65d-dcc1-4b9a-b3da-8a149a66d423',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-18.jpg?alt=media&token=01c56e52-5836-4524-913e-54efc9cd80de',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-19.jpg?alt=media&token=89780da0-47a0-4a18-953c-fcfe13661cb3',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-20.jpg?alt=media&token=1369e228-a923-4394-ab93-62b2d817a97e',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-21.jpg?alt=media&token=46d9b12b-7eb2-413b-a3e3-a756c904a79f',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-22.jpg?alt=media&token=9f4c985c-af32-4f2b-9ba7-4fce7fcd82d2',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-23.jpg?alt=media&token=5b7a0cde-045d-459a-8eb3-95255e5627d6',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-24.jpg?alt=media&token=2f6fae64-c1bc-48a4-91dc-d3580cbf8e3f',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-25.jpg?alt=media&token=53b0f0ea-0f19-40cd-9429-3db3a7f62ae6',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-26.jpg?alt=media&token=f1ebecab-b70c-4808-a313-02e4efc910ff',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-27.jpg?alt=media&token=bf9c31d9-ef1e-4135-9779-29b6790b96e6',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-28.jpg?alt=media&token=53a18d0c-49dd-41c7-be75-06dd0fc68ff7',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-29.jpg?alt=media&token=934a4b92-7b89-479d-be09-268e1bfc64c3',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-30.jpg?alt=media&token=55d8462b-6902-4c95-ba94-d0f7589e4e18',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-31.jpg?alt=media&token=ee0e7c0b-f075-48d7-a2af-f407cb7cec33',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-32.jpg?alt=media&token=eaf551ba-1885-4b9e-b2eb-4074f690a9c9',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-37.jpg?alt=media&token=da05a82b-6c8b-4f7b-adb8-8a9489705443',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-38.jpg?alt=media&token=884ebbf6-71c6-4cf5-a94e-34e12c5910c9',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-39.jpg?alt=media&token=d43fe4df-30bf-4aec-99fe-9b09ee7b7d68',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-40.jpg?alt=media&token=890e1eb5-4ff6-4ea8-8a73-88f356e58ec5',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-41.jpg?alt=media&token=a7eb97f4-4df9-4f20-bc4d-8582b4acd07e',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-42.jpg?alt=media&token=b7cf595f-eaf2-43ba-967f-f131f672036b',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-43.jpg?alt=media&token=8ff1ee33-6daf-465e-a4af-3de971427521',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-44.jpg?alt=media&token=42ab672d-c816-473f-9109-cefb0c75bee0',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-45.jpg?alt=media&token=0d0633c8-3d86-497a-836b-79b8f4f5094e',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-46.jpg?alt=media&token=975c3b48-143d-47ff-b89e-1a15bbcf59f7',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-47.jpg?alt=media&token=013360c7-0957-4c97-9c03-8bf817f76d87',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-48.jpg?alt=media&token=47f87eba-71e3-4864-a24d-a3cd7e39b78d',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-49.jpg?alt=media&token=153bac6c-601a-4f3f-afdd-810fdf062539',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-50.jpg?alt=media&token=9c89c1e2-5699-46c8-878a-afd7024410bd',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-51.jpg?alt=media&token=1ca3dfb0-2582-48f3-86d5-510e8efb0aff',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-52.jpg?alt=media&token=148bae38-a237-43e0-ae35-fac4df353edb',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-57.jpg?alt=media&token=a3e450b1-d372-4b0a-a301-21b7f655f97c',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-58.jpg?alt=media&token=74b5697b-68c3-407b-8dc5-b40eb28dbecc',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-59.jpg?alt=media&token=f8a35153-39aa-4ddc-92e6-82eab341e434',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-60.jpg?alt=media&token=9f14284e-4e52-46f0-8bf1-3a3b9ff1139c',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-53.jpg?alt=media&token=08b395e1-f5d2-4312-9e86-1955fa1beea0',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-54.jpg?alt=media&token=53b411e6-2857-4201-8b03-0de2753f58f0',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-55.jpg?alt=media&token=5b1ba1ab-87cf-4e77-9cdd-70290994617d',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-61.jpg?alt=media&token=5103be72-bfce-434a-adaa-37608e747868',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-63.jpg?alt=media&token=8cbf1134-6881-40d2-8915-88173f97a935',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-64.jpg?alt=media&token=9eba0fd8-8977-45a2-8531-12a7d0401422',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-65.jpg?alt=media&token=3b6159b0-0be3-4062-82b3-d686e4ec61e7',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-66.jpg?alt=media&token=78a1cd26-7786-49aa-b537-d1030061eed9',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-62.jpg?alt=media&token=aa7f1955-eadd-4c01-8e0f-414fb2757014',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-67.jpg?alt=media&token=e2d76e65-6690-4b4f-9cd8-a88ea31b88ad',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-77.jpeg?alt=media&token=4d783ef0-a402-43ca-9edb-d26f9ca74e4e',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-78.jpeg?alt=media&token=d594d635-7163-42f6-a610-b1c91fb09496',
  'https://firebasestorage.googleapis.com/v0/b/aet-site-ac2f5.appspot.com/o/images%2Fshowcase%2Fshow-82.jpeg?alt=media&token=d9bb4958-260f-49a5-8917-d04aa4af2a77',
] as const;
