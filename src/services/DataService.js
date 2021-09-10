import { rAngle, star, starHalf } from "./Icons";
const projectImg =
  "https://image.freepik.com/free-photo/overworked-workaholic-entrepreneur-woman-shwoing-marketing-graphs-using-tablet-overworking-company-solution-late-night-meeting-room_482257-2180.jpg";
export const aboutimg =
  "https://image.freepik.com/free-photo/crop-architect-opening-blueprint_23-2147710985.jpg";
export const ListData = [
  {
    key: "list-1",
    icon: rAngle,
    aosList: "zoom-in",
    para: "Pre-Feasibility & Feasibility Studies",
  },
  {
    key: "list-2",
    icon: rAngle,
    aosList: "zoom-out",
    para: "Techno-Economic Feasibility Studies",
  },
  {
    key: "list-3",
    icon: rAngle,
    aosList: "zoom-in",
    para: "Field Surveys / Investigations (Construction Materials, Geotechnical, Hydrologic, Socio-economic,Environmental, Topographical, Traffic etc.) and Analysis. ",
  },
  {
    key: "list-4",
    icon: rAngle,
    aosList: "zoom-out",
    para: "Economic and Financial Viability.",
  },
  {
    key: "list-5",
    icon: rAngle,
    aosList: "zoom-in",
    para: "Project planning and project structuring.",
  },
  {
    key: "list-6",
    icon: rAngle,
    aosList: "zoom-out",
    para: "Sector specific policy framing, institutional options and capacity building.",
  },
];

export const Stars = [
  {
    key: "star-1",
    icon: star,
  },
  {
    key: "star-2",
    icon: star,
  },
  {
    key: "star-3",
    icon: star,
  },
  {
    key: "star-4",
    icon: star,
  },
  {
    key: "star-5",
    icon: starHalf,
  },
];

export const ProjectsList = [
  {
    key: "project-1",
    title: "Project 1",
    url: "",
    src: projectImg,
    alt: "",
    list: [
      "Automobile parts Numerical analysis",
      "Two-wheeler Bike Projects ",
      "Automobile Brake Projects",
      "Steering System Projects",
      "Automobile Engine Project",
      "Cutting dynamics of high-speed machining of thin ribbed structures ",
      "Analysis of ball bearing considering the effect of waviness in ball bearing assembly synopsis",
      "Vibration analysis of compressor housing",
      "Optimum design and analysis of composite drive shaft",
    ],
  },
  {
    key: "project-2",
    title: "Project 2",
    url: "",
    src: projectImg,
    alt: "",
    list: [
      "Development of solar powered air conditioner using flat plate collector",
      "Comparative numerical study of flow characteristics in shell & helical coil heat exchangers with hybrid models",
      "Numerical Investigation of Thermal Behaviour and Fluid Flow Characteristics in Geothermal Energy Piles",
      "Aerodynamics effect of the hot wire coil on the SELIG S1223 Air foil ",
      "Computational Fluid dynamics study of wind turbine blade at low Reynolds number for various angle of attack",
      "Effect of powder metallurgy on high entropy alloy materials: A review",
      "Fatigue failure analysis of a Ø14 B500C steel rebar: Metallurgical evaluation and numerical simulation",
      "Thermal Stress Analysis of Powder Metallurgy Sintering Process Based on ANSYS",
      "Stress analysis on Spur Gear",
      "Numerical analysis of Cam shaft ",
    ],
  },
  {
    key: "project-3",
    title: "Project 3",
    url: "",
    src: projectImg,
    alt: "",
    list: [
      "Face detection",
      "Online Auction Systems",
      "E-authentication system",
      "Crime Rate prediction",
      "Measurement app",
      "Symbol Recognition",
      "News App",
      "Search Engine",
      "Online ebook maker",
      "Mobile payment app",
    ],
  },
  {
    key: "project-4",
    title: "Project 4",
    url: "",
    src: projectImg,
    alt: "",
    list: [
      "Offloading of Mobile Data using Overlaps & Uniform Pricing",
      "Personalized Ranking Framework",
      "Compound Keyword Search based on Semantic over Encrypted Cloud Data",
      "Modeling & Forecasting of Dynamic QoS Attributes with Time-aware for Cloud Services",
      "Reliable Electronic Voting project",
      "Scheduling of Smart Manufacturing through Edge Computing & Multi-class Deep Q Network project",
      "Two-Channel Graph Filter Banks with Critically-Sampled & Spectral Domain project",
      "Stock Market Instability Prediction Approach using Time Series Data",
      "Identification and Detection of Spammer and Fake User in Social Media project",
      "Construction of Sentiment Lexicon using Hierarchical Supervision Topic Model project",
    ],
  },
  {
    key: "project-5",
    title: "Project 5",
    url: "",
    src: projectImg,
    alt: "",
    list: [
      "Analysis of Noise levels, Audio frequency and Fuel consumption with Propellers of type McCauley and MT on BAe Jetstream 32 project",
      "VTOL Unmanned Aerial Helicopters ",
      "Aerodynamics effect of the hot wire coil on the SELIG S1223 Airfoil ",
      "Computational Fluid dynamics study of wind turbine blade at low Reynolds number for various angle of attack",
      "Simulation of Plume-Spacecraft Interaction",
      "Experiment of All Solid-State Electrochemical Sensor for Surface Chemistry Analysis for Adhesive Bonding",
      "Experimental and Numerical Investigations of a High Performance Co-Flow Jet Airfoil",
      "3D Fuel Tank Models for System Simulation",
      "Design of a Hoverwing Aircraft",
      "Theoretical Studies of Plasma Detachment in the Vasimr Magnetic Nozzle",
    ],
  },
];
// service tables data
export const serviceTable = [
  { id: "link", label: "name", path: "/", tip: "tip" },
  { id: "col-1", label: "qualification" },
  { id: "col-2", label: "specialization" },
  { id: "col-3", label: "experience" },
];
export const servicehead = [
  { key: "col-1", title: "S. NO" },
  { key: "col-2", title: "Name" },
  { key: "col-3", title: "Qualification" },
  { key: "col-4", title: "Specialization" },
  { key: "col-5", title: "Year of Experience" },
];
export const servicebody = [
  {
    key: "row-1",
    name: "A G Dharmaraj",
    qualification: "M.Tech",
    specialization: "Structural Engineering",
    experience: 38,
    tip: `

    Professtion:
    skills:
    rating:
      `,
  },
  {
    key: "row-2",
    name: "Harish J Kulkarni",
    qualification: " M.E., (Ph.D)",
    specialization: " Highway Engineering",
    experience: 11,
    tip: `

      Professtion:
      skills:
      rating:
      `,
  },
  {
    key: "row-3",
    name: "Dr. Ningappa",
    qualification: " M.E., (Ph.D)",
    specialization: " Highway Engineering",
    experience: 5,
    tip: `

      Professtion:
      skills:
      rating:
      `,
  },
  {
    key: "row-4",
    name: "Vijay Kumar A S",
    qualification: " M.E., (Ph.D)",
    specialization: " Highway Engineering",
    experience: 6,
    tip: `

      Professtion:
      skills:
      rating:
      `,
  },
];

