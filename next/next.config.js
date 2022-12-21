// const path = require("path");
const withImages = require("next-images");
module.exports = withImages();

module.exports = withImages({
  images: {
    loader: "imgix",
    path: "",
  },
});
