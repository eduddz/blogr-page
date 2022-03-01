import "./styles.scss";

interface Props {
    background: "white" | "none" | "hsl(353, 100%, 62%)";
    color: "hsl(353, 100%, 62%)" | "white";
    border: "1px solid white" | "1px solid transparent";
    text: string;
}

export const Button = (props: Props) => {
    return (
        <button 
            style={{
                background: `${props.background}`, 
                color: `${props.color}`,
                border: `${props.border}`,
                padding: "15px 10px",
                width: "110px",
                borderRadius: "30px",
                cursor: "pointer"
            }}
            className="hover"
        >
            {props.text}
        </button>
    )
}