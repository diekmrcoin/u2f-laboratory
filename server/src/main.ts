import express from 'express';
import { Registry } from './registry/registry';

const app = express();

const registry = Registry.init();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/registry', function (req, res) {
  const attestation = registry.attestation();
  console.log(attestation);
  res.send(JSON.stringify(attestation));
});

app.post('/registry', function (req, res) {
  res.send('registry');
});

app.post('/auth', function (req, res) {
  res.send('auth');
});

const PORT = process.env.NODE_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express started on port ${PORT}`);
});
