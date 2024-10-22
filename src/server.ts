import './loadEnvironment.js';
import express from 'express';

// Initialize express
const app = express();
const port = process.env.HOST_PORT ?? '3000';

const alumnos = ['Santiago Fernández-Pedrera','Nahomy Argueta','Daniel Galeano','Denis Podovei','Ivan Vallejo','Nil Marquez','Paul Aznar Tequén','Òscar Cruañas','Quim Pallarés','Satenik Avetisyan','Pol Cubo','Oriol Fontcuberta Aduart']


app.get('/alumnos', (req, res) => res.send(alumnos));

app.get('/alumnos/count', (req, res) => {
  const Totalalumnos = alumnos.length;
  res.send({ total: Totalalumnos });
});

app.get('/ping', (req, res) => res.send('pong'));

app.listen(process.env.HOST_PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
