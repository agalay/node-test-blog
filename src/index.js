import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import PostController from "./controllers/PostController";
import CommentController from "./controllers/CommentController";
const Post = new PostController();
const Comment = new CommentController();

const app = express();

mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/posts", Post.index);
app.post("/posts", Post.create);
app.get("/posts/:id", Post.read);
app.delete("/posts/:id", Post.delete);
app.patch("/posts/:id", Post.update);

app.get("/comment/:id", Comment.index);
app.delete("/comment/:id", Comment.delete);
app.post("/comment/:id", Comment.create);

app.listen(3333, () => {
  console.log("SERVER STARTED!");
});
