// Each functional component will retain its own styles, but they can be made global with the global tag
// e.g to make this style global => <style jsx global></style>
function Header(props) {
	// JSX can also be passed CSS variables
	const variable = Math.random() > 0.5 ? "red" : "blue";
	return (
		<div>
			<h1 className="title">{props.heading}</h1>
			<h2 className="sub-title">{props.subTitle}</h2>
			<style jsx>
				{`
					.title {
						color: pink;
					}
					,
					.sub-title {
						color: ${variable};
					}
				`}
			</style>
		</div>
	);
}

// exported function displaying
export default function Home() {
	return (
		<div>
			<Header heading="Hello WORLD" subTitle="Im a Subtitle" />
			<h1>I don't inherit the JSX styles</h1>
		</div>
	);
}
