import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    title: String,
    text: String,
    author: String,
    post: String
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
