import {AcademicCapIcon, ArrowDownTrayIcon, CalendarIcon, FlagIcon, MapIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';

import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/Pi-Mart.png';
import porfolioImage2 from '../images/Redfin.png';
import porfolioImage3 from '../images/BlackSmith.png';

import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Royce Wayne's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  problemsolver: `Royce Wayne.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Full Stack Developer</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">Feel free to contact me.</p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi, I’m Royce, a passionate full-stack developer with a strong focus on building modern, scalable, and user-friendly web applications. I specialize in JavaScript, TypeScript, React, Angular, Node.js, and Python, with additional experience in backend development and cloud deployment.

  I enjoy solving real-world problems through clean architecture, thoughtful design, and efficient code. Over the past few years, I’ve worked on a wide range of projects — from small experimental apps to full production systems — and I’m always eager to learn new technologies and improve my craft.

  Currently, I’m focused on expanding my backend expertise and contributing to projects that make an impact..`,
  aboutItems: [
    {label: 'Location', text: 'Texas', Icon: MapIcon},
    {label: 'Age', text: '37', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Study', text: 'University of Texas at Tyler', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    problemsolver: 'Spoken languages',
    skills: [
      {
        problemsolver: 'English',
        level: 10,
      },
      {
        problemsolver: 'French',
        level: 4,
      },
      {
        problemsolver: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    problemsolver: 'Frontend development',
    skills: [
      {
        problemsolver: 'React',
        level: 9,
      },
      {
        problemsolver: 'Typescript',
        level: 7,
      },
      {
        problemsolver: 'Next.js',
        level: 9,
      },
      {
        problemsolver: 'Angular',
        level: 8,
      },
    ],
  },
  {
    problemsolver: 'Backend development',
    skills: [
      {
        problemsolver: 'Node.js',
        level: 10,
      },
      {
        problemsolver: 'Rust',
        level: 5,
      },
      {
        problemsolver: 'Python',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'You can check it out here.',
    url: 'https://pi-mart.com/',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'You can check it out here.',
    url: 'https://redfin.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'You can check it out here.',
    url: 'https://blacksmith.agency/',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2011-2015',
    location: 'University of Texas at Tyler',
    title: `Bachelor's degree, Computer science`,
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: '2007-2011',
    location: 'University of Texas at Tyler',
    title: 'Computer science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2022 - March 2025',
    location: 'BlackSmith Digital Ecommerce',
    title: 'Full-Stack Developer',
    content: <p>Built responsive web applications for industries including fintech, retail, and hospitality.</p>,
  },
  {
    date: 'January 2019 - September 2021',
    location: 'Pi Mart Ecommerce',
    title: 'Frontend Developer',
    content: (
      <p>
        Designed and developed a mobile-first e-commerce platform with a dynamic product catalog and optimized checkout
        flow. Improved site performance and created reusable components using React, Next.js, and Tailwind CSS.
      </p>
    ),
  },
  {
    date: 'August 2016 - September 2018',
    location: 'Redfin Real Estate Marketing Company',
    title: 'Junior Developer',
    content: (
      <p>
        Contributed to the development of Redfin’s real estate platform, creating responsive and scalable front-end
        features used by millions of homebuyers and sellers. Implemented interactive property search, filtering, and
        map-based UI components with React, Next.js, and API integrations. Focused on performance optimization and
        mobile-first design, ensuring a seamless user experience across devices.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      problemsolver: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      problemsolver: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      problemsolver: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I’m always open to connecting',
  items: [
    {
      type: ContactType.Email,
      text: 'roycewayne09@gmail.com',
      href: 'roycewayne09@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Texas, United States',
      href: 'https://www.google.ca/maps/place/texas',
    },
    {
      type: ContactType.Github,
      text: 'problemsolver72221',
      href: 'https://github.com/problemsolver72221',
    },
    // {
    //   type: ContactType.Telegram,
    //   text: 'problemsolver7s2221',
    //   href: 'https://github.com/prsoblemsolver72221',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/problemsolver72221'},
];
