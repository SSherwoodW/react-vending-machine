import { Link } from "react-router-dom"

const HotDog = () => {
    return (
        <div className="hotdog">
            <h3>Try it Sonoran Style!</h3>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default HotDog;