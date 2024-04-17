import React from "react";

function Gallery(){
    return(
        <div className="gallery" id="gallery">
        <h2>Gallery</h2>
        <div className="gallery-row">
            <div className="gallery-item">
                <img src="./img/aws.jpeg" width="100%" height="400px" alt="Image 4"/>
            </div>
            <div className="gallery-item">
                <img src="./img/8.jpeg" width="100%" height="400px" alt="Image 5"/>
            </div>
            <div className="gallery-item">
                <img src="./img/nana.jpeg" width="90%" height="400px" alt="Image 5"/>
            </div>
        </div>
        <div className="gallery-row">
            <div className="gallery-item">
                <img src="./img/9.jpeg" width="100%" height="400px" alt="Image 5"/>
            </div>
            <div className="gallery-item">
                <img src="./img/ethnic.jpeg" width="100%" height="400px" alt="Image 5"/>
            </div>
            <div className="gallery-item">
                <img src="./img/nakul.png" width="100%" height="400px" alt="Image 5"/>
            </div>
        </div>


    </div>
   
    )
}
export default Gallery