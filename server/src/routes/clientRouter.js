import express from "express"
import getClientIndexPath from "../config/getClientIndexPath.js"

const router = new express.Router()

const clientRoutes = [
  "/",
  "/user-sessions/new",
  "/users/new",
  "/profile",
  "/courses",
  "/courses/:id",
  "/scorecards",
  "/scorecards/:id",
  '/weather'
]

router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath())
})

export default router
