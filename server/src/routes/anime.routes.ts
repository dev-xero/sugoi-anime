import express, { Router, Request, Response } from 'express'
import AnimeController from '../controllers/anime/anime.controllers'
const anime_routes: Router = express.Router()
const animeController: AnimeController = new AnimeController()

// Route for getting top anime
anime_routes.get('/popular', (req: Request, res: Response) => {
  const { page } = req.query.page ? req.query : { page: 1 }
  animeController.get_anime_top(Number(page), req, res)
})

// Search for a specific anime title and related content
anime_routes.get('/search/:search', (req: Request, res: Response) => {
  const { search } = req.params
  animeController.get_specific(search, req, res)
})

// Get info on a specific title
anime_routes.get('/anime/:title', (req: Request, res: Response) => {
  const { title } = req.params
  animeController.get_anime_info(title, req, res)
})

// Get streaming links for anime
anime_routes.get('/watch/:title', (req: Request, res: Response) => {
  const { title } = req.params
  animeController.get_streaming_link(title, req, res)
})

export default anime_routes
