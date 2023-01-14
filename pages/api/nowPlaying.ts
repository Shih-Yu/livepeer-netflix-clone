// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  response: {};
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API}&language=en-US`
  );
  // console.log(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API}&language=en-US`);

  const test = await response.json();
  return res.status(200).json(test);
}
