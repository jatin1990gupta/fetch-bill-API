const Bill = require('../models/bill');

exports.getIndex = (req, res, next) => {
  res.status(200).json({
    pageTitle: 'indexPage'
  })
}

exports.postNewUser = (req, res, next) => {
  const sId = req.body.sId;
  const user = new Bill({
    sId: sId,
    billDetails: []
  });
  user.save()
    .then(result => {
      res.status(200).json({
        message: "New User Created"
      })
    })
    .catch(err => {
      res.status(400).json({
        message: err
      })
    })
}

exports.postNewBill = (req, res, next) => {
  const sId = req.body.sId;
  const billMonth = req.body.billMonth;
  const basicAmount = req.body.basicAmount;
  const lateAmount = req.body.lateAmount;
  const otherAmount = req.body.otherAmount;

  Bill.findOne({ sId: sId })
    .then(bill => {
      bill.billDetails.push({
        billMonth: billMonth,
        basicAmount: basicAmount,
        lateAmount: lateAmount,
        otherAmount: otherAmount,
        dueDate: new Date()
      })
      bill.save();
    })
    .then(result => {
      res.status(200).json({
        message: "Bill Generated."
      });
    })
    .catch(err => {
      res.status(400).json({
        message: "User Not Found"
      })
    });
}

