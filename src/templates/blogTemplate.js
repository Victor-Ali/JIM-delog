import React from "react";
// import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { FacebookProvider, Comments } from "react-facebook";
import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	EmailShareButton,
	PocketShareButton,
} from "react-share";

import { EmailIcon, FacebookIcon, PocketIcon, TwitterIcon, WhatsappIcon } from "react-share";

// components
import SEO from "../components/seo";

export default function Template ({ data }) {
	const { site, markdownRemark } = data; // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark;
	return (
		<Layout>
			<SEO description={frontmatter.metaDescription} title={frontmatter.title} image={frontmatter.thumbnail} />
			{/* <Helmet>
				<title>{frontmatter.title}}</title>
				<meta name='description' content={frontmatter.metaDescription} />
			</Helmet> */}
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

				<div className='social-network-wrapper'>
					<p className='social-share-message'>
						<strong>If you are blessed, share this message:</strong>
					</p>
					<p className='mobile-social-share-message'>
						<strong>Share message:</strong>
					</p>
					<section>
						<article className={"social-network"}>
							<FacebookShareButton
								url={`${site.siteMetadata.siteUrl}${frontmatter.path}`}
								quote={"this messages is about me"}
							>
								<FacebookIcon size={30} />
							</FacebookShareButton>
						</article>
						<article className={"social-network"}>
							<TwitterShareButton
								url={`${site.siteMetadata.siteUrl}${frontmatter.path}`}
								quote={frontmatter.title}
							>
								<TwitterIcon size={30} />
							</TwitterShareButton>
						</article>
						<article className={"social-network"}>
							<WhatsappShareButton
								url={`${site.siteMetadata.siteUrl}${frontmatter.path}`}
								quote={frontmatter.title}
							>
								<WhatsappIcon size={30} />
							</WhatsappShareButton>
						</article>
						<article className={"social-network"}>
							<EmailShareButton subject={frontmatter.title} body={"This is recommended for you"}>
								<EmailIcon size={30} />
							</EmailShareButton>
						</article>
						<article className={"social-network"}>
							<PocketShareButton
								url={`${site.siteMetadata.siteUrl}${frontmatter.path}`}
								quote={frontmatter.title}
							>
								<PocketIcon size={30} />
							</PocketShareButton>
						</article>
					</section>
				</div>

				<section className={"comment-box"}>
					<h4 style={{ textAlign: "center" }}>Leave a comment:</h4>
					<article style={{ display: "flex", justifyContent: "center" }}>
						<FacebookProvider appId='268317461242640'>
							<Comments href={`${site.siteMetadata.siteUrl}${frontmatter.path}`} />
						</FacebookProvider>
					</article>
				</section>
			</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query($slug: String!) {
		site {
			siteMetadata {
				title
				siteUrl
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
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
