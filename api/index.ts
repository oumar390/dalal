import "dotenv/config";
import { createExpressApp } from "../server/_core/app.js";

const app = createExpressApp();

export default function handler(req: any, res: any) {
  return app(req, res);
}

