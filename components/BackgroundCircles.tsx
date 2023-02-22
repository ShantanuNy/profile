import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
	return (
		<motion.div
			className="relative flex justify-center items-center"
			initial={{ opacity: 0 }}
			transition={{ duration: 2.5 }}
			whileInView={{ opacity: 1 }}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
				borderRadius: ["20%", "20%", "50%", "80%", "20%"],
			}}>
			<div className="rounded-full border border-[#ff0606] h-[200px] w-[200px] absolute mt-52 animate-ping" />
			<div className="rounded-full border border-[#ffffff9e] h-[300px] w-[300px] absolute mt-52 animate-pulse" />
			<div className="rounded-full border border-[#b4b4b4ab] h-[500px] w-[500px] absolute mt-52 " />
			<div className="rounded-full border border-[#ff0000] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
			<div className="rounded-full border border-[#ffffff85] opacity-20 h-[800px] w-[800px] absolute mt-52 animate-pulse" />
			<div className="rounded-full border border-[#ffffff85] opacity-20 h-[1000px] w-[1000px] absolute mt-52 animate-pulse" />
			<div className="rounded-full border border-[#5c5c5ca2] h-[800px] w-[800px] absolute mt-52" />
		</motion.div>
	);
}

export default BackgroundCircles;
