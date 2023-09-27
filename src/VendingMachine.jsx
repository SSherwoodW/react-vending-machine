import { useState } from "react";
import { Link } from "react-router-dom";


const VendingMachine = () => {
    return (
        <div>
            <div>Vending Machine!</div>
            <div className="routeButtons">
                <Link classname="link" to="/skittles">Skittles</Link>
                <Link classname="link" to="/hotdog">Hot Dog</Link>
                <Link classname="link" to="/jerky">Jerky</Link>
            </div>
            
        </div>
    )
}

export default VendingMachine;