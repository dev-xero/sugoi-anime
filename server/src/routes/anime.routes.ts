import express, { Router, Request, Response } from 'express'
import AnimeController from '../controllers/anime/anime.controllers'
const anime_routes: Router = express.Router()
const path = '/anime'
const animeController: AnimeController = new AnimeController()

anime_routes.get(path, (req: Request, res: Response) => {
  let page = null
  if (Object.keys(req.query).length !== 0) {
		page = req.query.page
  } else {
    page = 1
  }
  animeController.get_anime(Number(page), req, res)
})

export default anime_routes
