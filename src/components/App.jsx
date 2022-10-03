import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Experience from "./Experience";
import Contact from "./Contact";
import About from "./About";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Services from "./Services";
import "../index.css"

function App  ()  {
    return (
        <div className="overflow-x-hidden">
        <Header />
        <Nav />

        <About />
        <Experience />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />

        </div>
    )}
    export default App;