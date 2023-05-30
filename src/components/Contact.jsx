import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWraper } from "../hoc";
import SeactionHeading from "./SeactionHeading";

const Contact = () => {
	const formRef = useRef(null);
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_8gal7lw",
				"template_p3z5kpo",
				{
					from_name: form.name,
					to_name: "Aayush",
					from_email: form.email,
					to_email: "akarki@ramapo.edu",
					message: form.message,
				},
				"Qo0xgwZDT5sWft6sc"
			)
			.then((res) => {
				setLoading(false);
				alert(
					"Thank you for your message. I will get back to you soon."
				);
				setForm({
					name: "",
					email: "",
					message: "",
				});
			})
			.catch((err) => {
				setLoading(false);
				console.log(error);

				alert("Something went wrong. Please try again.");
			});
	};

	return (
		<div className="xl:mt-12 flex flex-col-reverse xl:flex-row gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<SeactionHeading
					subText="Get in touch"
					sectionHeadText="Contact"
				/>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="flex flex-col gap-8"
				>
					{/* name */}
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Your Name
						</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondarytext-white rounded-lg outline-none border-none font-medium"
						></input>
					</label>
					{/* email */}
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Your Email
						</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondarytext-white rounded-lg outline-none border-none font-medium"
						></input>
					</label>
					{/* message */}
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">
							Your Message
						</span>
						<textarea
							rows="7"
							type="text"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondarytext-white rounded-lg outline-none border-none font-medium"
						></textarea>
					</label>

					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

const ContactWapper = () => {
	return (
		<SectionWraper idName="contact">
			<Contact />
		</SectionWraper>
	);
};

export default ContactWapper;
