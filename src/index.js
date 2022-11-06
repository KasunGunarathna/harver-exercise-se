const { processImage } = require("./services/imageService");
let argv = require("minimist")(process.argv.slice(2));

const main = async (argv) => {
  try {
    await processImage(argv);
  } catch (err) {
    // Handle Error Here
    console.error(err.message);
  }
};

main(argv);
