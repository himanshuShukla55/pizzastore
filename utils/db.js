import { connect } from "mongoose";

export const connection = (url) => connect(url);
