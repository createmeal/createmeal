import {toHtml} from "../../dist/createmeal.js"

const template = {
    "html": {
        "head": {},
        "body": {
            "p": ["Hello World with Typescript!"]
        }
    }
}

console.log(toHtml(template));