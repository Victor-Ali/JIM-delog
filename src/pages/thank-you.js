import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const ThankYou = ({ data: { site } }) => {
	console.log("site", site);
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
						backgroundImage    : `url(/assets/thank-you)`,
						marginBottom       : 0,
						height             : "538px",
						backgroundPosition : "top",
					}}
				>
					<h1 className='post-title'>About JIM</h1>
					<p>Hi I am Victor Ali the founder of Jesus is our message &rarr;</p>
				</div>
				<div
					style={{
						fontSize   : "1.2rem",
						lineHeight : "1.5",
					}}
				>
					<h3 style={{ textAlign: "center" }}>JIM</h3>

					<article>
						<h3>Thank</h3>
						<h1>You</h1>
						<p>
							I thank you for taking the time to reachout. You email is important to me and I would make
							sure I revert at the as soon as possible. Stay blessed.
						</p>
					</article>

					<Link to='/contact'>
						<div style={{ display: "flex", justifyContent: "flex-start" }}>
							<input
								type='submit'
								className='button -primary'
								value='Prayer & Counselling'
								style={{ marginRight: 0, cursor: "pointer" }}
							/>
						</div>
					</Link>
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
				title
				description
			}
		}
	}
`;
