import { useState } from "react";
import { Link } from "react-router-dom"

const Skittles = () => {

    return (
        <div className="skittles">
            <h3>Taste the rainbow!</h3>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Skittles;