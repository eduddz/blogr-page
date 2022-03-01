import s from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import arrowLight from "../../assets/icon-arrow-light.svg";
import arrowDark from "../../assets/icon-arrow-dark.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";

import { Button } from "../Button";
import { useState } from "react";

export const Header = () => {

    const [active, setActive] = useState(false);

    const [item1, setItem1] = useState(false);
    const [item2, setItem2] = useState(false);
    const [item3, setItem3] = useState(true);

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <header className={s.header}>
                    <img src={logo} alt="logo blogr" />
                    {
                        window.screen.width < 801 ?
                        (
                            <>
                            <img 
                                src={active ? close : hamburger} 
                                alt="icon hamburger" 
                                onClick={() => setActive(!active)}
                            />
                            <div className={active ? s.mobile : s.null}>
                                <nav>
                                    <h4 onClick={() => setItem1(!item1)}>
                                        Product
                                        <img src={arrowDark} className={item1 ? s.transition : s.nul} alt="icon arrow ligjt" />
                                    </h4>
                                    {
                                        item1 ?
                                        (
                                            <ul>
                                                <li>Overview</li>
                                                <li>Pricing</li>
                                                <li>Marketplace</li>
                                                <li>Features</li>
                                                <li>Integrations</li>
                                            </ul>
                                        ) : null
                                    }
                                    <h4 onClick={() => setItem2(!item2)}>
                                        Company
                                        <img src={arrowDark} className={item2 ? s.transition : s.nul} alt="icon arrow ligjt" />
                                    </h4>
                                    {
                                        item2 ?
                                        (
                                            <ul>
                                                <li>About</li>
                                                <li>Team</li>
                                                <li>Blog</li>
                                                <li>Carrers</li>
                                            </ul>
                                        ) : null
                                    }
                                    <h4 onClick={() => setItem3(!item3)}>
                                        Connect
                                        <img src={arrowDark} className={item3 ? s.transition : s.nul} alt="icon arrow ligjt" />
                                    </h4>
                                    {
                                        item3 ?
                                        (
                                            <ul>
                                                <li>Contact</li>
                                                <li>Newsletter</li>
                                                <li>LinkedIn</li>
                                            </ul>
                                        ) : null
                                    }
                                </nav>

                                <hr />
                                
                                <div className={s.buttonsMobile}>
                                    <Button 
                                        background="none"
                                        color="hsl(353, 100%, 62%)"
                                        border="1px solid transparent"
                                        text="Login" />
                                    <Button 
                                        background="hsl(353, 100%, 62%)"
                                        color="white"
                                        border="1px solid white"
                                        text="Sign Up" />
                                </div>
                            </div>
                            </>


                        ) :
                        (
                            <>
                            <nav className={s.nav}>
                                <div className={s.dropdown}>
                                    <h4>
                                        Product
                                        <img src={arrowLight} alt="icon arrow ligjt" />
                                    </h4>
                                    <ul>
                                        <li>Overview</li>
                                        <li>Pricing</li>
                                        <li>Marketplace</li>
                                        <li>Features</li>
                                        <li>Integrations</li>
                                    </ul>
                                </div>
                                <div className={s.dropdown}>
                                    <h4>
                                        Company
                                        <img src={arrowLight} alt="icon arrow ligjt" />
                                    </h4>
                                    <ul>
                                        <li>About</li>
                                        <li>Team</li>
                                        <li>Blog</li>
                                        <li>Carrers</li>
                                    </ul>
                                </div>
                                <div className={s.dropdown}>
                                    <h4>
                                        Connect
                                        <img src={arrowLight} alt="icon arrow ligjt" />
                                    </h4>
                                    <ul>
                                        <li>Contact</li>
                                        <li>Newsletter</li>
                                        <li>LinkedIn</li>
                                    </ul>
                                </div>
                            </nav>
                            <div className={s.buttons}>
                                <Button 
                                    background="none"
                                    color="white"
                                    border="1px solid transparent"
                                    text="Login" />
                                <Button 
                                    background="white"
                                    color="hsl(353, 100%, 62%)"
                                    border="1px solid white"
                                    text="Sign Up" />
                            </div>
                            </>
                        )
                    }
                    
                </header>
                <div className={s.title}>
                    <h1>A modern publishing platform</h1>
                    <p>Grow your audience and build your online brand</p>
                    <div className={s.buttons}>
                        <Button 
                            background="white"
                            color="hsl(353, 100%, 62%)"
                            border="1px solid transparent"
                            text="Start for Free" />
                        <Button 
                            background="none"
                            color="white"
                            border="1px solid white"
                            text="Learn More" />
                    </div>
                </div>
            </div>
        </div>
    )
}