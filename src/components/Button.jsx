import React from "react";
import Logo from "../assets/icon-cart.svg"

export default function Button() {

    return (
        <div className="Button">
                <img alt="shoppingcart" src={Logo} />
                <div className="addtoCart">Add to Cart</div>        
        </div>
    )
}
