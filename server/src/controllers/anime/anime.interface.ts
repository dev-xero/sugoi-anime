import { Request, Response } from 'express'

interface AnimeInterface {
  get_specific(search: string, req: Request, res: Response): Promise<void>
  get_anime_info(title: string, req: Request, res: Response): Promise<void>
	get_anime_top(page: number, req: Request, res: Response): Promise<void>
	get_streaming_link(title: string, req: Request, res: Response): Promise<void>
}

export default AnimeInterface
