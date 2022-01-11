import Link from "next/link";
const Home = () => {
	return (
		<div>
			<div>This is Home page</div>
			<div>
				About me <Link href="/about">link</Link>
			</div>
		</div>
	);
};

export default Home;
