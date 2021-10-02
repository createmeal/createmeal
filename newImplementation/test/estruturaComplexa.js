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
        "attributes": [
            {
                "lang": "pt-br"
            }
        ],
        "head": {
            "link": {
                "rel": "stylesheet",
                "href": "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
                "integrity": "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
                "crossorigin": "anonymous"
            },
            "title": {
                "content": "Página de testes"
            }
        },
        "body": {
            "div": {
                "class": "container",
                "h1": {
                    "content": "Teste de criacao"
                },
                "div": {
                    "class": "form-control"
                },
                "children": [
                    {
                        "ul": {
                            "class": "list-group",
                            "width": "20%",
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
                            "src": "https://code.jquery.com/jquery-3.2.1.slim.min.js",
                            "integrity": "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",
                            "crossorigin": "anonymous"
                        }
                    },
                    {
                        "script": {
                            "src": "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
                            "integrity": "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",
                            "crossorigin": "anonymous"
                        }
                    },
                    {
                        "script": {
                            "src": "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
                            "integrity": "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",
                            "crossorigin": "anonymous"
                        }
                    }
                ]
            }
        }
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