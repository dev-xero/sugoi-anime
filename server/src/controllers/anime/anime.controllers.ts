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
   * Get info on a specific anime title
   * @param title
   * @param req
   * @param res
   */
  public async get_anime_info(
    title: string,
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      if (title) {
        const results = await axios.get(
          `https://api.consumet.org/anime/gogoanime/info/${title}`
        )
        res.status(200).json(results.data)
      } else {
        throw new Error('Cannot find that anime')
      }
    } catch (err) {
      res.status(404).json({
        err: 'Cannot find that anime',
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

  public async get_streaming_link(title: string, req: Request, res: Response): Promise<void> {
    try {
      if (title) {
        const results = await axios.get(
          `https://api.consumet.org/anime/gogoanime/watch/${title}`
        )
        res.status(200).json(
          results.data
        )
      } else {
        throw new Error('Cannot find that anime')
      }
    } catch (err) {
      res.status(401).json({
        err: err
      })
      console.log(err)
    }
  }
}

export default AnimeController
