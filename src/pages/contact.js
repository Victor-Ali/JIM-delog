import React, { useState } from "react";
import Helmet from "react-helmet";
import { navigate } from "gatsby-link";
import { graphql } from "gatsby";
import Layout from "../components/layout";

function encode (data) {
	return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
}

const ContactPage = ({ data: { site } }) => {
	const [ state, setState ] = useState({});

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		console.log("state", { ...state });
		e.preventDefault();
		const form = e.target;
		fetch("/", {
			method  : "POST",
			headers : { "Content-Type": "application/x-www-form-urlencoded" },
			body    : encode({
				"form-name" : form.getAttribute("name"),
				...state,
			}),
		})
			.then(() => navigate(form.getAttribute("action")))
			.catch((error) => alert(error));
	};

	return (
		<Layout>
			<Helmet>
				<title>Contact — {site.siteMetadata.title}</title>
				<meta name='description' content={"Contact page of " + site.siteMetadata.description} />
			</Helmet>
			{/* This should work well */}
			<div className='two-grids -contact'>
				<div className='post-thumbnail'>
					<h1 className='post-title'>Get in Touch</h1>
					<p>Leave me a message for prayer, counselling etc. &rarr;</p>
				</div>
				<div>
					<form
						name='contact'
						method='post'
						data-netlify='true'
						data-netlify-honeypot='bot-field'
						action='/thank-you'
						className='form-container'
					>
						<input type='hidden' name='form-name' value='contact' />

						<div>
							<label htmlFor='name'>Name</label>
							<input type='text' name='name' id='name' onChange={handleChange} />
						</div>
						<div>
							<label htmlFor='email'>Email</label>
							<input type='email' name='email' id='email' onChange={handleChange} />
						</div>
						<div>
							<label htmlFor='subject'>Subject</label>
							<input type='text' name='subject' id='subject' onChange={handleChange} />
						</div>
						<div>
							<label htmlFor='message'>Message</label>
							<textarea name='message' id='message' onChange={handleChange} />
						</div>
						<div style={{ display: "flex", justifyContent: "flex-end" }}>
							<button
								type='submit'
								onsubmit={handleSubmit}
								className='button -primary'
								style={{ marginRight: 0, cursor: "pointer" }}
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
};
export default ContactPage;
export const pageQuery = graphql`
	query ContactPageQuery {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;
