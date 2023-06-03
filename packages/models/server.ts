import { model, Schema } from "mongoose";
import { IServer } from "./types";
import { SERVER_STATUS } from "./enum";

const serverSchema = new Schema(
  {
    name: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    region: String,
    ip_address: {
      ref: "Team",
      type: Schema.Types.ObjectId,
    },
    provider_id: String,
    status: {
      type: String,
      enum: Object.values(SERVER_STATUS),
      default: SERVER_STATUS.Active,
    },
    size: Number
  },
  { timestamps: true },
);

export default model<IServer>("Server", serverSchema);