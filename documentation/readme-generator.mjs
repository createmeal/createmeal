import {toHtml} from "../dist/createmeal.mjs";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from "node-fetch";
import pretty from "pretty";

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
const CDN_URL = `&lt;script src="https://cdn.jsdelivr.net/npm/createmeal@${PACKAGE_VERSION}/dist/createmeal-legacy.js"&gt;&lt;/script&gt;`;

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

function createTableOfContents() {
    return {
        details: [
            { summary: ["Table of Contents"] },
            {
                ol: [
                    createAboutSummary(),
                    createGettingStartedSummary(),
                    createUsageSummary(),
                    createTableOfContentsLine("#license", "License")
                ],
            },
        ],
    };
}

function createBadge(link, label, message, color, className="badge") {
    return {
        a: {
            _style: "margin-left:5px;",
            _class: className,
            _href: link,
            img: {
                src: `https://img.shields.io/badge/${label}-${message}-${color}`,
            },
        },
    };
}
function createCDNBadge(){
    return {
        a: {
            _style: "margin-left:5px;",
            _href: "https://www.jsdelivr.com/package/npm/createmeal",
            img: {
                src: `https://data.jsdelivr.com/v1/package/npm/createmeal/badge`,
            },
        },
    }
}
function createOpenbaseBadge(){
    return {
        a: {
            _href: "https://openbase.com/js/createmeal?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge",
            img: {
                _src: "https://badges.openbase.com/js/featured/createmeal.svg?token=qN8WsbWRkOBtfXJ9tNG0KnUwxkjPAjs6HUSniqdmrCU=",
                _alt: "Featured on Openbase"
            }
        }
    }
}
function createCodecovBadge(){
    return {
        a: {
            _href: "https://codecov.io/gh/createmeal/createmeal",
            img: {
                _src: "https://codecov.io/gh/createmeal/createmeal/branch/master/graph/badge.svg?token=RG5SQ286T0"
            }
        }
    }
}

function createTableOfContentsLine(href, textContent) {
    return {
        li: createSimpleLink(href, textContent),
    };
}

function createSimpleLink(href, textContent) {
    return {
        a: {
            href: href,
            span: [textContent],
        },
    };
}

function createCodeQuoteLine(listText, textContent){
    return {
        li:createCodeQuote(listText, textContent)
    }
}

