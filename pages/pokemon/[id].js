import Link from "next/link";

export default function PokemonId() {
	return (
		<div>
			<Link href="/">
				<a>home</a>
			</Link>
			<Link href="/pokemon">
				<a> pokemon </a>
			</Link>
			<h1>Hi from dynamic routing</h1>
		</div>
	);
}
