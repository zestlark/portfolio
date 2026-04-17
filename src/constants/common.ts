import {
  RiMailLine,
  RiPhoneLine,
  RiLinkedinLine,
  RiGithubLine,
  RiFacebookLine,
  RiInstagramLine,
} from "@remixicon/react";

import OPTIOMOTION_IMAGE from "@/assets/projects/optimotion.png";
import NEHAS_EDU_CENTRE_IMAGE from "@/assets/projects/nehas-edu-centre.png";
import KHS_SERVICES_IMAGE from "@/assets/projects/khs-services.png";
import SAAHIL_PT_LTD_IMAGE from "@/assets/projects/saahil-pt-ltd.png";
import SURFSPACE_IMAGE from "@/assets/projects/surfspace.png";
import SLEEKPAD_IMAGE from "@/assets/projects/sleekpad.png";
import FILEZ_IMAGE from "@/assets/projects/qfm.png";
import Z_BLOG_IMAGE from "@/assets/projects/z-blog.png";
import ARTEX_IMAGE from "@/assets/projects/artex.png";
import MULTI_LLAMA_IMAGE from "@/assets/projects/multi-llama.png";

// Icon Imports
import REACT_ICON from "@/assets/icons/react.icon.png";
import NEXTJS_ICON from "@/assets/icons/nextjs.icon.png";
import VUEJS_ICON from "@/assets/icons/vuejs.icon.png";
import IONIC_ICON from "@/assets/icons/ionic.icon.png";
import JS_ICON from "@/assets/icons/javascript.icon.png";
import TS_ICON from "@/assets/icons/typescript.icon.png";
import MUI_ICON from "@/assets/icons/mui.icon.png";
import TAILWIND_ICON from "@/assets/icons/tailwind.icon.png";
import NODE_ICON from "@/assets/icons/nodejs.icon.png";
import EXPRESS_ICON from "@/assets/icons/express.icon.png";
import AWS_ICON from "@/assets/icons/aws.icon.png";
import FIREBASE_ICON from "@/assets/icons/firebase.icon.png";
import MONGODB_ICON from "@/assets/icons/mongodb.icon.png";
import VITE_ICON from "@/assets/icons/vite.icon.png";
import FIGMA_ICON from "@/assets/icons/figma.icon.png";
import GIT_ICON from "@/assets/icons/git.icon.png";
import PYTHON_ICON from "@/assets/icons/python.icon.png";
import N8N_ICON from "@/assets/icons/n8n.icon.png";

export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const getCurrentBreakpoint = (): Breakpoint => {
  const width = window.innerWidth;

  const orderedBreakpoints: [Breakpoint, number][] = [
    ["xs", 0],
    ["sm", 640],
    ["md", 768],
    ["lg", 1024],
    ["xl", 1280],
    ["2xl", 1536],
  ];

  let current: Breakpoint = "xs";

  for (const [key, minWidth] of orderedBreakpoints) {
    if (width >= minWidth) current = key;
  }

  return current;
};

export const getResponsiveValue = <T>(
  values: Partial<Record<Breakpoint, T>>,
): T | undefined => {
  const current = getCurrentBreakpoint();

  const order: Breakpoint[] = ["xs", "sm", "md", "lg", "xl", "2xl"];

  const currentIndex = order.indexOf(current);

  for (let i = currentIndex; i >= 0; i--) {
    const bp = order[i];
    if (values[bp] !== undefined) return values[bp];
  }

  return undefined;
};

export async function isImageDark(src: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // allow CORS images if possible
    img.src = src;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject("Canvas not supported");

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height,
      ).data;
      let totalBrightness = 0;

      // sample every 4th pixel to improve performance
      const step = 4 * 4;
      for (let i = 0; i < imageData.length; i += step) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        // perceived brightness (ITU-R BT.709)
        const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        totalBrightness += brightness;
      }

      const avgBrightness = totalBrightness / (imageData.length / step);

      resolve(avgBrightness < 128); // <128 → dark image
    };

    img.onerror = (err) => reject(err);
  });
}

