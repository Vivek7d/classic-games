import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import gamesinfo from "../gamesinfo";

function createCard(gamesinfo){
    return(
        <Card
         key={gamesinfo.id}
         img={gamesinfo.img}
         gameName={gamesinfo.gameName}
         gameDetail={gamesinfo.gameDetail}
         buyLink={gamesinfo.buyLink}
        />
    );
}
function App(){
    return(
    <div>
        <Heading />
        <div className="card-container">
        {gamesinfo.map(createCard)}
        </div>
        
    </div>
    );
}
export default App;