const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const projectSchema = new Schema(
  {
    projectname: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      default: Date.now + 1,
    },
    completeStatus: {
      type: Boolean,
      default: false,
      required: true,
    },
    assignedfreelancerid: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      defaut: 0,
    },
    milestones: {},
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    
    proposals:{
      type:Number,
      required:true,
    },
    difficulty:{
      type: String,
      enum: ["beginner", "intermediate", "professional"],
      required: true,
    }
  },
  { timestamps: true }
);
const PROJECT = mongoose.model("project", projectSchema);
module.exports = PROJECT;
