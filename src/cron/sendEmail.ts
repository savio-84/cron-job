import cron from 'node-cron';

function sendEmail() {
  console.log('Email sent');
}

const sendEmailForEachSecond = cron.schedule('*/1 * * * * *', sendEmail, { scheduled: false }); // scheduled: false significa que quem tem o poder de chamar o cron e o manager

export { sendEmailForEachSecond };