import axios from 'axios'
import { Request, Response } from 'express'

class AnimeController {
  /**
   * Get a specific anime based on it's title
   * @param req
   * @param res
   */
  public async get_specific(
    search: string,
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      if (search) {
        const result = await axios.get(
          `https://api.consumet.org/anime/gogoanime/${search}`
        )
        res.status(200).json(result.data)
      } else {
        throw new Error('cannot find that anime')
      }
    } catch (err) {
      res.once('error', () => {
        res.status(401)
      })
      res.json({
        err: 'Cannot find that anime at this time',
      })
      console.log(err)
    }
  }

  /**
   * Get the top airing anime episodes from a remote server
   * @param page
   * @param req
   * @param res
   */
  public async get_anime(page = 1, req: Request, res: Response): Promise<void> {
    try {
      const top_airing_anime = await axios.get(
        `https://api.consumet.org/anime/gogoanime/top-airing?page=${page}`
      )
      res.status(200).json({
        top_airing: top_airing_anime.data,
      })
    } catch (err) {
      res.status(404)
      res.json({
        err: err,
      })
    }
  }
}

export default AnimeController
