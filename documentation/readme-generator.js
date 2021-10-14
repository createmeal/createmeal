const createmeal = require("../index");
const fs = require("fs");
const path = require("path");
const ISSUES_URL = "https://github.com/createmeal/createmeal/issues";
const CONTRIBUTORS_URL =
    "https://github.com/createmeal/createmeal/graphs/contributors";
const LICENSE_URL =
    "https://github.com/createmeal/createmeal/blob/master/LICENSE";
const DOCS_URL = "#";

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
            {
                div: [
                    { align: "center" },
                    { h3: ["Createmeal"] },
                    {
                        p: [
                            { align: "center" },
                            { span: ["HTML generator powered by json"] },

                            {
                                a: {
                                    style: "display:block",
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
                        ol:[
                            {li:{
                                a: {
                                    href: "#about-the-project",
                                    span: ["About The Project"],
                                },
                                ul: createTableOfContentsLine("#built-with", "Built With"),
                            }},
                            {li:{
                                a: {
                                    href: "#getting-started",
                                    span: ["Getting Started"],
                                },
                                ul: [
                                    createTableOfContentsLine("#prerequisites", "Prerequisites"),
                                    createTableOfContentsLine("#installation", "Installation")
                                ]
                            }},
                            createTableOfContentsLine("#usage", "Usage"),
                            createTableOfContentsLine("#roadmap", "Roadmap"),
                            createTableOfContentsLine("#contributing", "Contributing"),
                            createTableOfContentsLine("#license", "License"),
                            createTableOfContentsLine("#contact", "Contact"),
                            createTableOfContentsLine("#acknowledgments", "Acknowledgments")                            
                        ]
                    }
                    
                ],
            },
            {
                section:[
                    {h2:["About The Project"]},
                    {p:[
                        "HTML is the standard way to produce web page content ",
                        "and there are several other options to produce text estructures like markdown, ",
                        "jsml,  WackoWiki Markup, AsciiDoc, Contentflow, and others. But to ",
                        " work with these alternatives at first you will need learn a new language, ",
                        "is not ease to produce content using javascript, and most of them has a ",
                        "strange sintax and some times worst then HTML."
                    ]},
                    {p:[
                        "Createmeal gives use the same HTML tag names and semantic, but",
                        "with json as sintax. It decreases the need of learn a new language, ",
                        "gives you a better way to generate layout content in a better way using ",
                        "javascript, in additional to allow you storage source easilly in database ", 
                        "if is needed, componentize, create templates and serialize to object."
                    ]},
                    {p:[
                        "Of course, for many people, HTML is excelent, but is great when you have ",
                        "good alternatives to solve problems, and turn live better."
                    ]},
                    {p:[
                        {align:"right"},
                        createSimpleLink("#top", "back to top")
                    ]}
            ]},
            {
                section:[
                    {h3:["Built With"]},
                    {
                        p:[
                            "The entire library is actually created using javascript and ",
                            "the dependences and HTML is used only for Development and ",
                            " testing, and example porpose."
                        ]
                    }
                ]
            },
            
            {h2:["Getting Started"]},
            {h3:["Prerequisites"]},
            {h3:["Installation"]},
            {h2:["Usage"]},
            {h2:["Roadmap"]},
            {h2:["Contributing"]},
            {h2:["License"]},
            {h2:["Contact"]},
            {h2:["Acknowledgments"]}
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
        li:createSimpleLink(href, textContent)
    }    
}

function createSimpleLink(href, textContent){
    return {
        a: {
            href: href,
            span: [textContent],
        }
    }
}