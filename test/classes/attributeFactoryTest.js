import assert from "assert";
import AttributeFactory from "../../src/composite/AttributeFactory.js";
import {describe, it} from "mocha";

describe("AttributeFactory", function () {
    describe("isBooleanAttribute",function(){
        it("Should return true for the attribute allowfullscreen",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("allowfullscreen"),true);
        })
        it("Should return true for the attribute allowpaymentrequest",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("allowpaymentrequest"),true);
        })
        it("Should return true for the attribute async",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("async"),true);
        })
        it("Should return true for the attribute autofocus",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("autofocus"),true);
        })
        it("Should return true for the attribute autoplay",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("autoplay"),true);
        })
        it("Should return true for the attribute checked",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("checked"),true);
        })
        it("Should return true for the attribute controls",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("controls"),true);
        })
        it("Should return true for the attribute default",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("default"),true);
        })
        it("Should return true for the attribute defer",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("defer"),true);
        })
        it("Should return true for the attribute disabled",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("disabled"),true);
        })
        it("Should return true for the attribute formnovalidate",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("formnovalidate"),true);
        })
        it("Should return true for the attribute hidden",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("hidden"),true);
        })
        it("Should return true for the attribute ismap",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("ismap"),true);
        })
        it("Should return true for the attribute itemscope",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("itemscope"),true);
        })
        it("Should return true for the attribute loop",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("loop"),true);
        })
        it("Should return true for the attribute multiple",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("multiple"),true);
        })
        it("Should return true for the attribute muted",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("muted"),true);
        })
        it("Should return true for the attribute nomodule",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("nomodule"),true);
        })
        it("Should return true for the attribute novalidate",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("novalidate"),true);
        })
        it("Should return true for the attribute open",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("open"),true);
        })
        it("Should return true for the attribute playsinline",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("playsinline"),true);
        })
        it("Should return true for the attribute readonly",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("readonly"),true);
        })
        it("Should return true for the attribute required",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("required"),true);
        })
        it("Should return true for the attribute reversed",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("reversed"),true);
        })
        it("Should return true for the attribute selected",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("selected"),true);
        })
        it("Should return true for the attribute truespeed",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("truespeed"),true);
        })


        it("Should return false for the attribute accept",function(){
            assert.equal(new AttributeFactory().isBooleanAttribute("accept"),false);
        })
        //TODO: add test for all not boolean attributes checking to return false like "accept"
    })
})