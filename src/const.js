require("dotenv").config();

const CATAAS_BASE_URL = process.env.CATAAS_BASE_URL;
const FILE_NAME = process.env.FILE_NAME;
const SAVE_MSG = "The file was saved!";
const NOT_SAVE_MSG = "The file was not saved! | Unsupported MIME type";

module.exports = {
  CATAAS_BASE_URL,
  FILE_NAME,
  SAVE_MSG,
  NOT_SAVE_MSG,
};
