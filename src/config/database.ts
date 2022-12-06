import { DATABASE_URL } from ".";
import { getConnectionManager } from 'typeorm';
import { Session } from '../entity/Session';

export const connection = async () => {
  const connectionManager = getConnectionManager();

  const connection = connectionManager.create({
    url: DATABASE_URL!,
    type: 'mysql',
    entities: [
        Session
    ],
  });

  await connection.connect();

  console.log('DB connected');

  process.on('SIGINT', async function () {
    connection.close();
    console.log('DB disconnected through app termination!');
    process.exit(0);
  });

  process.on('SIGTERM', function () {
    connection.close();
    console.log('DB disconnected through app termination!');
    process.exit(0);
  });

  process.once('SIGUSR2', function () {
    connection.close();
    console.log('DB disconnected through app termination!');
    process.exit(0);
  });
};
