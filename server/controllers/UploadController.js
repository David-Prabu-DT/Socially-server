import UserModel from "../models/userModel";
      
export const uploadPicture = (file) => async (req, res) => {
  console.log(req, res);
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await UserModel.findById(postId);

    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post updated!");
    } else {
      res.status(403).json("Authentication failed");
    }
  } catch (error) {}

//   const user = await UserModel.findByIdAndUpdate(id, req.body, {
//     new: true,
//   });

//   try {
//     return res.status(200).json("File uploaded successfully");
//   } catch (error) {
//     console.error(error);
//   }
};
