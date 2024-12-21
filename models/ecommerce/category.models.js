import { Timestamp } from 'bson';
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { Timestamps: true }
);

export const Category = mongoose.model('Category', categorySchema);
