import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { profileRouter } from './routes/profile.js';
import { contactRouter } from './routes/contact.js';

const app = express();
const port = process.env.PORT || 8080;
const frontendOrigin = process.env.FRONTEND_ORIGIN || '*';

app.use(helmet());
app.use(cors({ origin: frontendOrigin === '*' ? true : frontendOrigin }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('tiny'));

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'venktesh-proofos-backend' }));
app.use('/api', profileRouter);
app.use('/api', contactRouter);

app.use((_req, res) => res.status(404).json({ error: 'Not found' }));

app.listen(port, () => {
  console.log(`ProofOS backend running on port ${port}`);
});
