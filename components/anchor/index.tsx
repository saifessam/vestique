import { Icon as PhosphorIcon } from "@phosphor-icons/react";
import Link from "next/link";
import styles from "./styles.module.css";

interface IProps {
	href: string;
	label?: string;
	icon?: PhosphorIcon;
}

export default function Anchor({ href, label, icon: Icon }: IProps) {
	return <Link href={href} className={styles["anchor"]}>{label}{Icon && <Icon />}</Link>;
}
