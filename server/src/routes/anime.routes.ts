import express, { Router, Request, Response } from 'express'
import AnimeController from '../controllers/anime/anime.controllers'
const anime_routes: Router = express.Router()
const animeController: AnimeController = new AnimeController()

anime_routes.get('/popular', (req: Request, res: Response) => {
  const { page } = req.query.page ? req.query : { page: 1 }
  animeController.get_anime(Number(page), req, res)
})

anime_routes.get('/search/:search', (req: Request, res: Response) => {
  const { search } = req.params
  console.log(search)
  animeController.get_specific(search, req, res)
})

export default anime_routes
