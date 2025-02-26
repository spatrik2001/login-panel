// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = ({username}) => {
    /*const router = useRouter();
    const [overlayOnhide, setOverlayOnhide] = useState(true);

    const getActiveClass = (path) => {
        if (router.pathname.includes(path)) return "active"

        return ""
    }*/

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar w/ text</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
                <span className="navbar-text">Navbar text with an inline element</span>
            </div>
        </div>
    </nav>

    const pages = [
        {
            label: "Lorem",
            command: () => {router.push("/")},
            className: getActiveClass("/")
        },
        {
            label: "Hírek",
            command: () => {router.push("/news")},
            className: getActiveClass("/news")
        },
        {
            label: username,
            icon: 'pi pi-fw pi-power off',
            id: "#logOut",
        }
    ]

}

export default Navbar;