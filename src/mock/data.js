import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Terence | Full Stack Developer',
  lang: 'en',
  description: 'Welcome to my Page',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Terence',
  subtitle: "I'm the Full Stack Developer",
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://dl.dropboxusercontent.com/s/la8fvu9878aidci/Terence%20Ng%20Resume.pdf?dl=0',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'E-Commerce Web App',
    info:
      'An E-Commerce Web App Prototype developed using React.js on the Front-End and X on the Back-End',
    url: '',
    repo: 'https://github.com/terencehh/',
  },

  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Asteroids Game',
    info:
      'Asteroids game built using JS, HTML, & CSS. Demonstrates the use of Observer/Observables & Functional Reactive Programming as a coding design pattern for handling asynchronous events.',
    info2:
      'Controls for My game are Left/Right Key to Rotate, Up Key to Thrust, Space Key to Shoot Projectiles.',
    url: 'https://terencehh.github.io/asteroids-game/',
    repo: 'https://github.com/terencehh/asteroids-game',
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Medium Replica',
    info:
      "Replica of Medium's (Blogging Website) website built using HTML & CSS. I love the visual design of Medium, and hence am building a replica to develop myself as a developer.",
    info2: '',
    url: 'https://terencehh.github.io/medium-replica/',
    repo: 'https://github.com/terencehh/medium-replica',
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Motion Surveillance System',
    info:
      'Motion Surveilance System Project that will be delivered by attaching USB Webcams onto Laptops. Front-End will be Developed using the MEAN Stack, & Back-End using C++. Server + Storage Solution will utilize AWS.',
    info2: 'Currently in Development.',
    url: '',
    repo: 'https://github.com/Super-HD/motion-surveillance-system',
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Save My Time (iOS App)',
    info:
      'An iOS App I developed using Swift. This app is a time scheduler app & also an alarm app. Utilizes motion sensor on the phone to ensure the user is working productively during a specified time.',
    info2: 'Requires the user to compile the project on an iOS Device in order to run.',
    url: '',
    repo: 'https://github.com/terencehh/save-my-time-ios-app',
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Game of Hearts AI',
    info:
      'Runs a simulation of the classic game of hearts, with an AI developed to play the game effectively. Demonstrates effective functional programming code design in Haskell. Requires a Haskell Compiler to build & run the simulation.',
    url: '',
    repo: 'https://github.com/terencehh/game-of-hearts-AI',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to Work Together? Awesome!',
  btn: 'Contact Me',
  email: 'ngtere@live.com.sg',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/terencenghan/',
    },
    {
      id: uuidv1(),
      name: 'facebook',
      url: 'https://www.facebook.com/terence.ng.7737',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/terenceng147/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/terencehh/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false,
};
