const jsml = require('../index')
const assert = require('./assert')

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
assert.assert(jsml.toHtml(json), '<!DOCTYPE html><html></html>', "01-doctype with attribute and html");

var t ={
    "div": [//<div class="container">
        {"class": "container"},
        {"h1": {//<h1 content="Teste de criacao - FAILED"></h1>
            "content": "Teste de criacao - FAILED"
        }},
        {"h2":["passou!!!"]},//<h2>passou!!!</h2>
        {"div": {//<div></div>
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
var result = `<div class="container"><h1 content="Teste de criacao - FAILED"></h1><h2>passou!!!</h2><div></div><ul><li class="list-group-item">Cras justo odio</li><li class="list-group-item">Dapibus ac facilisis in</li><li class="list-group-item">Morbi leo risus</li><li class="list-group-item">Porta ac consectetur ac</li><li class="list-group-item">Vestibulum at eros</li></ul><script></script><script></script><script></script></div>`;
assert.assert(jsml.toHtml(t), result, "02-complex extructure");

noAttr = {
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
result = `<!DOCTYPE><html><head><link></link><title></title><head><body><div class="container"><h1 content="Teste de criacao - FAILED"></h1><h2>passou!!!</h2><div></div><ul><li class="list-group-item">Cras justo odio</li><li class="list-group-item">Dapibus ac facilisis in</li><li class="list-group-item">Morbi leo risus</li><li class="list-group-item">Porta ac consectetur ac</li><li class="list-group-item">Vestibulum at eros</li></ul><script></script><script></script><script></script></div></body></html>`;
assert.assert(jsml.toHtml(noAttr), result, "03-complex json with new ideas");
