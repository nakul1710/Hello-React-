import React from "react";
import Social from '../social'
interface HeroProps{
    firstname: string,
    lastname:  string,
    city: string,
    img: string,
    github: string,
    linkedin: string,
    instagram: string,
    twitter: string,
    resume: string
}
function Hero(props: HeroProps){
    return(
        <div className="name" id="name">
        <h1 className="text-dark ">{props.firstname}</h1>
        <h1 className="text-danger"> {props.lastname}</h1>
        <img className="rounded-circle" src={props.img} height="100px" width="100px"/>
        {props.city.length > 0 && (
         <p className="text-dark m-2"><b>{props.city}</b></p>
        )}
        
        <div className="social-links">
           <Social name={"github"} href={"https://github.com/"+props.github}/>
           <Social name={"twitter"} href={"https://twitter.com/"+props.twitter}/>
           <Social name={"instagram"} href={"https://instagram.com/"+props.instagram}/>
           <Social name={"linkedin"} href={"https://lindein.com/"+props.linkedin}/>

            
        </div>
        <a className="btn btn-danger m-3"
            href={props.resume}
            target="_blank">Download Resume</a>
    </div>
    )
}
export default Hero