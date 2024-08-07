import {Schema, Document, model} from 'mongoose';
import * as crypto from "crypto";

interface IFavorites extends Document{
  id: string;
  name: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
  timestamps:Date;
}

const favoriteSchema= new Schema<IFavorites>({
  id: {
    type: String,
    default: crypto.randomUUID,
    unique: true,
    required: true
  },
  name: {type: String, required: true},
  author: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  url: {type: String, required: true},
  urlToImage: {type: String, required: true},
  publishedAt: {type: Date, required: true},
  content: {type: String, required: true}
}, {
  timestamps: true
});

const Favorite = model('Favorite', favoriteSchema);

export default Favorite;
