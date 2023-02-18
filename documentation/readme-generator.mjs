import {toHtml} from "../dist/createmeal.mjs";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from "node-fetch";
import pretty from "pretty";

import { TableOfContents } from "./table-of-contents.mjs";
import { Badges } from "./badges.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pkgJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../package.json")));

const PACKAGE_VERSION = pkgJson.version;
const ISSUES_URL = "https://github.com/createmeal/createmeal/issues";
const ISSUES_DATA_URL = "https://api.github.com/search/issues?q=repo:createmeal/createmeal+type:issue+state:open";
const CONTRIBUTORS_URL = "https://github.com/createmeal/createmeal/graphs/contributors";
const CONTRIBUTORS_DATA_URL = "https://api.github.com/repos/createmeal/createmeal/contributors";
const LICENSE_URL = "https://github.com/createmeal/createmeal/blob/master/LICENSE";
const NPM_URL = "https://www.npmjs.com/package/createmeal";
const DOCS_URL = "https://createmeal.org";
const CDN_URL_ESM = `&lt;script type="module" src="https://cdn.jsdelivr.net/npm/createmeal@${PACKAGE_VERSION}/dist/createmeal.js"&gt;&lt;/script&gt;`;
const CDN_URL = `&lt;script src="https://cdn.jsdelivr.net/npm/createmeal@${PACKAGE_VERSION}/dist/createmeal-legacy.js"&gt;&lt;/script&gt;`;
const RUNKIT_URL = "https://npm.runkit.com/createmeal";

const LOADING_CDN_ESM = `${CDN_URL_ESM}
&lt;script type="module"&gt;
    import {toHtml} from "createmeal"
&lt;/script&gt;`;

const LOADING_CDN = `${CDN_URL}
&lt;script type="application/javascript"&gt;
    createmeal.toHtml();
&lt;/script&gt;`;

const USAGE_EXAMPLE = `
&lt;html&gt;
    &lt;body&gt;
        ${CDN_URL}
        &lt;script&gt;
        let helloWorld = {
            div: [
                    {
                        class: "container"
                    },
                    {
                        h3: "Hello World!"
                    },
                    {
                        p: "This is a simple way to generate DOM without write HTML."
                    }
                ]
            }
            let html = createmeal.toHtml(helloWorld);
            let element = new DOMParser().parseFromString(html,"text/html").body.firstChild;
            document.body.insertBefore(element,document.body.firstChild);
        &lt;/script&gt;
    &lt;/body&gt;
&lt;/html&gt;                    
`;
const USAGE_CDN_RESULT = `&lt;html lang="en"&gt;
    &lt;head&gt;
        &lt;title&gt;Create App With CDN&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div class="container"&gt;
            &lt;h3&gt;Hello World!&lt;/h3&gt;
            &lt;p&gt;This is a simple way to generate DOM without write HTML.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
`;

async function getIssuesCount(){    
    const response = await fetch(ISSUES_DATA_URL);
    return (await response.json()).total_count;
}
async function getContributorsCount(){
    const response = await fetch(CONTRIBUTORS_DATA_URL);
    return (await response.json()).length;
    
}

function createSimpleLink(href, textContent) {
    return {
        a: {
            _href: href,
            span: textContent,
        },
    };
}

function createCodeQuoteLine(listText, textContent){
    return {
        li:createCodeQuote(listText, textContent)
    }
}

function createCodeQuote(listText, textContent) {
    return [{ span: listText }, { pre: { code: textContent } }];
}

function backToTop(){
    return {
        p: [
            { align: "right" },
            createSimpleLink("#top", "back to top"),
        ]
    }
}


