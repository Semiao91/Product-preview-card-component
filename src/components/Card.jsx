import React from "react";
import Button from "./Button";
import Img from "../assets/image-product-desktop.jpg"
import ImgMobile from "../assets/image-product-mobile.jpg"

export default function Card() {

    return (
        <div className="mainCard">
            <div className="mainContainer">
                <div>
                    <img className="cardImg cardImgm" alt="img" src={Img}/>
                    <img className="cardImgMobile" alt="img" src={ImgMobile}/>
                </div>
                <div className="cardInfo">
                    <div className="cardType">Perfume</div>
                    <div className="cardBrand">Gabrielle Essence Eau De Parfum</div>
                    <div className="cardDescription">A floral, solar and voluptuous interpretation composed by  Olivier Polge, Perfumer-Creator for the House of CHANEL.</div>
                    <div className="prices">
                        <div className="cardPrice">$149.99</div>
                        <div className="cardOldprice">$169.99</div>
                    </div>
                    <Button/>
                </div>
            </div>
        </div>
    )
}
