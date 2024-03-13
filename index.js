import express from 'express';
import AppRoutes from './src/routes/index.js'

const PORT = 8000;
const app = express();

 app.use(express.json());
 app.use('/' , AppRoutes )
 app.listen(PORT,()=>console.log(`App is listeing ${PORT}`));