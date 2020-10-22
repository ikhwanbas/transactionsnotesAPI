
//this part is still in maintenance

// const express = require('express')
// const app = express.Router()
// const db = require('../../controller/dbController')

// // const authorization = require('../../middleware/authorizationMiddleware')
// // app.use(authorization)

// app.patch('/items', (req, res) => {
//     const result = db.edit('items', req.body);
//     console.log(result);
//     if (!result) {
//         res.status(400).send('Wrong body');
//     } else {
//         res.send(result);
//     }
//     return;
// }
// );
// // app.patch('/items', (req, res) => {
// //     const body = req.body
// //     console.log(body);

// //     const id = req.body.id

// //     const isIdAvailable = db.get('items', id);

// //     console.log(isIdAvailable);

// //     const result = db.edit('items', id, body)

// //     // console.log(result);

// //     res.send(body)
// // })
// module.exports = app