function createTitleArea(){
    return {
        div: [
            { align: "center" },
            { h3: "Createmeal" },
            {
                p: [
                    { align: "center" },
                    { span: "HTML generator powered by json" },
                    { br: {} },
                    {
                        a: {
                            href: DOCS_URL,
                            strong: "Explore the full documentation »",
                        },
                    },
                ],
            },
            {
                p: [
                    { a: { href: "#", span: ["View Demo"] } },
                    { span: " · " },
                    { a: { href: ISSUES_URL, span: ["Report Bug"] } },
                    { span: " · " },
                    {
                        a: [{
                            _href: ISSUES_URL
                        },"Request Feature"],
                    },
                ],
            },
        ],
    }
}
function createGifShow(){
    return {div:{
        align: "center" ,
            a:{
                "href": "https://createmeal.org",                            
                img: {
                        _src: `https://user-images.githubusercontent.com/13664081/157149662-9b549fd3-659f-46c1-8341-368ba9668a08.gif`,
                }
            }
    }}
}
function createAboutSection() {
    return {
        section: [
            createTopicTitle("about-the-project","About The Project"),
            {
                p: [
                    "HTML is the standard way to produce web page content ",
                    "and there are several other options to produce text estructures like markdown, ",
                    "jsml,  WackoWiki Markup, AsciiDoc, Contentflow, and others.",
                ],
            },
            {
                p: [
                    "Createmeal gives us the advantage of using the same HTML tag names and similar semantic, but ",
                    "using json in its sintax instead of xml. It decreases the need of learn a new language, ",
                    "brings a better way to generate layout content programatically ",
                    "on javascript side, componentize, create templates, ",
                    "serialize text to object, ",
                    "and all the flexibility of using json.",
                ],
            },
            {
                p: [
                    "Of course, for many people, HTML is enough, but it is great when you have ",
                    "good alternatives to solve problems, and turn live better.",
                ],
            }
        ]
    };
}
function createGetStartedSection() {
    return {
        section: [
            createTopicTitle("getting-started","Getting Started"),
            {
                p: [
                    {
                        span: "Try to accessing the guide for complete reference: ",
                    },
                    {
                        a: {
                            href: DOCS_URL,
                            strong: "Getting Started",
                        },
                    },
                ],
            },
            createTopicSubtitle("install","Install"),
            {
                ul: [
                    {
                        li: createCodeQuote("NPM", "npm i createmeal"),
                    },
                    {
                        li: createCodeQuote("CDN", CDN_URL),
                    },
                ],
            },
            createTopicSubtitle("loading","Loading"),
            {
                ul: [
                    {
                        li: createCodeQuote("ES Module Browser (ESM)", LOADING_CDN_ESM)
                    },
                    {
                        li: createCodeQuote("HTML script type='application/javascript'", LOADING_CDN)
                    },
                    {
                        li: createCodeQuote("ES Module NodeJs (MJS)", "import {toHtml} from 'createmeal';")
                    },
                    {
                        li: createCodeQuote("Typescript", "import {toHtml} from 'createmeal';")
                    },
                    {
                        li: createCodeQuote("CommonJS (CJS)", "const {toHtml} = require('createmeal/legacy').createmeal;")
                    }
                ],
            }
        ],
    };
}
function createTopicTitle(id,text){
    return {
        h2: [
            {
                _id: id
            },
            text
        ]
    }
}
function createTopicSubtitle(id,text){
    return {
        h3: [
            {
                _id: id
            },
            text
        ]
    }
}
function createUsageSection() {
    return {
        section: [
            createTopicTitle("usage","Usage"),
            {
                p: [
                    {
                        span: 
                            `
                                        The main metod of createmeal is toHtml({}), so createmeal.toHtml({div:{}}),
                                        will return &lt;div&gt;&lt;/div&gt;.
                                    `
                        ,
                    },
                ],
            },
            createTopicSubtitle("base-specification","Base Specification"),
            {
                ul: [
                    createCodeQuoteLine(
                        "Simple text: Text is represented by string.",
                        "createmeal.toHtml(\"test\");\\\\ \"test\""
                    ),
                    createCodeQuoteLine(
                        "paragraphe composed by array of strings: Multiple strings compose an unique text. ",
                        "{\"p\":[\"test\",\"Of\",\"Strings\"]} \\\\&lt;p&gt;testOfStrings&lt;/p&gt;"),
                    createCodeQuoteLine(
                        "Tag defined by array of strings: is not the default way, but is an available option.",
                        "[\"&lt;h1&gt;Tag h1 generated by text&lt;/h1&gt;\"] \\\\&lt;h1&gt;Tag h1 generated by text&lt;/h1&gt;")
                ]
            },
            createTopicSubtitle("incorporate","Incorporate in your application"),
            {
                ul: [
                    {
                        li: createCodeQuote("CDN", USAGE_EXAMPLE),
                    },
                    {
                        li: createCodeQuote(
                            "CDN Result",
                            USAGE_CDN_RESULT
                        ),
                    },
                ],
            },
        ],
    };
}
function createBuiltWithSection() {
    return {
        section: [
            createTopicSubtitle("built-with","Built With"),
            {
                p: [
                    "The entire library is created using vanilla javascript. ",
                    "All dependencies, HTML, images and other things are used only for Development, ",
                    " testing, and example purpose.",
                ],
            },
        ],
    };
}
function createLicenseSection() {
    return {
        section: [
            createTopicTitle("license","License"),
            {
                "a": [{
                    _href: LICENSE_URL
                },"MIT"]
            }
        ]
    };
}

(
    async function(){
        let openIssues = await getIssuesCount();
        let contributors = await getContributorsCount();

        const badges = [
            {
                href: RUNKIT_URL,
                label: "Try it online on",
                message: "RunKit",
                color: "f55fa6",
                className: "badge badge-tryonline"
            },
            {
                href: CONTRIBUTORS_URL,
                label: "CONTRIBUTORS",
                message: contributors,
                color: "brightgreen",
                className: "badge badge-contributors"
            },
            {
                href: ISSUES_URL,
                label: "ISSUES",
                message: openIssues,
                color: "yellow",
                className: "badge badge-issues"
            },
            {
                href: LICENSE_URL,
                label: "LICENSE",
                message: "MIT",
                color: "blue",
                className: "badge"
            },
            {
                href: NPM_URL,
                label: "NPM",
                message: PACKAGE_VERSION,
                color: "red",
                className: "badge"
            },
            {
                href: "#usage",
                label: "STATUS",
                message: "ACTIVE",
                color: "green",
                className: "badge"
            }
        ]

        let readme = {
            "!DOCTYPE html": "",
            html: {
                body: [
                    { div: { id: "top" } },
                    new Badges(badges),
                    createTitleArea(),
                    createGifShow(),
                    new TableOfContents({summaryText: "Table of Contents"}),
                    createAboutSection(),
                    backToTop(),
                    createBuiltWithSection(),
                    backToTop(),
                    createGetStartedSection(),
                    backToTop(),
                    createUsageSection(),
                    backToTop(),
                    createLicenseSection(),
                    backToTop()
                ],
            },
        };        
        const README = toHtml(readme);
        fs.writeFileSync(path.resolve(__dirname, "../README.html"), pretty(README));
        fs.writeFileSync(path.resolve(__dirname, "../README.md"), pretty(README));
    }
)()