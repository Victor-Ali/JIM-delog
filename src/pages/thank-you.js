import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ThankYou = ({ data: { site } }) => {
	console.log("thank you bg", site.siteMetadata.thank_you_bg);
	return (
		<Layout>
			<Helmet>
				<title>Thank-You — {site.siteMetadata.title}</title>
				<meta name='description' content={"Thank you page of " + site.siteMetadata.description} />
			</Helmet>
			<div className='two-grids -contact'>
				<div
					className='post-thumbnail'
					style={{
						backgroundImage    : `url(${site.siteMetadata.thank_you_bg})`,
						marginBottom       : 0,
						height             : "538px",
						backgroundPosition : "top",
					}}
				>
					<h1 className='post-title'>Thank You</h1>
					<p>for taking the time to reachout!</p>
				</div>
				<div
					style={{
						fontSize   : "1.2rem",
						lineHeight : "1.5",
					}}
				>
					{/* <h3 style={{ textAlign: "center" }}>JIM</h3> */}
					<article style={{ display: "flex", justifyContent: "center" }}>
						<img src={`${site.siteMetadata.thank_you_avatar}`} height={150} width={150} />
					</article>
					<article>
						<p>
							I am very happy to hear from you and I would do my best to revert as soon as possible.
							Remain blessed.
						</p>
						<p>I greatly implore you to keep in touch with me on other platforms below:</p>
					</article>
				</div>
			</div>
		</Layout>
	);
};
export default ThankYou;
export const pageQuery = graphql`
	query ThankYouPageQuery {
		site {
			siteMetadata {
				avatar
				thank_you_avatar
				thank_you_bg
				title
				description
			}
		}
	}
`;
