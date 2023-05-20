"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import { SyntheticEvent, useState } from 'react';
import Anchor from "../anchor";
import styles from './styles.module.css';

export default function Header() {
	return (
		<header className={styles["header"]}>
			<Link href={'/'}>VESTIQUE</Link>
			<nav>
				<Anchor href={'/products'} label="PRODUCTS" />
				<Anchor href={'/bookmarks'} label="BOOKMARKS" />
				<Anchor href={'/shopping-cart'} label="SHOPPING CART" />
				<Anchor href={'/account'} label="ACCOUNT" />
			</nav>
			<Search />
		</header>
	);
}

function Search() {
	const [searching, setSearching] = useState<boolean>(false);
	const [query, setQuery] = useState<string>("");

	function onSubmit(e: SyntheticEvent) {
		e.preventDefault();
		if (!searching) return setSearching(true);
		if (!query) return setSearching(false);
		alert(`Searching for: ${query}`);
	}

	return <form onSubmit={onSubmit}>
		<input type="text" name="search" className={searching ? styles["visible"] : undefined} placeholder='What are you looking for?' onChange={(e) => setQuery(e.target.value)} />
		<button type='submit' title="Search"><MagnifyingGlass /></button>
	</form>;
}

