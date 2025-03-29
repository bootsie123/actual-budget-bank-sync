import * as api from "@actual-app/api";
import { CronCallback, CronJob, CronOnCompleteCallback } from "cron";

import environment from "./environment";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const genTimestamp = () => {
  return `[${new Date().toISOString()}]:`;
};

const sync = async (callback: CronOnCompleteCallback) => {
  console.log(`${genTimestamp()} Starting sync`);

  console.log(`${genTimestamp()} Connecting to server ${environment.serverURL}`);

  await api.init({
    serverURL: environment.serverURL,
    password: environment.password
  });

  await api.downloadBudget(environment.syncId);
  await api.runBankSync();
  await api.shutdown();

  callback();
};

const job = CronJob.from({
  cronTime: environment.schedule,
  runOnInit: environment.runImmediately,
  start: true,
  onTick: sync,
  onComplete: () => {
    console.log(
      `${genTimestamp()} Sync complete! Scheduling next sync at ${job.nextDate()}`
    );
  },
  errorHandler: err => {
    console.error(`${genTimestamp()} Error running sync task:`, err);
  }
});

console.log(`First job scheduled for ${job.nextDate()}`);
