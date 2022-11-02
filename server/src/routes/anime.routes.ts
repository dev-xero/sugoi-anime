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
  animeController.get_specific(search, req, res)
})

anime_routes.get('/anime/:title', (req: Request, res: Response) => {
  const { title } = req.params
  animeController.get_anime_info(title, req, res)
})

anime_routes.get('/watch/:title', (req: Request, res: Response) => {
  const { title } = req.params
  animeController.get_streaming_link(title, req, res)
})

export default anime_routes
