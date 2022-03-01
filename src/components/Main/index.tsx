import { Section } from "../Section";

import s from "./styles.module.scss";

import editorDesktop from "../../assets/illustration-editor-desktop.svg";
import laptopDesktop from "../../assets/illustration-laptop-desktop.svg";
import phones from "../../assets/illustration-phones.svg";

export const Main = () => {

    return (
        <main>
            <Section 
                title="Designed for the future"
                subtitle1="Introducing an extensible editor"
                text1="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
                subtitle2="Robust content management"
                text2="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
                img={editorDesktop}
                position={true}
            />
            <section className={s.section}>
                <img src={phones} />
                <div>
                    <h3>State of the Art Infrastructure</h3>
                    <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
            </section>
            <Section 
                subtitle1="Free, open, simple"
                text1="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
                subtitle2="Powerful tooling Batteries included."
                text2="We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
                img={laptopDesktop}
                position={false}
            />
        </main>
    )
}