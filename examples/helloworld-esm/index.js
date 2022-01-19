import createmeal from "../../dist/createmeal.js";

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