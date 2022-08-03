import express from 'express';
import { categoreisRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoreisRoutes)

app.listen(3333, () => console.log('Server started on port 3333'));
