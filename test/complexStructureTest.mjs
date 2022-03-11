import assert from 'assert';
import {toHtml} from '../src/index.mjs';
import { describe, it } from 'mocha';

describe("Complex Structures",function(){
    it("Should generate a simple HTML template", function(){
        const template = {
            "!DOCTYPE": {
                "attributes": [
                    {
                        "html": null
                    }
                ]
            },
            "html": {
                "head": {},
                "body": {}
            }
        }
        assert.equal(toHtml(template),"<!DOCTYPE html><html><head></head><body></body></html>");
    })
    it("Should generate a Hello world HTML template",function(){
        const template = [{"!DOCTYPE html":null},{"html":{
            head: {
                "title": ["Teste de geração"]
            },
            body:[{
                h1:["Hello World!"]
            }]
        }}];
        assert.equal(toHtml(template),"<!DOCTYPE html><html><head><title>Teste de geração</title></head><body><h1>Hello World!</h1></body></html>");
    })
    it("Should generate a HTML template with many tags and child levels",function(){
        const template ={
            "div": [//<div class="container">
                {"class": "container"},
                {"h1": {//<h1 content="Teste de criacao - FAILED" non-verified="non verified attribute"></h1>
                    "content": "Teste de criacao - FAILED",
                    "_non-verified":"non verified attribute"
                }},
                {"h2":["passou!!!"]},//<h2>passou!!!</h2>
                {"div": {//<div><non-verified>non verified attribute</non-verified></div>
                    "non-verified":["non verified tag"]
                }},
                {
                    "ul": [//<ul>
                            {
                                "li": [//<li class="list-group-item">Cras justo odio</li></ul>`;
                                    {"class": "list-group-item"},
                                    "Cras justo odio"
                                ]
                            },
                            {
                                "li": [//<li class="list-group-item">Dapibus ac facilisis in</li>
                                    {"class": "list-group-item"},
                                    "Dapibus ac facilisis in"
                                ]
                            },
                            {
                                "li": [//<li class="list-group-item">Morbi leo risus</li>
                                    {"class": "list-group-item"},
                                    "Morbi leo risus"
                                ]
                            },
                            {
                                "li": [//<li class="list-group-item">Porta ac consectetur ac</li>
                                    {"class": "list-group-item"},
                                    "Porta ac consectetur ac"
                                ]
                            },
                            {
                                "li": [//<li class="list-group-item">Vestibulum at eros</li>
                                    {"class": "list-group-item"},
                                    "Vestibulum at eros"
                                ]
                            }
                        ]
                },
                {//<script></script><script></script><script></script></div>
                    "script": {
                        
                    }
                },
                {
                    "script": {
                    
                    }
                },
                {
                    "script": {
                    
                    }
                }
            
            ]
        }
        const expected = `<div class="container"><h1 content="Teste de criacao - FAILED" non-verified="non verified attribute"></h1><h2>passou!!!</h2><div><non-verified>non verified tag</non-verified></div><ul><li class="list-group-item">Cras justo odio</li><li class="list-group-item">Dapibus ac facilisis in</li><li class="list-group-item">Morbi leo risus</li><li class="list-group-item">Porta ac consectetur ac</li><li class="list-group-item">Vestibulum at eros</li></ul><script></script><script></script><script></script></div>`; 
        assert.equal(toHtml(template),expected);
    })
})