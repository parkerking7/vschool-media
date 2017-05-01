var express = require("express");
var companyRouter = express.Router();
var Company = require("../models/comp");

companyRouter.route("/")
    .get(function (req, res) {
        Company.find({user: req.user._id}, function (err, companies) {
            if (err) res.status(500).send(err);
            res.send({companies: companies, user:req.user});
        });
    })
    .post(function (req, res) {
        var company = new Company(req.body);
        company.user = req.user;
        company.save(function (err, newCompany) {
            if (err) res.status(500).send(err);
            res.status(201).send(newCompany);
        })
    });

companyRouter.route("/all")
    .get(function (req, res) {
        Company.find( function (err, companies) {
            if (err) res.status(500).send(err);
            res.send({companies: companies, user:req.user});
        });
    });
companyRouter.route("/search")
    .get(function(req,res){
      Company.find({name:req.query.name},function(err,foundCompanies){
          if(err) res.status(500).send(err);
          res.send(foundCompanies);
      })
});
companyRouter.route("/applied")
    .get(function(req,res){
        var returned = [];
        Company.find(function(err, companies){
            for(var i = 0; i < companies.length; i++){
                for(var j = 0; j< companies[i].appliedButton.length; j++){
                    if(companies[i].appliedButton[j] === req.user._id){
                        returned.push(companies[i]);
                    }
                }
            }
            res.send({companies: returned, user:req.user});
        });
        // Company.find({user:req.user._id, appliedButton:})

    });

companyRouter.route("/:compId")
    .get(function (req, res) {
        Company.findOne({_id: req.params.companyId, user: req.user._id}, function (err, company) {
            if (err) res.status(500).send(err);
            if (!company) res.status(404).send("No companies found.");
            else res.send(company);
        });
    })
    .put(function (req, res) {
        Company.findByIdAndUpdate(req.params.compId,req.body,{new:true}, function (err, company) {
            if (err) res.status(500).send(err);
            res.send({userId: req.user, company: company});
        });
    })
    .delete(function (req, res) {
        Company.findByIdAndRemove(req.params.compId, function (err, company) {
            if (err) res.status(500).send(err);
            res.send(company);
        })
    });

module.exports = companyRouter;