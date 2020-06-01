import "prismjs/themes/prism-okaidia.css";
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

// components
import FollowUs from "./FollowUs";

library.add(fab, faCheckSquare, faCoffee);

export default ({ children }) => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`,
	);
	return (
		<div className='site-wrapper'>
			<header className='site-header'>
				<div className='site-title'>
					<Link to='/'>{data.site.siteMetadata.title}</Link>
				</div>
				<Navigation />
			</header>
			{children}
			<footer className='site-footer'>
				<p>
					&copy; {new Date().getFullYear()} Calvary greetings from{" "}
					<a href='https://jesusisourmessage.com'>JIM</a>
				</p>
				<FollowUs size={"1.5rem"} color={"#777777"} />
			</footer>
		</div>
	);
};
