import s from "./styles.module.scss";

interface SectionProps {
    title?: string;
    subtitle1: string;
    text1: string;
    subtitle2: string;
    text2: string;
    img: string;
    position?: boolean;
}

export const Section = (props: SectionProps) => {
    return (
        <div className={s.container}>
            <h2>{props.title}</h2>
            <div className={props.position ? s.left : s.right}>
                <div className={s.text}>
                    <div>
                        <h3>{props.subtitle1}</h3>
                        <p>{props.text1}</p>
                    </div>
                    <div>
                        <h3>{props.subtitle2}</h3>
                        <p>{props.text2}</p>
                    </div>
                </div>
                <img src={props.img} />
            </div>
        </div>
    )
}