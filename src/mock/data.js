import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Terence | Software Engineer',
  lang: 'en',
  description: 'Welcome to my Page',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Terence',
  subtitle: "I'm the Software Engineer",
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hi there! I am a self-motivated individual with extreme passion towards software development. Presently undertaking Bachelors of Computer Science at Monash University, alongside working on some large-scale tech projects.',
  paragraphTwo:
    'Web Development is my main field of interest as the technologies used in the field are always constantly evolving and posing exciting new challenges. I code to create wonderful experiences & interactions that have the ability to impact millions.',
  paragraphThree:
    'In my free time, I am either educating myself on new tech trends, participating in Team Sports, or simply just finding the latest new movies to watch.',
  resume: 'https://dl.dropboxusercontent.com/s/qdlxv7oftmwlpd2/Terence%20Ng%20Resume.pdf?dl=0',
};
// PROJECTS DATA',
export const projectsData = [
  {
    id: uuidv1(),
    img: 'face-recognition.jpg',
    title: 'Face Recognition App',
    info:
      'Full Stack App developed primarily using React.js, Node.js, Express.js, PostgreSQL. This app identifies & detects faces in any image supplied.',
    // UPDATE LIVE URL ONCE DEPLOYED
    url: 'https://github.com/terencehh/face-recognition-app',
    repo: 'https://github.com/terencehh/face-recognition-app',
  },
  {
    id: uuidv1(),
    img: 'surveillance.jpg',
    title: 'Motion Surveillance System',
    info:
      'Motion Surveillance System that will utilize webcams to provide live streaming functionality alongside motion detection video snapshots. Front-End is developed using the MEAN Stack, & Back-End using C++. Server & Storage Solution will utilize AWS.',
    info2: 'Currently in Development now.',
    url: '',
    repo: 'https://github.com/Super-HD/motion-surveillance-system',
  },
  {
    id: uuidv1(),
    img: 'e-commerce.jpg',
    title: 'E-Commerce Web App',
    info:
      'Fully Functional E-Commerce Web App prototype that contains the main functionalities seen in prominent e-commerce web app’s nowadays. Developed using React.js & Firebase.',
    info2: 'Currently in Development.',
    url: 'https://github.com/terencehh/e-commerce-app',
    repo: 'https://github.com/terencehh/e-commerce-app',
  },
  {
    id: uuidv1(),
    img: 'save-my-time.jpg',
    title: 'Save My Time (iOS App)',
    info:
      'An iOS App I developed using Swift. This app is a time scheduler app & also an alarm app. Utilizes motion sensor on the phone to ensure the user is working productively during a specified time.',
    info2:
      'This App demonstrates standard Object-Oriented Programming alongside MVC Programming Architecture. Requires the user to compile the project on an iOS Device in order to run.',
    url: '',
    repo: 'https://github.com/terencehh/save-my-time-ios-app',
  },
  {
    id: uuidv1(),
    img: 'asteroids.jpg',
    title: 'Asteroids Game',
    info:
      'Asteroids game built using JS, HTML, & CSS. Demonstrates the use of Observer/Observables & Functional Reactive Programming as a coding design pattern for handling asynchronous events & state management.',
    info2:
      'Controls for My game are Left/Right Key to Rotate, Up Key to Thrust, Space Key to Shoot Projectiles.',
    url: 'https://terencehh.github.io/asteroids-game/',
    repo: 'https://github.com/terencehh/asteroids-game',
  },
  {
    id: uuidv1(),
    img: 'medium.jpg',
    title: 'Medium Replica',
    info:
      "Replica of Medium's (Blogging Website) website built using HTML & CSS. I love the visual design of Medium, and hence am building a replica to develop myself as a developer.",
    info2: '',
    url: 'https://terencehh.github.io/medium-replica/',
    repo: 'https://github.com/terencehh/medium-replica',
  },
  {
    id: uuidv1(),
    img: 'game-of-hearts.jpg',
    title: 'Game of Hearts AI',
    info:
      'An AI Developed to play the game of hearts effectively against a group of specified players. The Project runs a simulation of the classic Game of Hearts against my AI.',
    info2:
      'Demonstrates my proficiency of functional programming code design in Haskell. Note that the project will require a Haskell Compiler to build.',
    url: '',
    repo: 'https://github.com/terencehh/game-of-hearts-AI',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to Work With Me? Awesome!',
  btn: 'Get in Touch',
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
      url: 'https://www.linkedin.com/in/terencenghh/',
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
