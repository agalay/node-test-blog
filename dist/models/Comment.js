"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentSchema = new _mongoose.Schema({
  title: String,
  text: String,
  author: String,
  post: String
}, {
  timestamps: true
});

var Comment = _mongoose2.default.model("Comment", CommentSchema);

exports.default = Comment;