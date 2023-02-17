// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Uttam",
  middleName: "Kumar",
  lastName: "Mehta",
  message:
    "I am passionate Full Stack Web Developer and love adding more functionality to any website. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/UttamMehta",
    },
    /*     {
      image: "fa-facebook",
      url: "https://www.facebook.com/people/Charles-Galwyn/100079383486507/",
    }, */
    /*     {
      image: "fa-instagram",
      url: "https://www.instagram.com/charles_galwyn/",
    }, */
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/uttam-mehta-47364923b/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/UTTAMMEHTA83",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "https://avatars.githubusercontent.com/u/111144552?v=4",
  imageSize: 375,
  message:
    "I'am Uttam Kumar Mehta.Currently studing BCA from KIIT Unversity,IGNOU.Started learning basic of Java in 2014.To know how some lines of code solve big problem in real world joined Masai School.In Masai School I did three major project where all the functionality part has been implemented by me and now I'm most passionate about working in collaborative poject, and my goal is to pursue this passion within the field of software engineering .",
  resume:
    "https://drive.google.com/file/d/1p3pkDTMXWei5U1YrWQf7YIYDtcy7upil/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "UttamMehta", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["FullStackApplication", "LARQ", "ESPNsports"],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a phartra augue mollis intrdum.",
    },
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 90 },
    { name: "HTML/CSS", value: 75 },
    { name: "React", value: 90 },
    { name: "Chakra UI", value: 75 },
    { name: "Redux", value: 90 },
    { name: "MongoDB", value: 85 },
    { name: "NodeJS", value: 80 },
    { name: "Mongoose", value: 80 },
  ],
  softSkills: [
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 85 },
    { name: "Organization", value: 85 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "uttamkumarmehta83@gmail.com",
  phone: "+91 6370457871",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer", // Here Add Company Name
      companylogo: require("../assets/img/dell.png"),
      date: "June 2018 – Present",
    },
    {
      role: "Front-End Developer",
      companylogo: require("../assets/img/boeing.png"),
      date: "May 2017 – May 2018",
    },
  ],
};

// Blog SECTION
const blog = {
  show: true,
};

const images = [
  require("../assets/img/Practo.png"),
  require("../assets/img/Larq.png"),
  require("../assets/img/Espn.png"),
];

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
  blog,
  images,
};