export const zestlark_products = [
  {
    name: "Multi LLama",
    message:
      "Multi Llama Chat is a fast, client-side web app to compare multiple Ollama models side-by-side in one workspace. Tag models with @, assign custom roles (tester, designer, reviewer, etc.), run inter-model discussions, duplicate model instances, and offline support.",
    time: "13 minutes ago",
    image: "https://zestlark.github.io/multi-llama/logo.png",
    link: "https://zestlark.github.io/multi-llama/",
  },
  {
    name: "SurfSpace",
    message:
      "SurfSpace is a personalized web start page designed for managing tabs and browsing history with integrated note-taking and deep customization options.",
    time: "13 minutes ago",
    image: SURFSPACE_IMAGE,
    link: "https://surfspace.app",
  },
  {
    name: "Filez",
    message:
      "A streamlined file-sharing platform designed for students to easily exchange notes and academic documents.",
    time: "a hour ago",
    image: FILEZ_IMAGE,
    link: "https://filez.io",
  },
  // {
  //   name: "Sleekpad",
  //   message: "collabrative notepad",
  //   time: "5 hours ago",
  //   image: "https://sleekpad-0.web.app/assets/logo-d879986a.png",
  //   link: "https://sleekpad-0.web.app/",
  // },
];

export const zestlark_social = [
  {
    icon: RiMailLine,
    link: "mailto:zestlark@gmail.com",
    title: "Email",
  },
  {
    icon: RiPhoneLine,
    link: "tel:+918828727211",
    title: "Phone",
  },
  {
    icon: RiLinkedinLine,
    link: "https://www.linkedin.com/in/deepak-kanojiya-208955209/",
    title: "LinkedIn",
  },
  {
    icon: RiGithubLine,
    link: "https://github.com/zestlark",
    title: "GitHub",
  },
  {
    icon: RiFacebookLine,
    link: "https://www.facebook.com/zestlark/",
    title: "Facebook",
  },
  {
    icon: RiInstagramLine,
    link: "https://www.instagram.com/zestlark/",
    title: "Instagram",
  },
];

export const PROJECTS = [
  {
    title: "Freelance Projects",
    projects: [
      {
        label: "Optimotion",
        url: "https://www.optimotion.in",
        thumbnail: OPTIOMOTION_IMAGE,
        description: `Optimotion is a tech-first EV rental platform focused on affordable, flexible mobility.
            I designed and developed a responsive web experience for browsing and renting EVs, including scalable pricing logic and flexible rental workflows.`,
      },
      {
        label: "Neha's Edu Centre",
        url: "https://nehaseducentre.com",
        thumbnail: NEHAS_EDU_CENTRE_IMAGE,
        description: `
           Neha's Edu Centre is an online tutoring service that helps students prepare for international curricula such as IGCSE, Edexcel A/AS Level, IB-MYP, and IBDP. The centre offers both one-on-one and group online classes taught by experienced and dedicated tutors.`,
      },
      {
        label: "KHS Services",
        url: "https://khs-services.web.app",
        thumbnail: KHS_SERVICES_IMAGE,
        description:
          "KHS Services provides specialized facility management for hospitals, including building interior and exterior maintenance and services.",
      },
      {
        label: "Saahil Pvt Ltd",
        url: "https://saahilpvtltd.web.app",
        thumbnail: SAAHIL_PT_LTD_IMAGE,
        description:
          "A professional landing page for a construction company showcasing their core services and diverse project portfolio.",
      },
    ],
  },
  {
    title: "Personal Projects",
    projects: [
      {
        label: zestlark_products[0].name,
        url: zestlark_products[0].link,
        thumbnail: MULTI_LLAMA_IMAGE,
        description: zestlark_products[0].message,
      },
      {
        label: zestlark_products[1].name,
        url: zestlark_products[1].link,
        thumbnail: SURFSPACE_IMAGE,
        description: zestlark_products[1].message,
      },
      {
        label: "SleekPad",
        url: "https://sleekpad.dev",
        thumbnail: SLEEKPAD_IMAGE,
        description:
          "SleekPad is a collaborative document editor that enables real-time writing and editing, revolutionizing teamwork by allowing users to seamlessly create and save documents together.",
      },
      {
        label: zestlark_products[2].name,
        url: zestlark_products[2].link,
        thumbnail: FILEZ_IMAGE,
        description: zestlark_products[2].message,
      },
      {
        label: "Z-Blog",
        url: "https://z-blog.vercel.app",
        thumbnail: Z_BLOG_IMAGE,
        description:
          "A minimalist blogging platform tailored for developers to share technical insights and code.",
      },
      {
        label: "Artex",
        url: "https://zestlark.github.io/artex/",
        thumbnail: ARTEX_IMAGE,
        description:
          "Artex is a futuristic webOS concept that maximizes efficiency, allowing users to explore the digital world with minimal system overhead while delivering a seamless, innovative experience.",
      },
    ],
  },
];

