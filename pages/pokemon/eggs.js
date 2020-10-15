import Link from "next/link";

export default function Eggs() {
	return (
		<div>
			<Link href="/">
				<a>home</a>
			</Link>
			<h1>i am a nested routes page found at /pokemon/eggs</h1>
		</div>
	);
}
