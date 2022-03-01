import s from "./styles.module.scss";

import logo from "../../assets/logo.svg";


export const Footer = () => {
    return (
        <footer className={s.footer}>
            <img src={logo} />
                <div>
                    <h3>Product</h3>
                    <ul>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Intergrations</li>
                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h3>Connect</h3>
                    <ul>
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>LinkdIn</li>
                    </ul>
                </div>
        </footer>
    )
}