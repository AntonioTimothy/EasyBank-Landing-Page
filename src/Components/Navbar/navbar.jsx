import "./navbar.css";
import logo from "../images/logo.svg"
import menuIcon from "../images/icon-hamburger.svg"



export const Navbar = () => {

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbarNavbar">
                    <div className="logo">
                        <img src={logo} alt="bank-logo" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li> <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about"> About</a></li>
                            <li> <a href="#contact"> Contact</a></li>
                            <li> <a href="#blog"> Blog</a></li>
                            <li> <a href="#careers"> Careers</a></li>
                        </ul>
                    </div>
                    <div className="invitation">
                        <button className="invitation-btn">Request Invite</button>
                    </div>
                    <button className="menu-hidden" >
                        <img src={menuIcon} alt="menuImage" id="menuIcon" />

                    </button>
                </div>

            </div>
        </div>

    )

}
const modal = document.getElementById("modal");

function displayModal() {
    modal.classList.remove("modal-hidden");
    modal.classList.add("modal-visible");

}

document.getElementById("menuIcon").addEventListener("click", displayModal)




export const HomeModal = () => {
    <div className="modal modal-hidden" id="modal">
        <div className="container">
            <ul className="mobile-modal">
                <li className="mobileMenuitem">Home</li>
                <li className="mobileMenuitem">About</li>
                <li className="mobileMenuitem">Contact</li>
                <li className="mobileMenuitem">Blog</li>
                <li className="mobileMenuitem">Careers</li>
            </ul>
        </div>
    </div>
}

