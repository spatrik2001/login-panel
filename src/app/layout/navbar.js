import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = ({username}) => {
    const router = useRouter();
    const [overlayOnhide, setOverlayOnhide] = useState(true);

    const getActiveClass = (path) => {
        if (router.pathname.includes(path)) return "active"

        return ""
    }

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