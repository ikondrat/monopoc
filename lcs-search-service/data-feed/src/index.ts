import express from 'express';

const app = express();

app.listen(4000, () => {
  // define here feeders
  console.log(`data feeder running on port 4000`);
});