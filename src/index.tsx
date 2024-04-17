import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './component/header';
import Body from './component/body';
import Footer from './component/footer';
const config = {
  information: {
    firstname: "Janit",
    lastname: "Yadav",
    city: "Khairthal",
    twitter: "",
    linkdein: "",
    github: "",
    instagram: ""
  },
  education: 
    [{
      name: "jecrc",
      url: "https://jaipur.manipal.edu/",
      discription: "Year: 2023-2027 | BTech"
   },{
     name: "Axis Academy Khairthal, Alwar",
     url: "https://schools.org.in/alwar/08060414274/axis-academy-khairthal.html",
     discription: "Year: 2023 | RBSE"
  },
 ],
 about: "Welcome to my profile! I am a passionate individual i loves exploring new placesand am enthusiastic about the world of web development.I am Currently pursuing a Bachelor's degreein Computer Science & Engineering (Btec) at JECRC College, Jaipur, I am diving deep into the realm of HTML and CSS, honing my skills in building beautiful and interactive websites. I am fascination with technology extends beyond coding languages. I have a particular fondness for macOS, appreciating its user-friendly interface and seamless integration with creative tools. Inspired by the possibilities that JavaScript offers in terms of dynamic web development, i aspires to broaden my knowledge and expertise in this powerful programming language."
  
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header/>
    <Body information={config.information} education={config.education} about={config.about}/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

