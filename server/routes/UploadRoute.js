import express from "express";
const router = express.Router();
import multer from "multer";
import UserModel from "../models/userModel.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });

router.post("/", upload.single("file"), async (req, res) => {
  const { id, name } = req.body;


    const user = await UserModel.findByIdAndUpdate(id, {
      $set: {
        profilePicture: name,
      },
    });

  

  let result = await UserModel.findById(id);
  console.log(result, "result");

  try {
    return res.status(200).json("File uploaded successfully");
  } catch (error) {
    console.error(error);
  }
});

export default router;
