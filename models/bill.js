const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const billSchema = new Schema({
  sId: {
    type: Number,
    required: true
  },
  billDetails: [{
    billMonth: {
      type: Number,
      default: 0
    },
    basicAmount: {
      type: Number,
      default: 0
    },
    lateAmount: {
      type: Number,
      default: 0
    },
    otherAmount: {
      type: Number,
      default: 0
    },
    dueDate: Date
  }]
})

module.exports = mongoose.model('Bill', billSchema);