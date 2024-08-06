import mongoose, { Schema } from 'mongoose';
import {uuidV4} from "mongodb/src/utils";

const articleSchema= new mongoose.Schema({
  id: {
    type: String,
    default: uuidV4() as string,
    unique: true,
    required: true
  },
  name: { type: String, required: true },
  author: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  urlToImage: { type: String, required: true },
  publishedAt: { type: Date, required: true },
  content: { type: String, required: true }
}, {
  timestamps: true
});

const Article = mongoose.model('Article', articleSchema);

export default Article;
