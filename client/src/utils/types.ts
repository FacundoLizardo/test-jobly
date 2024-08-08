export interface INews {
  id: string | null;
  name: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: {
    id: string | null;
    name: string;
  };
}

export interface IFavorite extends INews {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IResponse<T> {
  success: boolean;
  data?: T;
  error?: any;
  message?: string;
}

export interface INewsData {
  articles: INews[];
  status: string;
  totalResults: number;
  success: string;
}
