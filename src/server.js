import express from 'express';
import 'dotenv/config'
import cors from 'cors';

const app = express();
const { log, error } = console;

const port = process.env.PORT || 3000;

const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

import colorRoutes from "./routes/colors.route";

router.use("/colors", colorRoutes);

app.use("/api", router);

app.listen(port, () => log('server is running'));
export default app;