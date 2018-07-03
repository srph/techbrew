/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
 
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve) => {
    // Set layout of contacts page to plain
    if (page.path.match(/^\/contact/)) {
      page.layout = 'plain';
      createPage(page);
    }

    resolve();
  });
};