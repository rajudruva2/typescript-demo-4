import express from 'express';
const app = express();
app.get('/', (_req, res) => res.json({service: 'order-service', status: 'running'}));
app.get('/health', (_req, res) => res.json({status: 'UP'}));
app.get('/api/orders', (_req, res) => res.json([{ id: 1001, status: 'CREATED' }, { id: 1002, status: 'SHIPPED' }]));
app.listen(Number(process.env.PORT || 3000), '0.0.0.0');
