import {toHtml} from "../../dist/createmeal.mjs"

const template = {
    "html": {
        "head": {},
        "body": {
            "p": ["Hello World with Typescript!"]
        }
    }
}

console.log(toHtml(template));