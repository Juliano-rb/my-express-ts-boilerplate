import express from 'express'
// import cors from 'cors'
import { routes } from './routes'

class App {
  express;
  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
    // this.express.use(cors())
  }

  routes () {
    this.express.use(routes)
  }
}

const app = new App().express

export { app }
