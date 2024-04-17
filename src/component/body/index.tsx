import React from 'react';
import './body.css';
import Education from '../education';
import About from '../about';
import Hero from '../hero';
import Gallery from '../gallery';
import Project from '../project';
function Body(props: any){
  console.log(props.information.firstname)
  
return (
  <>
       <Hero firstname={props.information.firstname} lastname={props.information.lastname} city={props.information.city} img={props.information.img} github={props.information.github} twitter="nakul1705" linkedin={props.information.linkdein} instagram={props.information.intagram} resume={props.information.resume}/> 
       <About discription={props.about}/>
     
       <Education org={props.education}/>
       <Project/>
       <Gallery/>
</>
    )
    }
    export default Body;
