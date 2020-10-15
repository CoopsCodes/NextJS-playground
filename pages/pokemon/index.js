import Link from "next/link";
import { useRouter } from "next/router";

export default function Pokemon() {
	const router = useRouter();

	function returnHome() {
		router.push("/");
	}

	return (
		<div>
			<Link href="/form">
				<a> form </a>
			</Link>
			<h1>Pokemon page used to demonstrate nested routing</h1>
			<Link href="/pokemon/eggs">
				<a> show me eggs </a>
			</Link>
			<button onClick={returnHome}>Home</button>
		</div>
	);
}
