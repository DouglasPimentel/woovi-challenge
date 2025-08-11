import mongoose from "mongoose";

export interface IAccount extends mongoose.Document {
  ownerId: mongoose.Schema.Types.ObjectId;
  accountNumber: string;
  accountDigit: string;
  agency: string;
  type: string;
  balance: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const AccountSchema = new mongoose.Schema<IAccount>(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    accountNumber: {
      type: String,
      required: true,
    },
    accountDigit: {
      type: String,
      required: true,
    },
    agency: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["checking", "savings", "payments"],
      default: "checking",
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  {
    collection: "account",
    timestamps: true,
  },
);

export const AccountModel = mongoose.model<IAccount>("Account", AccountSchema);
