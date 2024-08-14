import express from "express";
import { createShortURL, getOrignalURL } from "../controllers/urlController.js";
const router = express.Router();

router.post('/',createShortURL)
router.get('/:shortId',getOrignalURL)

export default router