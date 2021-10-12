const createmeal = require("./index");
const fs = require('fs');
const path = require('path');

let readme = [
    { div: { id: "top" } },
    {
        a: {
            href: "https://github.com/createmeal/createmeal/graphs/contributors",
            img: {
                src: "https://img.shields.io/badge/CONTRIBUTORS-2-brightgreen",
            }
        }
    },
    {
        a: {
            style: "margin-left:5px;",
            href: "https://github.com/createmeal/createmeal/graphs/contributors",
            img: { src: "https://img.shields.io/badge/LICENSE-MIT-green" }
        }
    }
];

const README_md = createmeal.toHtml(readme);
fs.writeFileSync(path.resolve(__dirname, "README.md"), README_md);