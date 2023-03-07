import React from "react"
import NavBar from "./nav-bar/NavBar";
import Footer from "./footer/Footer";

class Layout extends React.Component<any, any> {
    render() {
        return (
            <>
                <NavBar/>
                <>{this.props.children}</>
                <Footer/>
            </>
        )
    }
}

export default Layout;