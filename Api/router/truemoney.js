// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const transactions = [];

// // Set express to accept reverse proxy
// // router.set('trust proxy', true);
// router.use(express.urlencoded({ extended: true }));
// router.use(express.json());

// router.post('/webhook', (req, res) => {
//   if (!req.body.message) return res.sendStatus(400);

//   // verify jwt
//   jwt.verify(req.body.message, process.env.JWT_SECRET, (err, decoded) => {
//     if (err || !decoded) return res.status(401).json({ message: 'Invalid Secret!' });

//     transactions.push(decoded);
//     res.status(200).send();
//   });

//   // หากไม่ต้องการ verify jwt สามารถ comment ด้านบนและ uncomment ด้านล่างได้เลยครับ
//   // transactions.push(jwt.decode(req.body.message));
//   // res.status(200).send();
// });

// router.get('/', (_, res) => {
//   let response = '';
//   for (let x of transactions) {
//     if (x.server) return;
//     response += `รับโอนเงินจากเบอร์ ${x.sender_mobile}\nจำนวน ${(x.amount / 100).toFixed(2)} บาท\nวันที่ทำรายการ ${new Date(x.received_time).toLocaleString('th-TH')}\nข้อความ ${x.message ? x.message : '-'}\n`;
//   }
//   return res.send(response);
// });

// router.all('*', (_, res) => res.status(404).send());

// router.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && 'body' in err) return res.sendStatus(400);
//   console.error(err);
//   res.status(500).send();
// });

// module.exports = router;
