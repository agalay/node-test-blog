import CommentModel from "../models/Comment";

class CommentController {
  index(req, res) {
    CommentModel.find({ post: req.params.id }).then(
      comments => comments,
      err => res.json(err)
    );
  }

  create(req, res) {
    const data = req.body;

    const comment = new CommentModel({
      title: data.title,
      text: data.text,
      author: data.author,
      post: req.params.id
    });

    comment.save().then(() => {
      res.json({ status: "ok" });
    });
  }

  // update(req, res) {
  //   PostModel.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
  //     if (err) {
  //       res.send(err);
  //     }

  //     res.json({ status: "updated" });
  //   });
  // }

  delete(req, res) {
    CommentModel.remove({
      _id: req.params.id
    }).then(post => res.json({ status: "Deleted" }), err => res.json(err));
  }
}

export default CommentController;
