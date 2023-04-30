import { Link } from "react-router-dom"
export default function navbar() {
    return (
        <div id="nav-container">
                <ul id="navbar">
                    <li> <Link to="/work">work</Link></li>
                    <li>education</li>
                    <li>contact</li>
                </ul>
            </div>
    )
}