export const skills = [
  {
    name: "React.js",
    logo: REACT_ICON,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    logo: NEXTJS_ICON,
    color: "#FFFFFF",
  },
  {
    name: "Vue.js",
    logo: VUEJS_ICON,
    color: "#4FC08D",
  },
  {
    name: "Ionic",
    logo: IONIC_ICON,
    color: "#3880FF",
  },
  {
    name: "Material UI",
    logo: MUI_ICON,
    color: "#007FFF",
  },
  {
    name: "JavaScript",
    logo: JS_ICON,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    logo: TS_ICON,
    color: "#3178C6",
  },
  {
    name: "Tailwind CSS",
    logo: TAILWIND_ICON,
    color: "#06B6D4",
  },
  {
    name: "SCSS",
    logo: "https://assets.streamlinehq.com/image/private/w_240,h_240,ar_1/f_auto/v1/icons/development/sass-8lcweyq1kh5uxiw72lgyif.png/sass-nn30ijcscm9ayjgids4dg.png?_a=DATAiZAAZAA0",
    color: "#CC6699",
  },
  {
    name: "Node.js",
    logo: NODE_ICON,
    color: "#339933",
  },
  {
    name: "Express.js",
    logo: EXPRESS_ICON,
    color: "#FFFFFF",
  },
  // {
  //   name: "Laravel",
  //   logo: "https://img.icons8.com/?size=100&id=108825&format=png",
  //   color: "#FF2D20",
  // },
  // {
  //   name: "PHP",
  //   logo: "https://img.icons8.com/?size=100&id=3753&format=png",
  //   color: "#777BB4",
  // },
  {
    name: "Socket.IO",
    logo: "https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2389%2FPNG%2F512%2Fsocket_io_logo_icon_144874.png&id=144874&pack_or_individual=pack",
    color: "#FFFFFF",
  },
  {
    name: "MongoDB",
    logo: MONGODB_ICON,
    color: "#47A248",
  },
  {
    name: "Firebase",
    logo: FIREBASE_ICON,
    color: "#FFCA28",
  },
  {
    name: "AWS",
    logo: AWS_ICON,
    color: "#FF9900",
  },
  {
    name: "Cypress",
    logo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/cypress-8e8cakr79emi53xbfy52sk.png/cypress-7wbuii2rrph753uxhifzbe.png?_a=DATAiZAAZAA0",
    color: "#FFFFFF",
  },
  {
    name: "Vitest",
    logo: VITE_ICON,
    color: "#6E9F18",
  },
  {
    name: "Git",
    logo: GIT_ICON,
    color: "#F05032",
  },
  {
    name: "n8n",
    logo: N8N_ICON,
    color: "#FF6D5A",
  },
  {
    name: "Figma",
    logo: FIGMA_ICON,
    color: "#F24E1E",
  },
  {
    name: "Python",
    logo: PYTHON_ICON,
    color: "#3776AB",
  },
  // {
  //   name: "Java",
  //   logo: "https://img.icons8.com/?size=100&id=2572&format=png",
  //   color: "#007396",
  // },
];
