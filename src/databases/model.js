const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productName:String,
    productCode:String,
    dossageForm:String,
    pakkingForm:String,
    pakkinDisplay:String,
    weight:Number,
    care:Boolean,
    salt:String,
    saltGroup:String,
    speciality:String,
    manufacturer:String,
    mrp:Number,
    priceToConsumer:Number,
    discountPercentage:Number,
    taxPercentage:Number,
    condition:String,
    homepageCategory:String,
    countryofOrigin:String,
    strength:String,
    stock:Boolean,
    prescriptionRequired:Boolean,
    pap:String,
    PAPOffer:String,
    abcd:String,
    Title:String,
    Keywords:String,
    Description:String,

}, {
    timestamps: true
});

 module.exports=mongoose.model('Product',ProductSchema);