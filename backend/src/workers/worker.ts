import { Worker } from 'bullmq';
import processCsv from '../modules/upload/uploads.processor';

const queueName = 'uploads';

const worker = new Worker(queueName, processCsv, {
  connection: {
    host: 'localhost',
    port: 6379,
  },
});

worker.on('completed', (job) => {
  console.log(`✅ Job ${job.id} completed successfully!`);
});

worker.on('failed', (job, err) => {
  if (job) {
    console.error(`❌ Job ${job.id} failed with error: ${err?.message}`);
  } else {
    console.error('❌ Unknown job failed:', err);
  }
});

worker.on('error', (err) => {
  console.error('Worker encountered an error:', err);
});

console.log(`👷 Worker is running and listening on queue: "${queueName}"`);
