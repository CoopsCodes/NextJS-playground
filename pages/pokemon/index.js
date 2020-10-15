import Link from "next/link";

export default function Pokemon() {
	return (
		<div>
			<Link href="/">
				<a>home</a>
			</Link>
			<Link href="/form">
				<a> form </a>
			</Link>
			<h1>Pokemon page used to demonstrate nested routing</h1>
			<Link href="/pokemon/eggs">
				<a> show me eggs </a>
			</Link>
		</div>
	);
}
