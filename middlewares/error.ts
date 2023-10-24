import { ErrorRequestHandler, NextFunction, Request, Response } from "express"

export function errorLoggingMiddleware(
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("👀 ERRROOOR!!")
  res.json({ msg: "ERROR!!!!" })
}
