/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {

    const blogPosts = await getContentfulBlogPostObjects(graphql, reporter);

    blogPosts.forEach(({node: {slug}}) => {
        actions.createPage({
            path: `/blog/${slug}/`,
            component: require.resolve('./src/templates/post.tsx'),
            context: {slug}
        });
    });

};

getContentfulBlogPostObjects = async (graphql, reporter) => {

    const blogPostResult = await graphql(`
        {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    if (blogPostResult.error) {
        reporter.panic("There was a problem loading your photo series.");
    }

    return blogPostResult.data.allContentfulBlogPost.edges;

}