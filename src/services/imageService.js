const axios = require("axios");
const { CATAAS_BASE_URL } = require("../const");
const { imgMergeAndSave } = require("../helpers/imageHelper");

const processImage = async (argv) => {
  try {
    
    let {
      greeting = "Hello",
      who = "You",
      width = 400,
      height = 500,
      color = "Pink",
      size = 100,
    } = argv;

    const image01Buff = await fetchImage(greeting, width, height, color, size);
    const image02Buff = await fetchImage(who, width, height, color, size);
    await imgMergeAndSave(image01Buff, image02Buff);
    return true
  } catch (error) {
    console.error(error);
    return false
  }
};

const fetchImage = async (says, width, height, color, size) => {
  const URL = `${CATAAS_BASE_URL}${says}?width=${width}&height=${height}&color${color}&s=${size}`;
  const res = await axios.get(URL, {
    responseType: "arraybuffer",
  });
  return res.data;
};

module.exports = {
  processImage,
};
