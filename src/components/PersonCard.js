import React, { useState } from "react";

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);   
    
    const handleClick = () => {
        setAge(age + 1);
    }

    return (
        <div>
            <h3>{props.lastName}, {props.firstName}</h3>
            <p>Age: {age}</p>
            <p>Hair colour: {props.hairColour}</p>
            <button onClick={handleClick}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard;


