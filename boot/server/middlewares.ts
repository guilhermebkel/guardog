import express from "express"
import cors from "cors"
import helmet from "helmet"

const middlewares = [express.json(), cors(), helmet()]

export default middlewares
