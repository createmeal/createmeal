const createmeal = require("../index.js");
const fs = require("fs");
const path = require("path");
let textContentWithStyle= {
    p:[
        {
            span:["This is an example of a complex text using spans, "]
        },
        {
            strong:["strong, "]
        },
        {
            small:["small, "]
        },
        {
            i:["italic, "]
        },
        {
            span:{
                class:"my_css_class", 
                span:["and some style."]
            }
        },
    ]
}
const EXAMPLE_TEXT_CONTENT_WITH_STYLE = createmeal.toHtml(textContentWithStyle);
fs.writeFileSync(path.resolve(__dirname, "textContentWithStyle.html"), EXAMPLE_TEXT_CONTENT_WITH_STYLE);