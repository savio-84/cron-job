import express from 'express';
import cron from 'node-cron';
import { CronManager } from './cron-manager';
const cronManager = new CronManager();

const app = express();

app.listen(3333, () => {
  console.log('Server is running on port 3333');

  // cron.schedule('*/1 * * * * *', () => {
  //   console.log('The cron is running');
  // })
  cronManager.run();
})


// usar o site cron maker para pesquisar o regex que define quando o cron deve ser executado.