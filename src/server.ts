import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import 'dotenv/config';
import AppDataSource from '@configs/dataSource';
// import routes from '@routes/index';

const app = express();
const httpServer = createServer(app);

AppDataSource.initialize()
  .then(async () => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());

    // app.use('/api', routes);

    httpServer
      .listen(process.env.PORT, () => {
        console.log(
          `${process.env.NODE_ENV} - API Server Start At Port ${process.env.PORT}`
        );
      })
      .on('error', (err) => {
        console.log(err);
        process.exit(1);
      });
  })
  .catch((err) => console.log(err));
