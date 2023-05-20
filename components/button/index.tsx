import styles from "./styles.module.css";

interface IProps {
	type?: "button" | "submit" | "reset";
	className?: string;
	style: "PRIMARY" | "SECONDARY";
	content: string | JSX.Element;
	onClick?: () => void;
}

export default function Button({ type = "button", className, style, content, onClick }: IProps) {
	return <button type={type} className={`${styles["button"]} ${className}`} data-style={style} onClick={onClick}>{content}</button>;
}
