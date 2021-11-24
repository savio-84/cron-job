import { sendEmailForEachSecond } from './cron/sendEmail';

class CronManager {
  jobs: any[];

  constructor() {
    this.jobs = [sendEmailForEachSecond];
  }

  run() {
    this.jobs.forEach(job => job.start());
  }
}

export { CronManager };