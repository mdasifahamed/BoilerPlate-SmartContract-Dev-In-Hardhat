const file_ops = require("./utils");
const path = require("path");
const file_path = path.join(__dirname, "..", "..", "..", "..", "earbud.jpg");
const file_name = "Gold_Earbud.jpg";
const file_mime_type = "image/jpg";

async function upload(
  file_path_to_upload,
  file_name_to_upload,
  file_mime_type_to_upload
) {
  const file_to_upload = file_ops.createImageFile(
    file_path_to_upload,
    file_name_to_upload,
    file_mime_type_to_upload
  );
  const file_cid = await file_ops.uploadImageToPinata(file_to_upload);
  const nft_metadata = file_ops.genearteNftMetadata(
    "Ancient Gold Eardbuds",
    "Most Precious Gold Nft Earbuds",
    [
      { trait_type: "Gold Colour", value: "Antique" },
      { trait_type: "Gold Coated", value: "Precious" },
    ],
    file_cid
  );
  await file_ops.uploadToPinata(nft_metadata);
}

upload(file_path, file_name, file_mime_type);
