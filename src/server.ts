// src/server.ts

import createApp from './app';

const startServer = async () => {
    try {
        const app = await createApp();
        await app.listen({ port: 3000 });
        app.log.info(`Server listening on http://localhost:3000`);
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};

startServer();
