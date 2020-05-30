const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	const blogPostTemplate = path.resolve(`src/templates/blogList.js`);

	const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	const posts = result.data.allMarkdownRemark.edges;
	const postsPerPage = 6;
	const numPages = Math.ceil(posts.length / postsPerPage);
	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path      : i === 0 ? `/` : `/${i + 1}`,
			component : blogPostTemplate,
			context   : {
				limit       : postsPerPage,
				skip        : i * postsPerPage,
				numPages,
				currentPage : i + 1,
			},
		});
	});

	// result.data.allMarkdownRemark.edges.forEach(({ node }) => {
	// 	createPage({
	// 		path      : node.frontmatter.path,
	// 		component : blogPostTemplate,
	// 		context   : {}, // additional data can be passed via context
	// 	});
	// });
};
