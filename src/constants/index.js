import {
  mobile,
  backend,
  creator,
  web,
  hadoop,
  git,
  Excel,
  Github,
  Machine,
  Mysql,
  powerbi,
  python,
  Rstudio,
  Tableau,
  sqlserver,
  Jupyter,
  meta,
  starbucks,
  tesla,
  shopify,
  coronavirus,
  jobit,
  tripguide,
  Tableaudash,
  Datacleaning,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Programming Language",
    icon: web,
  },
  {
    title: "Data visualization",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Data Manipulation and Analysis",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Hadoop",
    icon: hadoop,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "Excel",
    icon: Excel,
  },
  {
    name: "Github",
    icon: Github,
  },
  {
    name: "Machine",
    icon: Machine,
  },

  {
    name: "Mysql",
    icon: Mysql,
  },
  {
    name: "powerbi",
    icon: powerbi,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Rstudio",
    icon: Rstudio,
  },
  {
    name: "Tableu",
    icon: Tableau,
  },
  {
    name: "sqlserver",
    icon: sqlserver,
  },
  {
    name: "Jupyter",
    icon: Jupyter,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Data Explolaration",
    description:
      "In this project, I delved into the intricate details of the COVID-19 data, uncovering insightful trends and patterns. From optimizing queries to visualizing key metrics, the journey was both challenging and rewarding",
    tags: [
      {
        name: "SQL Server",
        color: "blue-text-gradient",
      },
      {
        name: "DataExploration",
        color: "green-text-gradient",
      },
      {
        name: "Covid19 Analysis",
        color: "pink-text-gradient",
      },
    ],
    image: coronavirus,
    source_code_link:
      "https://github.com/sumansingh13/SQL-Data-Exploration-of-Covid/blob/main/Covid%20Project%20p1.sql ",
  },
  {
    name: "Tableau Dashboard of Covid",
    description: "Exploring COVID-19 Impact Globally: A Tableau Dashboard offers a comprehensive analysis of the worldwide effects of the COVID-19 pandemic                                                                    ",
    tags: [
      {
        name: "Tableau",
        color: "blue-text-gradient",
      },
      {
        name: "Coviddashboard",
        color: "green-text-gradient",
      },
      {
        name: "Visualization",
        color: "pink-text-gradient",
      },
    ],
    image: Tableaudash,
    source_code_link: "https://public.tableau.com/app/profile/suman.singh8247/viz/Covid-19Dashboard_17066433017850/Dashboard1#1",
  },
  {
    name: "Data Cleaning using SQL",
    description:
      "Revamped data for optimal clarity and analysis: standardized date formats, populated missing addresses, broke down components, clarified fields, removed duplicates, and deleted unnecessary columns.",
    tags: [
      {
        name: "DataCleaning",
        color: "blue-text-gradient",
      },
      {
        name: "NashvilleHousing",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: Datacleaning,
    source_code_link: "https://github.com/sumansingh13/Data-Cleaning-of-Nashvillehousing-using-sql/blob/main/Data%20Cleaning%20of%20Nashvillehousing%20using%20sql.sql",
  },
];

export { services, technologies, experiences, testimonials, projects };
