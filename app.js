const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🚀 Hello CI/CD world, checking CICD after checking CICD implementation!'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));

module.exports = app;
