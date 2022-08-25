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
  paragraphOne: `Hi there! I am an experienced Full Stack Engineer with an avid passion for Disruptive Technologies.
     I am born in Malaysia, hail from Monash University, and am always keen to explore and experience new things in life!`,
  paragraphTwo: `I have been involved in Full Stack Technologies in as early as my childhood days, from playing around with simple HTML/CSS, 
    into developing production-grade web applications to this present day. I code in order to create wonderful experiences 
    & interactions that have the ability to impact millions/billions.`,
  paragraphThree: `A field of interest I am particularly keen to explore is Blockchain Technology. I am extremely confident that the future of the internet 
    will be decentralized, with Blockchain & Web3 as the key ignition point. In my free time, 
    I am either participating in team sports, learning the latest technologies, or simply vibing to the latest songs/movies.`,
  resume: 'https://1drv.ms/b/s!Asfa8UbInX0qmvYwGS-mMKy6Mrt4OA',
};

// PROJECTS DATA',
export const projectsData = [
  {
    id: uuidv1(),
    img: 'e-commerce.jpg',
    title: 'Crown Clothing Store',
    info: `An E-Commerce App Developed using React.js & Firebase. The App demonstrates senior level development 
      approaches in React.js Projects, utilizing design patterns such as Observables & Higher-order components, 
      as well as utilizing many technologies to improve scalability, performance, & development times. 
      App is implemented as a Progressive Web App & tested using Jest Library.`,
    url: 'https://crown-clothing-estore.herokuapp.com',
    repo: 'https://github.com/terencehh/e-commerce-app',
  },
  {
    id: uuidv1(),
    img: 'surveillance.jpg',
    title: 'Motion Surveillance App',
    info: `Motion Surveillance System that will utilize webcams to provide live streaming functionality alongside motion 
      detection video snapshots. The System is a MEAN Stack App where Front-End is developed using Angular, 
      & Back-End is developed using Node.js. AWS (Amazon Web Services), MongoDB Atlas, & DigitalOcean are used 
      for online deployment. Real-time image processing is achieved using OpenCV library.`,
    url: '',
    repo: 'https://github.com/terencehh/motion-surveillance-system',
  },
  {
    id: uuidv1(),
    img: 'face-recognition.jpg',
    title: 'Smart Brains',
    info: `Full Stack App developed primarily using React.js, Redux, Node.js, Express.js, PostgreSQL. 
      This app identifies & detects faces in any image supplied.`,
    url: 'https://face-detect-react-app.herokuapp.com/',
    repo: 'https://github.com/terencehh/face-recognition-app',
  },
  {
    id: uuidv1(),
    img: 'twitter-follower-app.png',
    title: 'Twitter Follower App',
    info: `App I created to interact with Twitter's API, Powered by React.js, Node.js, & Express.js. 
    Initial Conception for the project was so that I am able to track new twitter accounts that influential 
    people follow, with the main purpose of deriving crypto alpha. This app allows me to be aware of 
    new emerging projects/figures earlier on Twitter.`,
    url: 'https://twitter-app-front-end.herokuapp.com',
    repo: 'https://github.com/terencehh/twitter-app-fe',
  },
  {
    id: uuidv1(),
    img: 'save-my-time.jpg',
    title: 'Save My Time',
    info: `An iOS App I developed using Swift. This app is a time scheduler app & also an alarm app. 
      Utilizes motion sensor on the phone to ensure the user is working productively during a specified time.`,
    info2: `This App demonstrates standard Object-Oriented Programming alongside MVC Programming Architecture. 
      Requires the user to compile the project on an iOS Device in order to run.`,
    url: '',
    repo: 'https://github.com/terencehh/save-my-time-ios-app',
  },
  {
    id: uuidv1(),
    img: 'asteroids.jpg',
    title: 'Asteroids',
    info: `Classic Retro Asteroids Game built using JS, HTML, & CSS. Demonstrates the use of Observer/Observables & 
      Functional Reactive Programming as a coding design pattern for handling asynchronous events & state management.`,
    info2:
      'Controls for My game are Left/Right Key to Rotate, Up Key to Thrust, Space Key to Shoot Projectiles.',
    url: 'https://terencehh.github.io/asteroids-game/',
    repo: 'https://github.com/terencehh/asteroids-game',
  },
  {
    id: uuidv1(),
    img: 'medium.jpg',
    title: 'Medium Replica',
    info: `Replica of Medium's (Blogging Website) website built using HTML & CSS. 
      I love the visual design of Medium, and hence am building a replica to develop myself as a developer.`,
    info2: '',
    url: 'https://terencehh.github.io/medium-replica/',
    repo: 'https://github.com/terencehh/medium-replica',
  },
  {
    id: uuidv1(),
    img: 'game-of-hearts.jpg',
    title: 'Game of Hearts AI',
    info: `An AI Developed to play the game of hearts effectively against a group of specified players. 
      The Project runs a simulation of the classic Game of Hearts against my AI.`,
    info2: `Demonstrates my proficiency of functional programming code design in Haskell. 
      Note that the project will require a Haskell Compiler to build.`,
    url: '',
    repo: 'https://github.com/terencehh/game-of-hearts-AI',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to Work With Me?',
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
