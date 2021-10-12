const createmeal = require("../index");
const fs = require("fs");
const path = require("path");

let readme = {
    "!DOCTYPE html": "",
    html: {
        body: [
            { div: { id: "top" } },
            createBedge("https://github.com/createmeal/createmeal/graphs/contributors",
                "CONTRIBUTORS",  2,  "brightgreen"),
            createBedge("https://github.com/createmeal/createmeal/issues",
                "ISSUES",  "0", "yellow"),
            createBedge("https://github.com/createmeal/createmeal/graphs/contributors",
                "LICENSE", "MIT", "green"),
            { div: [
                { align: "center" },
                {h3: ["Createmeal"]},
                {
                    p: [
                        { align: "center" },
                        {span: ["HTML generator powered by json"]},
                        {br:""},
                        {a: { href: "#",  span: ["Explore the docs"]}}
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
            style: "margin-right:5px;",
            href: link,
            img: {
                src: `https://img.shields.io/badge/${label}-${message}-${color}`,
            },
        },
    };
}
