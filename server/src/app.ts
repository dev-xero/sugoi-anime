import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import 'colors'
import anime_routes from './routes/anime.routes'

class App {
  private express: Application
  private port: number
  constructor(port: number) {
    this.express = express()
    this.port = port
    this.initMiddleware()
    this.initRoutes()
  }
  private initMiddleware(): void {
    this.express.use(helmet())
    this.express.use(cors())
    this.express.use(morgan('dev'))
    this.express.use(compression())
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
  }
  private initRoutes(): void {
    this.express.use('/api/v1', anime_routes)
  }
  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(
        `Server instance is running on http://localhost:${this.port}`.cyan
          .underline
      )
    })
    this.express.get('/', (req: Request, res: Response) => {
      res.status(200).json({
        msg: 'Welcome to Sugoi Anime API v1',
      })
    })
    this.express.get('/api/v:n', (req: Request, res: Response) => {
      const { n } = req.params
      if (n !== '1') {
        res.status(200).json({
          msg: `API v${n} is not yet available`,
        })
        res.end()
      }
      res.status(200).json({
        msg: `Sugoi Anime API v${n}`,
      })
    })
    this.express.use((req: Request, res: Response) => {
      res.status(404).json({
        err: "URL doesn't exist on the server",
      })
    })
  }
}

export default App
