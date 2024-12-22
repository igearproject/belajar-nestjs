import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cluster from 'cluster';
import * as os from 'node:os';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // multitreading
  app.enableShutdownHooks();
  // multitreading
  await app.listen(process.env.PORT ?? 3000);
}
const clusterA = cluster as any;
if (clusterA.isPrimary) {
  const numCPU = os.cpus().length;
  console.log(`Primary process running with PID: ${process.pid}`);
  console.log(`Forking ${numCPU} workers...`);
  for (let i = 0; i < numCPU; i++) {
    clusterA.fork();
  }
  clusterA.on('exit', (worker, code, signal) => {
    console.log(
      `Worker ${worker.process.pid} exited with code ${code} (${signal}). Restarting...`,
    );
    clusterA.fork();
  });
} else {
  console.log(`Worker ${process.pid} started`);
  bootstrap();
}
