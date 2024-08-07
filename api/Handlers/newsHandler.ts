import {getNewsController} from '../Controllers/news/getNewsController'
import {Request, Response} from 'express';

const getNews = async (req: Request, res: Response) => {

  const text = req.query.text as string;

  try {
    const news = await getNewsController(text);
    news
      ? res.status(200).json({success: true, news})
      : res.status(400).json({success: false, message: "Error retrieving news"});
  } catch (error: any) {
    res.status(400).json({error: error.message});
  }
};

export {getNews}
