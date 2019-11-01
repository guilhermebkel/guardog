import express from "express"
import cors from "cors"
import helmet from "helmet"

const Middlewares = [express.json(), cors(), helmet()]

export default Middlewares
