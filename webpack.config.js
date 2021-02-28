const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  // Update the entry point
  entry: "./public/index.js",
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  mode: "production",
  plugins: [new WebpackPwaManifest({
    filename: "manifest.json",
    fingerprints: false,
    inject: false,
    name: "Finance Tracker",
    short_name: "Finance Tracker",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: path.resolve(__dirname,'./public/icons/icon-512x512.png'),
        sizes: [72, 96, 128, 144, 192, 256, 384, 512]
      }
    ]
  })]
};

module.exports = config;
