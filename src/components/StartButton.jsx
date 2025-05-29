import React from 'react';
import { useNavigate } from 'react-router-dom';

function StartButton() {
    const navigate = useNavigate();
    return(
        <button onClick={()=> navigate("/Game")}>Start</button>
    )
}

export default StartButton;