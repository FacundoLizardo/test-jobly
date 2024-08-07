import { Document, model, Schema } from "mongoose";
import * as crypto from "crypto";
import { z } from "zod";

export const favoritesSchemaParser = z.object({
  name: z.string().optional(),
  author: z.string(),
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  urlToImage: z.string().url(),
  publishedAt: z.string().transform((val) => new Date(val)),
  content: z.string(),
  source: z.object({
    id: z.string().nullable(),
    name: z.string()
  }).nullable()
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
  source:{
    id:string | null;
    name: string;
  }
}

const favoriteSchema = new Schema<IFavorites>(
  {
    id: {
      type: String,
      default: crypto.randomUUID,
      unique: true,
    },
    name: { type: String, required: false },
    author: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String, required: true },
    publishedAt: { type: String, required: true },
    content: { type: String, required: true },
    source: {
      id: { type: String, default: null },
      name: { type: String, required: true },
    }
  },
  {
    timestamps: true,
  },
);

const Favorite = model("Favorite", favoriteSchema);

export default Favorite;
