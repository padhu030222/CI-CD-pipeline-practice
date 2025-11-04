const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🚀 Hello CI/CD world, checking CICD after implementation by November 4 2025 OFF the Auto Deploy in Render!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));

module.exports = app;
