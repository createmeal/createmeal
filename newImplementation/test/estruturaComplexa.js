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
assert.assert(jsml.toHtml(json), 'teste', "basic string array node");


const noAttr = {
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
                    "content": "Teste de criacao"
                },
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
assert.assert(jsml.toHtml(noAttr), 'teste', "02-no attr");