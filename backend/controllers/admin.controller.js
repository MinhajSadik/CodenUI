import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


class AdminController {
    async admin(req, res, next) {
        res.sendFile(path.join(__dirname, "../admin/build/index.html"))
    }
}


export default new AdminController()