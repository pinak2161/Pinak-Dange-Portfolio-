import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation



const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};



const illustration = {
  animated: true 
};

const greeting = {
  username: "Pinak Dange",
  title: "Hola! I'm Pinak",
  subTitle: emoji(
    "Full Stack Developer ⚡ | Building applications with Java, Spring Boot, Angular, React, Docker, and AWS."
  ),
  // UPDATED: Points to the local file in the public folder
  resumeLink: "/Pinak_Dange_Resume.pdf", 
  displayGreeting: true 
};

const socialMediaLinks = {
  github: "https://github.com/pinak2161",
  linkedin: "https://www.linkedin.com/in/pinak-dange-335b35223",
  gmail: "pinakdange1621@gmail.com",

  display: true 
};



const skillsSection = {
  title: "What I do",
  subTitle: "I’m a full-stack developer who loves to build, scale, and optimize systems that actually perform. I specialize in crafting clean architectures, secure APIs, and responsive interfaces that bridge tech and design seamlessly.",
  skills: [
    emoji(
      "⚡ Develop scalable and secure backend services & RESTful APIs using Java and Spring Boot."
    ),
    emoji(
      "⚡ Build dynamic and responsive user interfaces with React.js, Angular, and Vue.js."
    ),
    emoji(
      "⚡ Manage, deploy, and scale applications using Docker, Kubernetes, AWS, and CI/CD pipelines."
    )
  ],

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf" // Using 'leaf' for Spring
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database" // Using generic database icon
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    { 
      skillName: "kubernetes", 
      fontAwesomeClassname: "fas fa-dharmachakra" 
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }
  ],
  display: true 
};



const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Savitribai Phule Pune University, Pune",
      logo: require("./assets/images/sppuLogo.jpg"), // <-- You will need to add an 'sppuLogo.png' file to your src/assets/images folder
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "Aug 2021 - Jun 2025",
      desc: "CGPA: 8.36/10",
      descBullets: [
        "Key Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems (SQL), Computer Networks, AI/ML, and Cloud Computing."
      ]
    }
  ]
};

const projects = {
  title: "Projects",
  subtitle: "A SELECTION OF MY PERSONAL AND ACADEMIC WORK",
  display: true, // Set false to hide this section, defaults to true
  projects: [
    {
      image: require("./assets/images/cblos.png"), // <-- Add 'cblos.png' image to src/assets/images
      projectName: "CBLOS - Corporate Banking Loan System",
      projectDesc: "A full-stack enterprise loan management system with a modular N-tier architecture and secure workflows. Implemented RBAC using Spring Security and optimized database queries.\n\nTech Stack: Spring Boot, Spring MVC, Thymeleaf, JPA, MySQL, REST API, JavaScript",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://corporate-banking-loan-origination.onrender.com/u have one"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/pinak2161/CBLOS-Corporate-Banking-Loan-Origination-System" // <-- TODO: Update with correct link
        }
      ]
    },
    {
      image: require("./assets/images/agrotech.png"), // <-- Add 'agrotech.png' image to src/assets/images
      projectName: "AGROTECH - Smart Agricultural System",
      projectDesc: "Built a real-time monitoring system using soil moisture, temperature, and light sensors. Automated irrigation using threshold-based logic for water-efficient farming.\n\nTech Stack: IoT, Embedded Systems, Microcontrollers, Wireless Communication",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/pinak2161" // <-- TODO: Update with correct link
        }
      ]
    },
    {
      image: require("./assets/images/bhakalo.png"), // <-- Add 'bhakalo.png' image to src/assets/images
      projectName: "Bhakalo - The Fruit Shop (Desktop App)",
      projectDesc: "Developed an object-oriented Python app with Firebase login and a Firestore database. Integrated CalorieNinjas API for fruit nutrition info and built a full GUI.\n\nTech Stack: Python, OOP, Firebase, API Integration, Tkinter",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/pinak2161" // <-- TODO: Update with correct link
        }
      ]
    },
    {
      image: require("./assets/images/portfolio.png"), // <-- Add 'portfolio.png' image to src/assets/images
      projectName: "Personal Portfolio Website",
      projectDesc: "Created and deployed this responsive React website to showcase my projects and skills. Deployed using Vercel with continuous integration.\n\nTech Stack: React.js, React Router, JavaScript, SASS",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/pinak2161/Portfolio-Website" // <-- TODO: Update with correct link
        },
        {
          name: "Visit Website",
          url: "https://pinak-dange.vercel.app"
        }
      ]
    }
  ]
};
// Achievement Section
const achievementSection = {
  title: emoji("Accomplishments 🏆"),
  subtitle: "My publications and leadership experiences",
  display: true, 
  achievementsCards: [
    {
      title: "Research Publications (IJARSCT)",
      subtitle:
        "Published 'AGROTECH: A Smart Agricultural System Using IoT and ML' (Vol. 4, Issue 2 & Vol. 5, Issue 5).",
      image: require("./assets/images/ijarsct.png"), // <-- TODO: Add an 'ijarsct.png' image to src/assets/images
      imageAlt: "IJARSCT Publication Logo",
      footerLink: [
        {
          name: "Read Paper (Vol 5)",
          url: "https://ijarsct.co.in/Paper27759.pdf"
        },
        {
          name: "Read Paper (Vol 4)",
          url: "https://ijarsct.co.in/Paper22118.pdf"
        }
      ]
    },
    {
      title: "ACE Club Coordinator (SKNCOE)",
      subtitle:
        "Organized technical events including coding competitions and hackathons to foster innovation and problem-solving among peers.",
      image: require("./assets/images/ace_club.jpg"),
      imageAlt: "ACE Club Logo",
      footerLink: []
    },
    {
      title: "Logistics Head - GDSC (SKNCOE)",
      subtitle:
        "Led logistics and coordination for campus tech events and workshops, ensuring smooth execution by collaborating across departments.",
      image: require("./assets/images/gdsc.png"), // <-- TODO: Add your college/club logo
      imageAlt: "GDSC Logo",
      footerLink: []
    }
  ]
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set to true to display this section
};
const contactInfo = {
  title: emoji("Contact Me 📧"),
  subtitle:
    "Want to discuss a project or just want to say hi? \nMy inbox is always open.", // <-- Added \n here
  number: "", 
  email_address: "pinakdange1621@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  projects as bigProjects,
  achievementSection,
  contactInfo,
  resumeSection
};