// work done data
export const workTable = [
  { id: "link", label: "name", path: "/", tip: "tip" },
  { id: "col-1", label: "cost" },
  { id: "col-2", label: "describe" },
];
export const workhead = [
  { key: "col-1", title: "S. NO" },
  { key: "col-2", title: "Project Name" },
  { key: "col-3", title: "Project cost" },
  { key: "col-4", title: "Project Description" },
];
export const workbody = [
  {
    key: "row-1",
    name: "Third party inspection of state highway improvement works under 13th finance for the year 2014-15- project management and quality control of works. Pertaining to jurisdiction of PWD circle Mangalore, consisting of Mangalore Udupi,Kodagu districts.",
    cost: "1659.00 Lakhs",
    describe:
      "The firm has rendered the supervision, Consultancy Services and Conducted Quality Control tests for different components of road culverts and minor bridges I. e., sub-grade, sub-soil, base (WMM), B.M & SDBC and concrete at required frequency and also ascertained that the work is executed as per specification.",
    tip: `
    
      Project Requirement:
      rating:
      `,
  },
  {
    key: "row-2",
    name: "Detailed project report for widening to two lane with paved shoulders, rock profiling from Km.77.00 to 99.00 of NH 234 (Charmadi Ghat)",
    cost: "19600.00 Lakhs",
    describe:
      "FS & DPR Preparation which includes traffic survey, soil testing ,inventory of CD work & Bridges, Profiling of Rocky outcrop, assessment of rock bed depth using wagon drilling and identification of soil nailing areas and preparation of designs, cost.",
    tip: `
    
      Project Requirement:
      rating:
      `,
  },
  {
    key: "row-3",
    name: "M & R to NH -13for 2014-15 (Central Grant)-Feasibility study ,setting of alignment ,design and detailing of major bridge near Hariharapura on NH-169 of Sholapura-Mangalore section",
    cost: "500.00 Lakhs",
    describe:
      "Preparation of DPR including Traffic senses soil testing through trial bore, Total station survey and preparation of designs, drawings and cost estimates.",
    tip: `
    
      Project Requirement:
      rating:
      `,
  },
  {
    key: "row-4",
    name: "Construction of 5 Numbers of bridges & MDR in Belthangady Taluk,Dakshina Kannada",
    cost: " 500.00 Lakhs",
    describe:
      "Preparation of DPR including Traffic senses soil testing through Machine bore, Total station survey and preparation of designs, drawings and cost.",
    tip: `
    
      Project Requirement:
      rating:
      `,
  },
];

// contact details
export const contactPage = {
  address: `Corp. Off:#14,
    3rd Floor, Hithaa complex, 
    80 feet Ring Road (Kengeri),
    Nagadevanhalli, 
    BENGALURU – 560056, 
    Karnataka`,
  addressUrl:
    "https://www.google.com/maps?q=12.941401481628418,77.49317932128906&z=17&hl=en",
  email: "info.ninetechinfra@gmail.com",
  phoneOne: "7019556969",
  phoneTwo: "7204821038",
  phoneThree: "9535584464",
};

// inquiry services
export const serviceOption = [
  { key: "service-1", service: "Service One" },
  { key: "service-2", service: "Service Two" },
  { key: "service-3", service: "Service Four" },
  { key: "service-4", service: "Service Five" },
];

// Testimonials
const female =
  "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_female2-512.png";
const male = "https://www.011global.com/Account/Slices/user-anonymous.png";
export const userReviews = [
  {
    key: "user1",
    url: male,
    name: "Name",
    occupation: "Occupation",
    paperTitle: "Service Taken",
    comment: "Comment if any",
  },
  {
    key: "user2",
    url: female,
    name: "Name",
    occupation: "Occupation",
    paperTitle: "Service Taken",
    comment: "Comment if any",
  },
];
