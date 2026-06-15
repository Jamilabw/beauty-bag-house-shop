import { React, useContext } from "react";
import HeroSection from "./components/HeroSection";
import { AppContext } from "./context/ProductContext";

const About = () =>{
    const biodata = useContext(AppContext); /// Consume the context value using the useContext hook

    const data = {
        name: "The Ultimate Bag Store",
        intro: "Know about"
    }

    return <>
    <HeroSection myData={data}/>
    </> 
}

export default About;