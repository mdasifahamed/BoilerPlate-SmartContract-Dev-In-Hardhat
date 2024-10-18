require("dotenv").configDotenv();
const { PinataSDK } = require("pinata-web3");
const fs = require("fs");
const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: process.env.PINATA_GATEWAY_URL,
});

/**
 * @param {File} file
 * @returns {Image CID <string>}
 */

async function uploadImageToPinata(file) {
  try {
    console.log(">>>>>>>> Uploading Image To Pinata <<<<<<<<<");
    const uploaded_file = await pinata.upload.file(file);
    console.log(`Image CID In Pinata : ${uploaded_file.IpfsHash}`);
    console.log(">>>>>>>> Image Uploaded Done <<<<<<<<<");
    return uploaded_file.IpfsHash;
  } catch (error) {
    console.log("File  Upload Failed ");
    console.log(error);
  }
}

/**
 * @param {File<Json>} metadata_file
 * @returns {Uri <String>}
 */
async function uploadToPinata(metadata_file) {
  try {
    console.log(">>>>>>>>>> Uploading Metadata Json File <<<<<<<<<<");
    const uploaded_metatadata = await pinata.upload.file(metadata_file);
    console.log(`Metadata JSON File CID: ${uploaded_metatadata.IpfsHash}`);
    console.log(
      `It Accessibale Here : https://gateway.pinata.cloud/ipfs/${uploaded_metatadata.IpfsHash}`
    );
    console.log("Successfully Uploaded");
  } catch (error) {
    console.log("Metadata  Upload Failed ");
    console.log(error);
  }
}

/**
 * @param {string} name
 * @param {string} description
 * @param {Attribute[]} attributes // [{trait_type:"trait_type2",value:"value2"},{trait_type:"trait_type1",value:"value2"}]
 * @param {string} file_cid
 * @returns {NFTMetadata <JSON FILE>}
 */

function genearteNftMetadata(name, description, attributes, file_cid) {
  return new File(
    [
      JSON.stringify({
        name: name,
        description: description,
        attributes: attributes,
        file: `https://gateway.pinata.cloud/ipfs/${file_cid}`,
      }),
    ],
    `${name}.json`,
    { type: "application/json" }
  );
}

/** crearteImageFile
 * @param {string} filePath
 * @param {string} file_name
 * @param {string} mimeType
 * @returns {File}
 */

function createImageFile(file_path, file_name, mimeType) {
  const blob = new Blob([fs.readFileSync(file_path)]);
  return new File([blob], file_name, {
    type: mimeType,
  });
}

module.exports = {
  createImageFile,
  genearteNftMetadata,
  uploadImageToPinata,
  uploadToPinata,
};
