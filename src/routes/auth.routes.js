import express from "express"
import { body } from "express-validator"
import { validate } from "#middleware/validation.middleware.js"
import * as authController from "#controllers/auth.controller.js"

const router = express.Router()


router.post(
  "/register",
  [
    body("userId").notEmpty().withMessage("User ID is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    validate,
  ],
  authController.register,
)

router.post("/logout", authController.logout)

export default router
