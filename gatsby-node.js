/* exports.createPages = async ({page, actions }) => {
  const { createPage } = actions

   createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
 */

exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions;
	// page.matchPath is a special key that's used for matching pages
	// only on the client.
	if (page.path === '/videos/') {
        page.matchPath = '/videos/*';
        createPage(page);
    }
  };