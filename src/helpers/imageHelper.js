const merge = require("merge-img");
let { join } = require("path");
const { FILE_NAME, SAVE_MSG, NOT_SAVE_MSG } = require("../const");

const imgMergeAndSave = async (img01, img02) => {
  try {
    //Set Download Location 
    const fileOut = join(process.cwd(), `/${FILE_NAME}`);
    //merge images
    await merge([img01, img02]).then((img) => {
      // Save image as file
      img.write(fileOut, () => {
        console.log(SAVE_MSG);
        console.log("Location:", fileOut);
      });
    });
  } catch (error) {
    //merge not work for gif files
    console.error(NOT_SAVE_MSG);
    throw error;
  }
};

module.exports = {
  imgMergeAndSave,
};
