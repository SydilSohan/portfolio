import CV from "../assets/cv.pdf"
const CTA = () => {
    return (
        <div className="flex-auto mt-10 flex gap-2 justify-center"> 
        <a href={CV} target={"_blank"} download rel="noreferrer"><button>Download CV</button></a>
        <a id="contact" href=""><button className="bg-primary text-light">Let's Talk</button></a>
        </div>
    )
}
export default CTA