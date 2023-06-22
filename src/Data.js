import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaFacebook, FaLinkedin, FaPython, FaJava,FaAndroid,FaYoutube,FaGithub} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/nadhemeeqtertret.png"
import work1 from "./assets/work1.jpg";
import work2 from "./assets/work2.jpg";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";
import work7 from "./assets/work7.png";
import work8 from "./assets/work8.png";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <a href="https://www.linkedin.com/in/nadhem-saoudi-797b6320b/"> {<FaLinkedin  />}</a>,
  <a href="https://www.facebook.com/nadhem.saoudi.12/"> {<FaFacebook  />}</a>,
  <a href="https://www.youtube.com/watch?v=5X94_aSQ8Cw&ab_channel=IjaCodii"> {<FaYoutube  />}</a>,
  <a href="https://github.com/NadhemSaoudi"> {<FaGithub  />}</a>

  
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Nadhem Saoudi"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "(+216)27663255"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "nadhem.saoudi@outlook.com"
  }
]

export const icons = [<FaReact />,<FaPython />,<FaNodeJs />,<FaJava />,<FaHtml5 />, <FaCss3 />, <DiJavascript />,  <FaAndroid />]

export const experiences = [
  {
    id: 1,
    year: "2023",
    position: "Software developer at MBI Network",
    company:  <motion.a style={{color:"white"}} href='https://mbi-network.com/' 
  
    >
    MBI Network
    </motion.a>
  },
  {
    di: 2,
    year: "2022",
    position: "Founder of OVER-AI ",
    company:  <motion.a style={{color:"white"}} href='https://nadhemsaoudi.me/overAI/' 
  
  >
  OVER-AI
  </motion.a>

  },
  {
    id: 3,
    year: "2021",
    position: "Intern Web Developer",
    company:  <motion.a style={{color:"white"}} href='https://www.poste.tn/' 
  
  >
  Tunisian Post
  </motion.a>
  }
]
export const finishes = [
  {
    id: 1,
    number: '2+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "10+",
    itemName: "Satisfied Customers"
  },
  {
    id: 3,
    number: "10+",
    itemName: "Designed Items"
  },
  {
    id: 4,
    number: "10+",
    itemName: "Clients Served"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "Workshop"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "Workshop"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "Workshop"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design"
  },
  {
    id: 7,
    img: work7,
    name: "project 6",
    category: "web"
  },
  {
    id: 8,
    img: work8,
    name: "project 6",
    category: "web"
  },
  {
    id: 9,
    img: work6,
    name: "project 6",
    category: "web"
  }
]


export const workNavs = [
  "All", "Workshop", "Web", "App"
  
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "8030 Grombalia, Nabeul , Tunisia"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "nadhem.saoudi@outlook.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+216 27663255"
  }
]
