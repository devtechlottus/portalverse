const fs = require("fs");
const { getStaticContents } = require("./getStaticContents")

async function fetchStaticContents() {
  const staticContents = await getStaticContents();
  staticContents?.forEach((staticContent) => {
    populateStaticContent(staticContent);
  });
};

async function populateStaticContent(staticContent) {
  const {
    format,
    path,
    content
  } = staticContent?.attributes;

  if (!!content) {
    const fileContent = format === "json" ? 
      JSON.stringify(JSON.parse(content), null, 2) :
      content;
    
    fs?.writeFile("./"+path, fileContent,
    "utf-8", 
    (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};

fetchStaticContents();