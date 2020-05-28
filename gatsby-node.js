/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {

    const result = await graphql(`
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

    if (result.error) {
        reporter.panic("There was a problem loading your photo series.");
    }

    const series = result.data.allPhotographySeriesJson.edges;

    series.forEach(({node: {slug}}) => {
        actions.createPage({
            path: `/${slug}/`,
            component: require.resolve('./src/templates/series.js'),
            context: {slug}
        });
    });

};