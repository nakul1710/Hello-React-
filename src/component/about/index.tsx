import React from "react";

function About(props:any){
    console.log(props.discription,"===");
    return(
<div className="About" id="About">
    <div className="jumbotron">

        <div className="col-lg-10 mx-auto">
            <h2 className="text-center">About Us</h2>
            <p className="text-justify" style = {{
              fontWeight: 500,
              fontSize: "18px"
            }}>
             {props.discription}   
            </p>
        </div>

    </div>
</div>

    )
}
export default About