const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  app.listen(3000, () => {
    console.log('3000 포트에서 호스팅을 시작합니다.');
  });
