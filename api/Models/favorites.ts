import {Document, model, Schema} from 'mongoose';
import * as crypto from "crypto";
import {z} from "zod";

export const favoritesSchemaParser = z.object({
  name: z.string(),
  author: z.string(),
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  urlToImage: z.string().url(),
  publishedAt: z.string().transform((val) => new Date(val)),
  content: z.string()
});

export interface IFavorites extends Document {
  id: string;
  name: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

const favoriteSchema = new Schema<IFavorites>({
  id: {
    type: String,
    default: crypto.randomUUID,
    unique: true,
  },
  name: {type: String, required: true},
  author: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  url: {type: String, required: true},
  urlToImage: {type: String, required: true},
  publishedAt: {type: String, required: true},
  content: {type: String, required: true}
}, {
  timestamps: true
});

const Favorite = model('Favorite', favoriteSchema);

export default Favorite;
