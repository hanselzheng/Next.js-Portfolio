// Items on the Navigation Bar
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

// Items on the Bento Grid
export const gridItems = [
    {
        id: 1,
        title: "Bachelor of Science with Honours First Class in Cyber Security",
        description: "Graduated from Coventry University and PSB Academy Singapore",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
      id: 2,
      title: "Situated in Indonesia, willing to work in Singapore and Indonesia",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a dedication to learning and building digital solutions.",
      description: "I strive to expand my knowledge and learn new things.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a Next.js Portfolio",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Excited to collaborate? Drop me a message—I'd love to connect!",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  // Items on the Recent Projects
  export const projects = [
    {
      id: 1,
      title: "Tooter - Social Media Platform",
      des: "Explore my social media platform where innovation meets protection—featuring strong password safeguards, encrypted data, and secure input handling.",
      img: "tooter_home.png",
      iconLists: ["/python.svg", "/flask.png", "/html.svg", "/sqla.svg", "/boots.svg"],
      link: "https://hanselzheng.pythonanywhere.com/",
    },
    {
      id: 2,
      title: "Scammer Scanner - Fake News Detector",
      des: "Developed a machine learning program using supervised learning and binary classification to identify fake news articles as either fake (1) or real (0).",
      img: "/p2.svg",
      iconLists: ["/python.svg", "/scikit.svg", "/pandas.svg", "/joblib.svg", "/regex.svg"],
      link: "https://github.com/hanselzheng/FakeNewsDetect",
    },
  //   {
  //     id: 3,
  //     title: "AI Image SaaS - Canva Application",
  //     des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //     img: "/p3.svg",
  //     iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //     link: "/ui.aiimg.com",
  //   },
  //   {
  //     id: 4,
  //     title: "Animated Apple Iphone 3D Website",
  //     des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //     img: "/p4.svg",
  //     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //     link: "/ui.apple.com",
  //   },
  ];
  
// Items on the Work Experiences
  export const workExperience = [
    {
      id: 1,
      title: "Inventory Management Staff",
      desc: "Led inventory control, website management, and logistics operations for DUXTON Brand, optimizing processes with Shopify POS, ensuring efficient stock replenishment, and enhancing customer satisfaction through streamlined packaging and seasonal event coordination.",
      className: "md:col-span-2",
      thumbnail: "/duxton.png",
    },
    // {
    //   id: 2,
    //   title: "Mobile App Dev - JSM Tech",
    //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    //   className: "md:col-span-2", // change to md:col-span-2
    //   thumbnail: "/exp2.svg",
    // },
    // {
    //   id: 3,
    //   title: "Freelance App Dev Project",
    //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    //   className: "md:col-span-2", // change to md:col-span-2
    //   thumbnail: "/exp3.svg",
    // },
    // {
    //   id: 4,
    //   title: "Lead Frontend Developer",
    //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp4.svg",
    // },
  ];

  // Social Media Buttons on Footer
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/hanselzheng",
    },
    {
      id: 2,
      img: "/insta.svg",
      link: "https://www.instagram.com/hansel_zheng/",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/hansel-daniel-susanto/",
    },
  ];