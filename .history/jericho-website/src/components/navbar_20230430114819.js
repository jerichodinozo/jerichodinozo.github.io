import { Link } from "react-router-dom"
export default function navbar() {
    return (
        <div id="nav-container">
                <ul id="navbar">
                    <li> <Link to="/">home</Link></li>
                    <li> <Link to="/work">work</Link></li>
                    <li><Link to="/background">background</Link></li>
                    <li><Link to="/">contact</Link></li>
                </ul>
            </div>
    )
}