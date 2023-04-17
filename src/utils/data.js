import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 7,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Competitive Coding",
    projects: 200,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finding a solution and solve your problem, I use my developer skills to create digital products.",
  ,
];

export const workExp = [
  {
    place: "B.Tech, 8.7 CGPA",
    tenure: "Aug 2019 - June 2023",
    role: "STUDENT",
    detail:
      "College life is indeed a great experience that teach us many things to cultivate out to be a great person.",
  },
  {
    place: "Intermediate, 64.8 %",
    tenure: "March 2016 - March 2018",
    role: "PCM STUDENT",
    detail:
      "It is a tough, life changing phase for every student in india.",
  },
  {
    place: "Matriculate, 9.8 CGPA",
    tenure: "March 2014 - March 2016",
    role: "CBSE STUDENT",
    detail:
      "Certainly, most of us will agree here life is very peaceful till matriculate.",
  },
];

export const comments = [
  {
    name: "Ritik Anand",
    post: "Data Analyst Standard Chartered",
    comment:
      "Pratik has a great skill set around web development, consistently producing clean, efficient, and maintainable code. His attention to details is also noteworthy as he is able to spot potential issues and bugs before it becomes a big problem. Overall, I highly recommend Pratik  for any web development project as he is committed to delivering high-quality work that meets project needs and goals.",
    img: "./ritik.png",
  },
  {
    name: "Nitin Anand",
    post: "Software Engineer Country Delight.",
    comment:
      "He is determined fellow and is  consistently producing clean and efficient web applications. His attention to details is also noteworthy as he is able to spot potential issues and bugs before it becomes a big problem.Overall, I highly recommend Pratik  for any web development project as he is committed to delivering high-quality work that meets project needs and goals.",
    img: "./nitin.png",
  },
  {
    name: "Megha Rani",
    post: "STUDENT IIT-BHU",
    comment:
      "I am still a newbee but I look forward a lot to him to learn new skills into web development.He never misses a chance to amaze me with his skills and everytime puts something new before me.I am greatly thankful to him for all those knowledges.",
    img: "./megha.png",
  },
  
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
