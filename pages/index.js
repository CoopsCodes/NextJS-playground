import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Head>
				<title>NextJS Playground</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Link href="/form">
					<a> form </a>
				</Link>
				<Link href="/pokemon">
					<a> pokemon </a>
				</Link>
				<div className={styles.container}>
					<h1>Hello WORLD</h1>
				</div>
			</main>
		</div>
	);
}
