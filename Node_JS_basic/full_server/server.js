import express from 'express';
import routes from './routes/index.js';

const app = express();
const PORT = 1245;

// Utiliser les routes
app.use('/', routes);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
