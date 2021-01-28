import React from "react";
import "./card.styles.css"

function Card (props) {
        return (
                <div className = "card-container">
                        <img
                                src = {`https://robohash.org/${props.monster.id}?set=set2`}
                                alt = "monster"
                        />
                        <h1> {props.monster.name} </h1>
                        <p> {props.monster.email} </p>
                </div>
        );
}

export default Card;
