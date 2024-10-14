"use strict";
const express = require('express');
const app = express();
const port = 8000;
app.get('/', (req, res) => {
    res.send('holaaa');
});
app.listen(port, () => {
    console.log('runneando el sv');
});
