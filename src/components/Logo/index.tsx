// Imports of Images
import Polygon from "../../assets/polygon.svg";

function Logo() {
	return (
		<div className="animate__animated animate__backInLeft flex gap-2 justify-center items-center mb-20 lg:flex lg:gap-4 lg:mb-16 ">
			<img
				src={Polygon}
				alt="Logo em forma de polígono do food explorer"
				className="xsm:w-8 xsm:h-8  w-11 h-11"
			/>

			<h1 className=" xsm:text-xl text-3xl font-black text-white ">food explorer</h1>
		</div>
	);
}

export default Logo;
