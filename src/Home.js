import React from "react";
import HeroSection from './components/HeroSection'
import Services from "./components/Services";
import TrustedBy from "./components/TrustedBy";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
    const data = {
        name: "Beauty Bag House",
        intro: "Welcome to"
    }

    return <>
        <HeroSection myData={data}/>
        <Services/>
        <FeatureProduct/>
        <TrustedBy/>
    </>
}


export default Home;