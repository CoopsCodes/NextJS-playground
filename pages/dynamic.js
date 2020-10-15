export async function getStaticProps(context) {
	return {
		props: {
			colour: "pink",
		},
	};
}

export default function Dynamic(props) {
	return (
		<div>
			<h1>dynamic {props.colour}</h1>
		</div>
	);
}
