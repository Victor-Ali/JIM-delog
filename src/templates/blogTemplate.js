import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { FacebookProvider, Comments } from "react-facebook";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	EmailShareButton,
	PocketShareButton,
} from "react-share";

export default function Template ({ data }) {
	const { site, markdownRemark } = data; // data.markdownRemark holds your post data
	const { siteMetadata } = site;
	const { frontmatter, html } = markdownRemark;
	return (
		<Layout>
			<Helmet>
				<title>
					{frontmatter.title} | {siteMetadata.title}
				</title>
				<meta name='description' content={frontmatter.metaDescription} />
			</Helmet>
			<div className='blog-post-container'>
				<article className='post'>
					{!frontmatter.thumbnail && (
						<div className='post-thumbnail'>
							<h1 className='post-title'>{frontmatter.title}</h1>
							<div className='post-meta'>{frontmatter.date}</div>
						</div>
					)}
					{!!frontmatter.thumbnail && (
						<div className='post-thumbnail' style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}>
							<h1 className='post-title'>{frontmatter.title}</h1>
							<div className='post-meta'>{frontmatter.date}</div>
						</div>
					)}
					<div className='blog-post-content' dangerouslySetInnerHTML={{ __html: html }} />
				</article>

				<div className={"comment-box"}>
					<h4 style={{ textAlign: "center" }}>Leave a comment:</h4>
					<section style={{ display: "flex", justifyContent: "center" }}>
						<FacebookProvider appId='268317461242640'>
							<Comments href={`${site.siteMetadata.siteUrl}${frontmatter.path}`} />
						</FacebookProvider>
					</section>
				</div>
			</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query($path: String!) {
		site {
			siteMetadata {
				title
				siteUrl
			}
		}
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				thumbnail
				metaDescription
			}
		}
	}
`;
