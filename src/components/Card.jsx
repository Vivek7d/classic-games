import React from "react";

function Card(props){
    return(
        <div className="flex-row">
            <div className="card-container">
                <div className="card">
                    <img src={props.img} alt="gta-v"/>
                    <div className="card-content">
                        <h3>{props.gameName}</h3>
                        <p>{props.gameDetail}</p>
                        <a href={props.buyLink} className="btn">Buy Now</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Card;