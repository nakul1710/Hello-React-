import React from "react";
import './education.css';
function Education(props:any){
    console.log(props.org[0]);
    return(
        <div className="education" id="education">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <h2 className="text-center">Education</h2>


                {props.org.map((value:any,index:any)=>{
                    
                    return(
                        <>
                        <p className="text-decoration-none"><a href={value.url}
                        >{value.name}</a></p>
                <p>{value.discription}</p>
                </>
                    )

        
                })}
                
                



                <h2 className="text-center">certificate</h2>
                <p className="text-decoration-none"><a
                        href="https://www.freecodecamp.org/certification/nakul1710/responsive-web-design"
                       >Responsive web Designing,Free code camp</a></p>
                <p>Year: 2023</p>
                <h2 className="text-center m-5">Confrenses and meetups</h2>
                <p className="text-left"><a href="https://awsugjaipur.in/" >AWS
                        COMMUNITY DAY RAJASTHAN </a></p>
                <p className="text-left">Year: 2023</p>
                <h2 className="text-center">Github Contribution</h2>
                <div className="text-center">
                    <a href="https://github.com/nakul1710">
                        <img src="https://ghchart.rshah.org/nakul1710" alt="2016rshah's Github chart"/>
                    </a>
     
                </div>

            </div>
        </div>
    </div>
 
    )

    
}
export default Education