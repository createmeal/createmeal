const createmeal = require("../index");
const fs = require("fs");
const path = require("path");

const OPEN = "&lt;";
const CLOSE = "&gt;";
const ISSUES_URL = "https://github.com/createmeal/createmeal/issues";
const CONTRIBUTORS_URL =
    "https://github.com/createmeal/createmeal/graphs/contributors";
const LICENSE_URL =
    "https://github.com/createmeal/createmeal/blob/master/LICENSE";
const NPM_URL =
    "https://www.npmjs.com/package/createmeal";
const DOCS_URL = "#usage";
const CDN_URL =
    '&lt;script src="https://cdn.jsdelivr.net/npm/createmeal@1.0.0/dist/createmeal.min.js"&gt;&lt;/script&gt;';
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
                        h3: ["Hello World!"]
                    },
                    {
                        p: ["This is a simple way to generate DOM without write HTML."]
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
EXAMPLE_ATTRIBUTE = `toHtml({
    div:{
        class:"container"
    }
}) 
//${tag('tagName class="container"', "")}`;

EXAMPLE_TEXT_CONTENT = `
toHtml({
    p:[\"Hello World!\"]
}) 
//${tag("p", "Hello World!")}
`;
EXAMPLE_TABLE = 
`
{
    table:{
        class: \"table table-success table-striped table-hover\",
        thead: { 
            tr: [
                { 
                    th: [\"First\"] 
                }, 
                { th: [\"Second\"] }, 
                { th: [\"Third\"] }
            ]
        },
        tbody: [
            {
                tr: [
                    { 
                        td: [\"valor primeira coluna\"] 
                    },
                    { td: [\"valor segunda coluna\"] },
                    { td: [\"valor terceira coluna\"] },
                ],
            },
            {
                tr: [
                    { td: [\"linha 1 coluna A\"] },
                    { td: [\"linha 2 coluna B\"] },
                    { td: [\"linha 3 coluna C\"] },
                ],
            },
        ],
    }
}
//result of table generation:
${OPEN}table class="table table-success table-striped table-hover"${CLOSE}
    ${OPEN}thead${CLOSE}
        ${OPEN}tr${CLOSE}
            ${OPEN}th${CLOSE}First${OPEN}/th${CLOSE}
            ${OPEN}th${CLOSE}Second${OPEN}/th${CLOSE}
            ${OPEN}th${CLOSE}Third${OPEN}/th${CLOSE}
        ${OPEN}/tr${CLOSE}
    ${OPEN}/thead${CLOSE}
    ${OPEN}tbody${CLOSE}
        ${OPEN}tr${CLOSE}
            ${OPEN}td${CLOSE}valor primeira coluna${OPEN}/td${CLOSE}
            ${OPEN}td${CLOSE}valor segunda coluna${OPEN}/td${CLOSE}
            ${OPEN}td${CLOSE}valor terceira coluna${OPEN}/td${CLOSE}
        ${OPEN}/tr${CLOSE}
        ${OPEN}tr${CLOSE}
            ${OPEN}td${CLOSE}linha 1 coluna A${OPEN}/td${CLOSE}
            ${OPEN}td${CLOSE}linha 2 coluna B${OPEN}/td${CLOSE}
            ${OPEN}td${CLOSE}linha 3 coluna C${OPEN}/td${CLOSE}
        ${OPEN}/tr${CLOSE}
    ${OPEN}/tbody${CLOSE}
${OPEN}/table${CLOSE}
`;

let readme = {
    "!DOCTYPE html": "",
    html: {
        body: [
            { div: { id: "top" } },
            createBedge(CONTRIBUTORS_URL, "CONTRIBUTORS", 2, "brightgreen"),
            { span: [" "] },
            createBedge(ISSUES_URL, "ISSUES", "0", "yellow"),
            { span: [" "] },
            createBedge(LICENSE_URL, "LICENSE", "MIT", "green"),
            { span: [" "] },
            {
                a: {
                    style: "margin-left:5px;",
                    href: "https://www.jsdelivr.com/package/npm/createmeal",
                    img: {
                        src: `https://data.jsdelivr.com/v1/package/npm/createmeal/badge`,
                    },
                },
            },
            { span: [" "] },
            createBedge(NPM_URL, "NPM", "1.0.0", "red"),
            { span: [" "] },
            createBedge("#usage", "STATUS", "DEVELOPMENT", "important"),
            {
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
                                    strong: ["Explore the docs »"],
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
            },
            {
                details: [
                    { summary: ["Table of Contents"] },
                    {
                        ol: [
                            {
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
                            },
                            {
                                li: {
                                    a: {
                                        href: "#getting-started",
                                        span: ["Getting Started"],
                                    },
                                    ul: [
                                        //createTableOfContentsLine("#prerequisites", "Prerequisites"),
                                        createTableOfContentsLine(
                                            "#installation",
                                            "Installation"
                                        ),
                                    ],
                                },
                            },
                            {
                                li: {
                                    a: {
                                        href: "#usage",
                                        span: ["Usage"],
                                    },
                                    ul: [
                                        createTableOfContentsLine(
                                            "#base-specification",
                                            "Base Specification"
                                        ),
                                        createTableOfContentsLine(
                                            "#examples",
                                            "Examples"
                                        ),
                                        createTableOfContentsLine(
                                            "#incorporating-in-application",
                                            "Incorporating in application"
                                        ),
                                    ],
                                },
                            },
                            createTableOfContentsLine("#roadmap", "Roadmap"),
                            createTableOfContentsLine(
                                "#contributing",
                                "Contributing"
                            ),
                            createTableOfContentsLine("#license", "License"),
                            createTableOfContentsLine("#contact", "Contact"),
                            createTableOfContentsLine(
                                "#acknowledgments",
                                "Acknowledgments"
                            ),
                        ],
                    },
                ],
            },
            {
                section: [
                    { h2: ["About The Project"] },
                    {
                        p: [
                            "HTML is the standard way to produce web page content ",
                            "and there are several other options to produce text estructures like markdown, ",
                            "jsml,  WackoWiki Markup, AsciiDoc, Contentflow, and others. But to ",
                            " work with these alternatives at first you will need learn a new language, ",
                            "is not ease to produce content using javascript, and most of them has a ",
                            "strange sintax and some times worst then HTML.",
                        ],
                    },
                    {
                        p: [
                            "Createmeal gives us the same HTML tag names and semantic, but ",
                            "using json in its sintax. It decreases the need of learn a new language, ",
                            "gives us a better way to generate layout content powered by ",
                            "javascript, in additional to allow us storage source easilly in database ",
                            "if is needed, componentize, create templates, use other languages like yaml, ",
                            "and serialize text to object.",
                        ],
                    },
                    {
                        p: [
                            "Of course, for many people, HTML is excelent, but is great when you have ",
                            "good alternatives to solve problems, and turn live better.",
                        ],
                    }
                ]
            },
            backToTop(),
            {
                section: [
                    { h3: ["Built With"] },
                    {
                        p: [
                            "The entire library is actually created using javascript and ",
                            "the dependences and HTML is used only for Development and ",
                            " testing, and example porpose.",
                        ],
                    },
                ],
            },
            backToTop(),
            {
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
                    /*{h3:["Prerequisites"]},
                    {
                        p:["there is no prerequisites to starting using this library."]
                    },*/
                    { h3: ["Installation"] },
                    {
                        ul: [
                            {
                                li: createCodeQuote("npm", "npm i createmeal"),
                            },
                            {
                                li: createCodeQuote("CDN", CDN_URL),
                            },
                        ],
                    },
                ],
            },
            backToTop(),
            {
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
                    { h3:["Base Specification"]},
                    {
                        ul:[
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
                                "[\"&lt;h1&gt;Tag h1 generated by text&lt;/h1&gt;\"] \\\\&lt;h1&gt;Tag h1 generated by text&lt;/h1&gt;"),
                            createCodeQuoteLine("Self-closing Tags: Value can be an empty string or enpty object.", 
                                "{\"img\":\"\"} \\\\&lt;img&gt;")
                        ]
                    },
                    { h3: ["Examples"] },
                    {
                        ul: [
                            {
                                li: createCodeQuote(
                                    "attributes",
                                    EXAMPLE_ATTRIBUTE
                                ),
                            },
                            {
                                li: createCodeQuote(
                                    "textContent",
                                    EXAMPLE_TEXT_CONTENT
                                ),
                            },
                            {
                                li: createCodeQuote("table", EXAMPLE_TABLE),
                            },
                            { 
                                h1:{
                                        align:"center",
                                        img: {                                     
                                        alt:"table.png", 
                                        title:"Table generated by createmeal",
                                        src:"./assets/table.png"
                                    }
                                }
                            }
                        ],
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
            },
            backToTop(),
            { h2: ["Roadmap"] },
            { h2: ["Contributing"] },
            { h2: ["License"] },
            { h2: ["Contact"] },
            { h2: ["Acknowledgments"] },
        ],
    },
};

const README_md = createmeal.toHtml(readme);
fs.writeFileSync(path.resolve(__dirname, "../README.html"), README_md);

function createBedge(link, label, message, color) {
    return {
        a: {
            style: "margin-left:5px;",
            href: link,
            img: {
                src: `https://img.shields.io/badge/${label}-${message}-${color}`,
            },
        },
    };
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

function tag(tagName, textContent) {
    return `${OPEN}${tagName}${CLOSE}${textContent}${OPEN}${tagName}${CLOSE}`;
}

function backToTop(){
    return {
        p: [
            { align: "right" },
            createSimpleLink("#top", "back to top"),
        ]
    }
}