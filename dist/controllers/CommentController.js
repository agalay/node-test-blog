"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Comment = require("../models/Comment");

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommentController = function () {
  function CommentController() {
    _classCallCheck(this, CommentController);
  }

  _createClass(CommentController, [{
    key: "index",
    value: function index(req, res) {
      _Comment2.default.find({ post: req.params.id }).then(function (comments) {
        return comments;
      }, function (err) {
        return res.json(err);
      });
    }
  }, {
    key: "create",
    value: function create(req, res) {
      var data = req.body;

      var comment = new _Comment2.default({
        title: data.title,
        text: data.text,
        author: data.author,
        post: req.params.id
      });

      comment.save().then(function () {
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

  }, {
    key: "delete",
    value: function _delete(req, res) {
      _Comment2.default.remove({
        _id: req.params.id
      }).then(function (post) {
        return res.json({ status: "Deleted" });
      }, function (err) {
        return res.json(err);
      });
    }
  }]);

  return CommentController;
}();

exports.default = CommentController;