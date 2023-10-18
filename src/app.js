import express from "express";
import emplooyesRoutes from './routes/emplooyes.routes.js';
import indexRoutes from './routes/index.routes.js';


const app = express()

app.use(express.json());

app.use(indexRoutes);

app.use('/api', emplooyesRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: 'endopoint not found' });
})

export default app;

