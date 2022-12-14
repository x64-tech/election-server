const mongoose = require("mongoose");
const { candidateSchema } = require("./candidateSchema")

const electionCrateria = new mongoose.Schema({

})



const electionSchema = new mongoose.Schema({
  electionName: {
    type: String,
    required: true,
  },
  electionDec: String,
  // important dates
  votingStart: Date,
  votingEnd: Date,
  //craiteria of voting
  craiteria: {
    state: String,
  },
  nominatedCandidates: [
    {
      candidate: candidateSchema,
      voteCount: {
        type: Number,
        default: 0
      },
      _id: false,
    },
  ],
  registredVoters: [
    String
  ],
  __v: false,
});

module.exports = mongoose.model("Elections", electionSchema);
