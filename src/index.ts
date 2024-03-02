import express from 'express';
import cors from 'cors';
import { routes } from './routes'

const app = express();
const port = 3000;

app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log(`Servidor rodando em http://localhost:${port}`));

export default app;