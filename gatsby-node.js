/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {

    const series = await getPhotoSeriesObjects(graphql, reporter);

    series.forEach(({node: {slug}}) => {
        actions.createPage({
            path: `/photography/${slug}/`,
            component: require.resolve('./src/templates/series.js'),
            context: {slug}
        });
    });

    const blogPosts = await getContentfulBlogPostObjects(graphql, reporter);

    blogPosts.forEach(({node: {slug}}) => {
        actions.createPage({
            path: `/blog/${slug}/`,
            component: require.resolve('./src/templates/post.js'),
            context: {slug}
        });
    });

};

getPhotoSeriesObjects = async (graphql, reporter) => {

    const photoSeriesResult = await graphql(`
        {
            allPhotographySeriesJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    if (photoSeriesResult.error) {
        reporter.panic("There was a problem loading your photo series.");
    }

    return photoSeriesResult.data.allPhotographySeriesJson.edges;

}

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