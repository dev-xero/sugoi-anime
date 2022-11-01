import axios from 'axios'
import { Request, Response } from 'express'

class AnimeController {
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
