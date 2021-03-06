import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";

const IndexPage = ({ data: { site, allMarkdownRemark: { edges } }, pageContext }) => {
	const { currentPage, numPages } = pageContext;
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
	const nextPage = (currentPage + 1).toString();

	const Posts = edges
		.filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
		.map((edge) => <PostLink key={edge.node.id} post={edge.node} />);
	return (
		<Layout>
			<Helmet>
				<title>{site.siteMetadata.title}</title>
				<meta name='description' content={site.siteMetadata.description} />
			</Helmet>
			<HeroHeader />
			<h2>Message List &darr;</h2>
			<div className='grids'>{Posts}</div>
			<div style={{ marginTop: "45px" }}>
				<ul
					style={{
						display    : "flex",
						flexWrap   : "wrap",
						alignItems : "center",
						listStyle  : "none",
						padding    : 0,
					}}
				>
					{!isFirst && (
						<Link style={{ textDecoration: "none" }} to={prevPage} rel='prev'>
							← Previous Page
						</Link>
					)}
					{Array.from({ length: numPages }, (_, i) => (
						<li
							key={`pagination-number${i + 1}`}
							style={{
								margin  : 0,
								padding : "11px",
							}}
						>
							<Link
								to={`/${i === 0 ? "" : i + 1}`}
								style={{
									textDecoration : "none",
									padding        : "5px 10px",
									color          : i + 1 === currentPage ? "#ffffff" : "",
									background     : i + 1 === currentPage ? "#000000" : "",
								}}
							>
								{i + 1}
							</Link>
						</li>
					))}
					{!isLast && (
						<Link style={{ textDecoration: "none" }} to={nextPage} rel='next'>
							Next Page →
						</Link>
					)}
				</ul>
			</div>
		</Layout>
	);
};
export default IndexPage;

export const pageQuery = graphql`
	query indexPageQuery($skip: Int!, $limit: Int!) {
		site {
			siteMetadata {
				title
				description
			}
		}
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: $limit, skip: $skip) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
						thumbnail
						category
						tags
					}
				}
			}
		}
	}
`;
