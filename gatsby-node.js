exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
   
    if (page.path.match(/product/)) {
      
      page.matchPath = "/product/*"
  

      createPage(page)
    }
  }


  /*const arr  = [
    {name: "Fruit" , desc: ""}
]

exports.createPages = async function ({ actions}) {

    actions.createPage({
        path: "fruits",
        component: require.resolve(`./src/templates/fruits.tsx`),
        context: { 
            // Data passed to context is available
            // in pageContext props of the template component
            name: "Mango",
            desc : "This is the Chonse"
         },
    });
    console.log("End of Gatsby Node File");
}*/