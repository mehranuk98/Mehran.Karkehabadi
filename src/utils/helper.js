import {
  FaDiagramProject,
  FaEnvelope,
  FaRegEnvelope,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaInstagram,
} from "react-icons/fa6";
import {
  ChatApp,
  CodePenClone,
  FreshJuiceUI,
  ImageSharing,
  OpenAI,
  PixabayClone,
  PortfolioFirebase,
  RestaurantClone,
  SocialMedia
} from "../assets";
import Appticket from "../assets/img/Project/Appticket.png"
import Weather from "../assets/img/Project/Weather.png"
import QuizApp from "../assets/img/Project/QuizApp.png"

export const Socials = [
  {
    id: `instagram-${Date.now()}`,
    Icon: FaInstagram,
    uri: "https://www.instagram.com/ichbinmehran/?hl=en",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/mehranuk98",
    color: "#fff",
  },{
    id: `FaRegEnvelope-${Date.now()}`,
    Icon: FaRegEnvelope,
    uri: "https://mail.google.com/mail/?view=cm&source=mailto&to=mehran.karkehabadi98@gmail.com",
    color: "#fff",
  }
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `Appticket-${Date.now()}`,
    name: "Appticket",
    imgSrc: Appticket,
    gitURL: "https://mehranuk98.github.io/snappbox-appticket/",
  },{
    id: `Weather-${Date.now()}`,
    name: "Weather",
    imgSrc: Weather,
    gitURL: "https://mehranuk98.github.io/weather/",
  },{
    id: `QuizApp-${Date.now()}`,
    name: "QuizApp",
    imgSrc: QuizApp,
    gitURL: "https://mehranuk98.github.io/Quiz-App/quiz",
  }
];