function createCodeQuote(listText, textContent) {
    return [{ span: [listText] }, { pre: { code: [textContent] } }];
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
            { h3: ["Createmeal"] },
            {
                p: [
                    { align: "center" },
                    { span: ["HTML generator powered by json"] },
                    { br: {} },
                    {
                        a: {
                            href: DOCS_URL,
                            strong: ["Explore the full documentation »"],
                        },
                    },
                ],
            },
            {
                p: [
                    { a: { href: "#", span: ["View Demo"] } },
                    { span: [" · "] },
                    { a: { href: ISSUES_URL, span: ["Report Bug"] } },
                    { span: [" · "] },
                    {
                        a: {
                            href: ISSUES_URL,
                            span: ["Request Feature"],
                        },
                    },
                ],
            },
        ],
    }
}
function createAboutSummary(){
    return {
        li: {
            a: {
                href: "#about-the-project",
                span: ["About The Project"],
            },
            ul: createTableOfContentsLine(
                "#built-with",
                "Built With"
            ),
        },
    }
}
function createAboutSection() {
    return {
        section: [
            { h2: ["About The Project"] },
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
function createGettingStartedSummary(){
    return {
        li: {
            a: {
                href: "#getting-started",
                span: ["Getting Started"],
            },
            ul: [
                createTableOfContentsLine(
                    "#installation",
                    "Installation"
                ),
                createTableOfContentsLine(
                    "#loading",
                    "Loading"
                ),
            ],
        },
    }
}
function createGetStartedSection() {
    return {
        section: [
            { h2: ["Getting Started"] },
            {
                p: [
                    {
                        span: [
                            "Try to accessing the guide for complete reference: ",
                        ],
                    },
                    {
                        a: {
                            href: DOCS_URL,
                            strong: ["Getting Started"],
                        },
                    },
                ],
            },
            { h3: ["Installation"] },
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
            { h3: ["Loading"] },
            {
                ul: [
                    {
                        li: createCodeQuote("ES Module (ESM) - from version 1.2", "import {toHtml} from 'createmeal';")
                    },
                    {
                        li: createCodeQuote("CommonJS - only on version 1.0", "const {toHtml} = require('createmeal');")
                    }
                ],
            }
        ],
    };
}
function createUsageSummary(){
    return {
        li: {
            a: {
                href: "#usage",
                span: ["Usage"],
            },
            ul: [
                createTableOfContentsLine(
                    "#base-specification",
                    "Base Specification"
                )
            ],
        },
    }
}
function createUsageSection() {
    return {
        section: [
            { h2: ["Usage"] },
            {
                p: [
                    {
                        span: [
                            `
                                        The main metod of createmeal is toHtml({}), so createmeal.toHtml({div:{}}),
                                        will return &lt;div&gt;&lt;/div&gt;.
                                    `,
                        ],
                    },
                ],
            },
            { h3: ["Base Specification"] },
            {
                ul: [
                    {
                        li: createCodeQuote(
                            "Simple text: Text is represented by an array of strings. ",
                            "createmeal.toHtml([\"test\"]);\\\\ \"test\""
                        ),
                    },
                    createCodeQuoteLine("Paragraphe: Tag text content can be an array of strings. ",
                        "{\"p\":[\"teste\"]} \\\\&lt;p&gt;teste&lt;/p&gt;"),
                    createCodeQuoteLine("paragraphe composed by array of strings: Multiple strings compose an unique text. ",
                        "{\"p\":[\"test\",\"Of\",\"Strings\"]} \\\\&lt;p&gt;testOfStrings&lt;/p&gt;"),
                    createCodeQuoteLine("Tag defined by array of strings: is not the default way, but is an available option.",
                        "[\"&lt;h1&gt;Tag h1 generated by text&lt;/h1&gt;\"] \\\\&lt;h1&gt;Tag h1 generated by text&lt;/h1&gt;")
                ]
            },
            { h3: ["Incorporate in your application"] },
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
            { h3: ["Built With"] },
            {
                p: [
                    "The entire library is created using vanilla javascript. ",
                    "All dependencies, HTML, images and other things are used only for Development, ",
                    " testing, and example porpose.",
                ],
            },
        ],
    };
}
function createLicenseSection() {
    return {
        section: [
            { h2: ["License"] },
            {
                "a": {
                    "href": LICENSE_URL,
                    "span": ["MIT"]
                }
            }
        ]
    };
}

(
    async function(){
        let openIssues = await getIssuesCount();
        let contributors = await getContributorsCount();
        let readme = {
            "!DOCTYPE html": "",
            html: {
                body: [
                    { div: { id: "top" } },
                    createBadge(CONTRIBUTORS_URL, "CONTRIBUTORS", contributors, "brightgreen","badge badge-contributors"),
                    { span: [" "] },
                    createBadge(ISSUES_URL, "ISSUES", openIssues, "yellow","badge badge-issues"),
                    { span: [" "] },
                    createBadge(LICENSE_URL, "LICENSE", "MIT", "blue"),
                    { span: [" "] },
                    createCDNBadge(),
                    { span: [" "] },
                    createBadge(NPM_URL, "NPM", PACKAGE_VERSION, "red"),
                    { span: [" "] },
                    createBadge("#usage", "REPO STATUS", "ACTIVE", "green"),
                    { span: [" "] },
                    createOpenbaseBadge(),
                    { span: [" "] },
                    createCodecovBadge(),
                    createTitleArea(),
                    createTableOfContents(),
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