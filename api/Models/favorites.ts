import { Document, model, Schema } from "mongoose";
import { z } from "zod";

export const favoritesSchemaParser = z.object({
  name: z.string().optional(),
  author: z.string().optional(),
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  urlToImage: z.string().url().optional(),
  publishedAt: z.string().transform((val) => new Date(val)),
  content: z.string().optional(),
  source: z.object({
    id: z.string().nullable(),
    name: z.string().optional()
  }).nullable()
});

export interface IFavorites extends Document {
  name: string;
  author: string | null;
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
    name: { type: String, required: false },
    author: { type: String, required: false },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String, required: false },
    publishedAt: { type: String, required: false },
    content: { type: String, required: false },
    source: {
      id: { type: String, default: null, required:false },
      name: { type: String, required: false },
    }
  },
  {
    timestamps: true,
  },
);

const Favorite = model("Favorite", favoriteSchema);

export default Favorite;
