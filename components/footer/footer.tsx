import LocalTime from "./local-time";

const Footer = () => {
    return (
        <div className="bold-text">
            <div className="fixed bottom-0 left-0 ml-[2rem] mb-[1rem] z-100">Portfolio 2026</div>
            <div className="fixed bottom-0 right-0 mr-[2rem] mb-[1rem] z-100">
                <LocalTime />
            </div>
        </div>
    )
}

export default Footer;