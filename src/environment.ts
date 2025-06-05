import "dotenv/config";

export default {
  serverURL: process.env.SERVER_URL,
  password: process.env.PASSWORD,
  encryptionPassword: process.env.ENCRYPTION_PASSWORD || "",
  syncId: process.env.SYNC_ID,
  schedule: process.env.SCHEDULE || "0 0 * * *",
  runImmediately: process.env.RUN_IMMEDIATELY === "true"
};
