import createmeal from '../src/index.js';
import assert from './assert.js';

const json = {
    "!DOCTYPE": {
        "attributes": [
            {
                "html": null
            }
        ]
    },
    "html": {
    }
}
assert.assert(createmeal.toHtml(json), '<!DOCTYPE html><html></html>', "01-doctype with attribute and html");

let t ={
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
let result = `<div class="container"><h1 content="Teste de criacao - FAILED" non-verified="non verified attribute"></h1><h2>passou!!!</h2><div><non-verified>non verified tag</non-verified></div><ul><li class="list-group-item">Cras justo odio</li><li class="list-group-item">Dapibus ac facilisis in</li><li class="list-group-item">Morbi leo risus</li><li class="list-group-item">Porta ac consectetur ac</li><li class="list-group-item">Vestibulum at eros</li></ul><script></script><script></script><script></script></div>`;
assert.assert(createmeal.toHtml(t), result, "02-complex extructure");

let noAttr = {
    "!DOCTYPE": {
    },    
    "html": {
        "head": {
            "link": {
            },
            "title": {
            }
        },
        "body": {
            "div": {
                "class": "container",
                "h1": {
                    "content": "Teste de criacao - FAILED"
                },
                "h2":["passou!!!"],
                "div": {
                },
                "children": [
                    {
                        "ul": {
                            "children": [
                                {
                                    "li": {
                                        "class": "list-group-item",
                                        "content": "Cras justo odio"
                                    }
                                },
                                {
                                    "li": {
                                        "class": "list-group-item",
                                        "content": "Dapibus ac facilisis in"
                                    }
                                },
                                {
                                    "li": {
                                        "class": "list-group-item",
                                        "content": "Morbi leo risus"
                                    }
                                },
                                {
                                    "li": {
                                        "class": "list-group-item",
                                        "content": "Porta ac consectetur ac"
                                    }
                                },
                                {
                                    "li": {
                                        "class": "list-group-item",
                                        "content": "Vestibulum at eros"
                                    }
                                }
                            ]
                        }
                    },
                    {
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
        }
    }
}
result = `<!DOCTYPE><html><head><link><title></title><head/><body><div class="container"><h1 content="Teste de criacao - FAILED"></h1><h2>passou!!!</h2><div></div><ul><li class="list-group-item">Cras justo odio</li><li class="list-group-item">Dapibus ac facilisis in</li><li class="list-group-item">Morbi leo risus</li><li class="list-group-item">Porta ac consectetur ac</li><li class="list-group-item">Vestibulum at eros</li></ul><script></script><script></script><script></script></div></body></html>`;
assert.assert(createmeal.toHtml(noAttr), result, "03-complex json with new ideas");
