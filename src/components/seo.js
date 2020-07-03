import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, article }) => {
	// const { pathname } = useLocation();
	const data = useStaticQuery(query);

	const { defaultTitle, defaultDescription, siteUrl, defaultImage, site_social } = data.site.siteMetadata;

	console.log("seo", image);

	return (
		<Helmet htmlAttributes={{ lang: "en" }} title={`${defaultTitle} | ${title}`}>
			<meta name='description' content={description || defaultDescription} />
			<meta name='image' content={image} />
			{/* twitter cards */}
			<meta name='twitter:card' content='summary_large_image' />
			{/* <meta name='twitter:creator' content={twitterUsername} /> */}
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description || defaultDescription} />
			<meta name='twitter:image' content={`${siteUrl}${image}`} />
		</Helmet>
	);
};

export default SEO;

SEO.propTypes = {
	title       : PropTypes.string,
	description : PropTypes.string,
	image       : PropTypes.string,
	article     : PropTypes.bool,
};

SEO.defaultProps = {
	title       : null,
	description : null,
	image       : null,
	article     : false,
};

const query = graphql`
	query SEO {
		site {
			siteMetadata {
				defaultTitle: title
				defaultDescription: description
				siteUrl
				defaultImage
				site_social {
					url
					name
				}
			}
		}
	}
`;
