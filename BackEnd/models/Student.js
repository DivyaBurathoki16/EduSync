const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: false
    },
    dob: {
        type: String,
        required : false
    },
    gender:{
        type: String,
        required : false
    },
    nationality :{
        type: String,
        required : false
    },
    contact:{
        type: String,
        required:  false,
        unique : true
    },
    email: {
        type: String,
        required: false,
        unique : true
    },
    address:{
        type: String,
        required : false
    },
    parentName: {
        type: String,
        required: false
    },
    relation: {
        type: String,
        required: false,
    },
    parentContact:{
        type: String,
        required:  false
    },
    parentEmail:{
        type: String,
        required: false,
    },
    occupation:{
        type: String,
        required:  false
    },
    schoolName:{
        type: String,
        required: false
    },
    collegeName:{
        type: String,
        required: false
    },
    schoolGrade:{
        type: String,
        required: false
    },
    collegeGrade:{
        type: String,
        required: false
    },
    highestQualification:{
        type: String,
        required: false
    },
    courseName:{
        type: String ,
        required: false
    },
     year:{
        type: String ,
        required: false
    },
    fees:{
        type: String ,
        required: false
    },
    passportSizePhoto: {
        type: String,
        required: false
    },
    marksheet10th: {
        type: String,
        required: false
    },
    marksheet12th: {
        type: String,
        required: false
    },
    certificate10th: {
        type: String,
        required: false
    },
    certificate12th: {
        type: String,
        required: false
    },
    indentityProof: {
        type: String,
        required: false
    },
    birthCertificate: {
        type: String,
        required: false
    },
    addressProof: {
        type: String,
        required: false
    },
    studentSign: {
        type: String,
        required: false
    },
    parentSign: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    kt: {
        type: Number,
        required: false, 
        default:0
    }
});
module.exports = mongoose.model('students', studentSchema);