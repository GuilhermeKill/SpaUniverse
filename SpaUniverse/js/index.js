import { Router } from "./router.js"
const router = new Router()
router.add("/", "/html/home.html")
router.add("/universe", "/html/universe.html")
router.add("/exploration", "/html/exploration.html")
router.add(404, "/html/error.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()