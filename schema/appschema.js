import mongoose from "mongoose";

const accountDetails = mongoose.Schema({
    account_id: Number,
    limit: Number,
    products: Array
}, {timestamps: true});

const account = mongoose.model('accounts', accountDetails, 'accounts')
export default account;