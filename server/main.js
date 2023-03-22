const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = require('./routes');
const { sequelize: db } = require('./models');

app.use(router);

const PORT = 3001;
app.listen(PORT, async () => {
  try {
    await db.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  console.log(`App listening on port ${PORT}`);
});
