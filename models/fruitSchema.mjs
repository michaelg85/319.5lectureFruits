import mongoose from "mongoose";

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  color: {
    type: String,
    required: true,
  },
  ripe: {
    type: Boolean,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
});

fruitSchema.index({qty: -1});



export default mongoose.model("Fruit", fruitSchema);

