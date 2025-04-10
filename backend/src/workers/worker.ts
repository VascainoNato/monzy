
import  Worker from 'bull';
import processCsv from 'src/modules/upload/uploads.processor';

const queueName = 'csvQueue'; 
const worker = new Worker(queueName);

worker.process(processCsv).catch(error => {
  console.error('Error processing CSV:', error);
});

// Eventos para monitorar o estado do job
worker.on('completed', (job) => {
  console.log(`Job ${job.id} completed successfully!`);
});

worker.on('failed', (job, err) => {
  console.error(`Job ${job.id} failed with error: ${err.message}`);
});

// Opcional: evento para lidar com erros inesperados
worker.on('error', (err) => {
  console.error('Worker encountered an error:', err);
});

console.log(`Worker is running and listening for jobs on the ${queueName} queue.`);