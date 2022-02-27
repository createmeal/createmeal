import assert from "assert";
import NodeFactory from "../../src/composite/NodeFactory.js";
import {describe, it} from "mocha";

describe("AttributeFactory", function () {
    describe("isSelfClosingTag",function(){
        it("Should return true for the tag !DOCTYPE",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("!DOCTYPE"),true);
        })
        it("Should return true for the tag img",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("img"),true);
        })
        it("Should return true for the tag br",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("br"),true);
        })
        it("Should return true for the tag hr",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("hr"),true);
        })
        it("Should return true for the tag link",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("link"),true);
        })
        it("Should return true for the tag area",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("area"),true);
        })
        it("Should return true for the tag base",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("base"),true);
        })
        it("Should return true for the tag col",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("col"),true);
        })
        it("Should return true for the tag embed",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("embed"),true);
        })
        it("Should return true for the tag input",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("input"),true);
        })
        it("Should return true for the tag meta",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("meta"),true);
        })
        it("Should return true for the tag param",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("param"),true);
        })
        it("Should return true for the tag source",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("source"),true);
        })
        it("Should return true for the tag track",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("track"),true);
        })
        it("Should return true for the tag wbr",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("wbr"),true);
        })

        it("Should return false for the tag a",function(){
            assert.equal(new NodeFactory().isSelfClosingTag("a"),false);
        })
        //TODO: add test for all not self-closing tags checking to return false like "a"
    })
})