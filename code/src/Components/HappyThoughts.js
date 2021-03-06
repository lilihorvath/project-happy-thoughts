import React, { useState } from "react"

import moment from "moment"

import "./HappyThoughts.css"

export const HappyThoughts = props => {
    const {id, message, hearts, createdAt} = props.thought
    const [likes, setLikes] = useState(hearts)
    const handleClick = () => {
        fetch (`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
            method: "POST", 
            body: "", 
            headers: { "Content-Type": "application/json" }
        })
        .then(setLikes(likes+1))
        .catch(err => console.log("error", err))
    }

    return (
        <article className="happy-thoughts">
            <h3>{message}</h3>
            <div className="heart-time">
            <p> 
                <button className="happy-heart" onClick={handleClick} style={{background: hearts > 0 ? "#ffadad" : "#f3f1f1" }}>
                    <span role="img" aria-label="Heart"> {"❤️"} </span>
                </button>
                x {likes}
            </p>
            <h5 className="time">{moment(createdAt).fromNow()}</h5>
            </div>
        </article>
    )
}