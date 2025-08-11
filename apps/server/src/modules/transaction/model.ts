import mongoose from "mongoose";

export interface ITransaction extends mongoose.Document {
  fromAccountId: mongoose.Schema.Types.ObjectId;
  toAccountId: mongoose.Schema.Types.ObjectId;
  amount: number;
  type: string;
  status: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export const TransactionSchema = new mongoose.Schema<ITransaction>(
  {
    fromAccountId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Account",
    },
    toAccountId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Account",
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["credit", "debit", "pix"],
      default: "debit",
    },
    status: {
      type: String,
      enum: ["processing", "completed"],
      default: "processing",
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    collection: "transaction",
    timestamps: true,
  },
);

export const TransactionModel = mongoose.model<ITransaction>("Transaction", TransactionSchema);
