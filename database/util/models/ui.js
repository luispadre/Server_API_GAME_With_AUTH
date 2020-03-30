const mongoose = require("mongoose");

const UiSchema = new mongoose.Schema(
  {
    what: {
      type: String,
      required: true,
    },
    component: {
      type: String,
      required: true,
    },
    subcomponent: {
      type: String,
      required: true,
    },
    elements: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UI", UiSchema);
