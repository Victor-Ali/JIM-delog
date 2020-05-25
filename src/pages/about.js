import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = ({ data: { site } }) => {
	return (
		<Layout>
			<Helmet>
				<title>About — {site.siteMetadata.title}</title>
				<meta name='description' content={"About page of " + site.siteMetadata.description} />
			</Helmet>
			<div className='two-grids -contact'>
				<div
					className='post-thumbnail'
					style={{
						backgroundImage : `url('/assets/Bro-Victor-Photo.jpg')`,
						marginBottom    : 0,
						height          : "538px",
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
					<p>
						<strong>Jesusisourmessage.com (JIM)</strong> is a website that is dedicated passionately to care
						for your eternal destiney and your spiritual warefare.
					</p>
					<p>
						Here you have unlimited access to life transforming teaching of the world of God. This site will
						prepare you for glory. It is now my greatest delight to invite you to commit the rest of your
						life to the Great Saviour Jesus Christ, who diet for or sins, to accept Him as your personal
						Lord and Saviour.
					</p>
					<p>
						As you continue to explore and enjoy the riches of grace throught my teachings. May the Lord
						continue to richly bless you Amen!
					</p>

					<p>
						YOURS IN CHRIST <br />
						Bro Ali Victor
					</p>

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
export default AboutPage;
export const pageQuery = graphql`
	query AboutPageQuery {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;
