const createmeal = require("../index");
const fs = require("fs");
const path = require("path");
const ISSUES_URL = "https://github.com/createmeal/createmeal/issues";
const CONTRIBUTORS_URL = "https://github.com/createmeal/createmeal/graphs/contributors";
const LICENSE_URL = "https://github.com/createmeal/createmeal/blob/master/LICENSE";
const DOCS_URL = "#";

let readme = {
    "!DOCTYPE html": "",
    html: {
        body: [
            { div: { id: "top" } },
            createBedge(CONTRIBUTORS_URL, "CONTRIBUTORS",  2,  "brightgreen"),
            createBedge(ISSUES_URL, "ISSUES",  "0", "yellow"),
            createBedge(LICENSE_URL, "LICENSE", "MIT", "green"),
            { div: [
                { align: "center" },
                {h3: ["Createmeal"]},
                {
                    p: [
                        { align: "center" },
                        {span: ["HTML generator powered by json"]},
           
                        {a: {style:"display:block", href: DOCS_URL,  strong: ["Explore the docs »"]}}
                    ]                    
                },
                {
                    p: [
                        {a: { href: "#",  span: ["View Demo"]}},
                        {span: [" · "]},
                        {a: { href: ISSUES_URL,  span: ["Report Bug"]}},
                        {span: [" · "]},
                        {a: { href: ISSUES_URL,  span: ["Request Feature"]}}
                    ]
                }
            ] },
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
