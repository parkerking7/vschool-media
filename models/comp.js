var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var companySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    logoUrl:{
        type: String,
        required: true
    },
    applied:{
        type: Number,
        default:0
    },
    appliedButton: {
        type: Array,
        default: [String]
    },
    interviewed:{
        type: Number,
        default:0
    },
    interviewedButton: {
        type: Array,
        default: [String]
    },
    hired:{
        type: Number,
        default:0
    },
    hiredButton: {
        type: Array,
        default: [String]
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    }
});

module.exports = mongoose.model("Company", companySchema);