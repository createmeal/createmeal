import assert from "assert";
import createmeal from "../src/index.js";
import tags from "../src/tags.js";
describe("tag", function () {
    let testNumber = "03";
    let tagName = "a";
    describe(`${testNumber} - tag "${tags[tagName].tag}": ${tags[tagName].Description}`, function () {
        it(`${testNumber}.1 - when value is string, should set textContent`, function () {
            const input = {
                a: "textContent value",
            };
            const expected = `<a>textContent value</a>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    testNumber = 4;
    tagName = "abbr";
    describe(`${testNumber} - tag "${tags[tagName].tag}": ${tags[tagName].Description}`, function () {
        it(`${testNumber}.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    testNumber = 5;
    tagName = "acronym";
    describe(`${testNumber} - tag "${tags[tagName].tag}": ${tags[tagName].Description}`, function () {
        it(`${testNumber}.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    testNumber = 6;
    tagName = "address";
    describe(`${testNumber} - tag "${tags[tagName].tag}": ${tags[tagName].Description}`, function () {
        it(`${testNumber}.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    testNumber = 7;
    tagName = "applet";
    describe(`${testNumber} - tag "${tags[tagName].tag}": ${tags[tagName].Description}`, function () {
        it(`${testNumber}.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`8 - tag "${tags["area"].tag}": ${tags["area"].Description}`, function () {
        const tagName = "area";
        it(`8.1 - when {"area":"textContent value"}, should return: <${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`9 - tag "${tags["article"].tag}": ${tags["article"].Description}`, function () {
        const tagName = "article";
        it(`9.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`10 - tag "${tags["aside"].tag}": ${tags["aside"].Description}`, function () {
        const tagName = "aside";
        it(`10.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`11 - tag "${tags["audio"].tag}": ${tags["audio"].Description}`, function () {
        const tagName = "audio";
        it(`11.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`11 - tag "${tags["audio"].tag}": ${tags["audio"].Description}`, function () {
        const tagName = "audio";
        it(`11.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`12 - tag "${tags["b"].tag}": ${tags["b"].Description}`, function () {
        const tagName = "b";
        it(`12.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`13 - tag "${tags["base"].tag}": ${tags["base"].Description}`, function () {
        const tagName = "base";
        it(`13.1 - when {"area":"textContent value"}, should return: <${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`14 - tag "${tags["basefont"].tag}": ${tags["basefont"].Description}`, function () {
        const tagName = "basefont";
        it(`14.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`15 - tag "${tags["bb"].tag}": ${tags["bb"].Description}`, function () {
        const tagName = "bb";
        it(`15.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`16 - tag "${tags["bdi"].tag}": ${tags["bdi"].Description}`, function () {
        const tagName = "bdi";
        it(`16.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`17 - tag "${tags["bdo"].tag}": ${tags["bdo"].Description}`, function () {
        const tagName = "bdo";
        it(`17.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`18 - tag "${tags["big"].tag}": ${tags["big"].Description}`, function () {
        const tagName = "big";
        it(`18.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`19 - tag "${tags["blockquote"].tag}": ${tags["blockquote"].Description}`, function () {
        const tagName = "blockquote";
        it(`19.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`20 - tag "${tags["body"].tag}": ${tags["body"].Description}`, function () {
        const tagName = "body";
        it(`20.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`21 - tag "${tags["br"].tag}": ${tags["br"].Description}`, function () {
        const tagName = "br";
        it(`21.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`22 - tag "${tags["button"].tag}": ${tags["button"].Description}`, function () {
        const tagName = "button";
        it(`22.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`23 - tag "${tags["canvas"].tag}": ${tags["canvas"].Description}`, function () {
        const tagName = "canvas";
        it(`23.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`24 - tag "${tags["caption"].tag}": ${tags["caption"].Description}`, function () {
        const tagName = "caption";
        it(`24.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`25 - tag "${tags["center"].tag}": ${tags["center"].Description}`, function () {
        const tagName = "center";
        it(`25.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`26 - tag "${tags["cite"].tag}": ${tags["cite"].Description}`, function () {
        const tagName = "cite";
        it(`26.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`27 - tag "${tags["code"].tag}": ${tags["code"].Description}`, function () {
        const tagName = "code";
        it(`27.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`28 - tag "${tags["col"].tag}": ${tags["col"].Description}`, function () {
        const tagName = "col";
        it(`28.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`29 - tag "${tags["colgroup"].tag}": ${tags["colgroup"].Description}`, function () {
        const tagName = "colgroup";
        it(`29.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`30 - tag "${tags["command"].tag}": ${tags["command"].Description}`, function () {
        const tagName = "command";
        it(`30.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`31 - tag "${tags["data"].tag}": ${tags["data"].Description}`, function () {
        const tagName = "data";
        it(`31.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`32 - tag "${tags["datagrid"].tag}": ${tags["datagrid"].Description}`, function () {
        const tagName = "datagrid";
        it(`32.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`33 - tag "${tags["datalist"].tag}": ${tags["datalist"].Description}`, function () {
        const tagName = "datalist";
        it(`33.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`34 - tag "${tags["dd"].tag}": ${tags["dd"].Description}`, function () {
        const tagName = "dd";
        it(`34.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`35 - tag "${tags["del"].tag}": ${tags["del"].Description}`, function () {
        const tagName = "del";
        it(`35.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`37 - tag "${tags["details"].tag}": ${tags["details"].Description}`, function () {
        const tagName = "details";
        it(`37.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`38 - tag "${tags["dfn"].tag}": ${tags["dfn"].Description}`, function () {
        const tagName = "dfn";
        it(`38.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`39 - tag "${tags["dialog"].tag}": ${tags["dialog"].Description}`, function () {
        const tagName = "dialog";
        it(`39.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`40 - tag "${tags["dir"].tag}": ${tags["dir"].Description}`, function () {
        const tagName = "dir";
        it(`40.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`41 - tag "${tags["div"].tag}": ${tags["div"].Description}`, function () {
        const tagName = "div";
        it(`41.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`42 - tag "${tags["dl"].tag}": ${tags["dl"].Description}`, function () {
        const tagName = "dl";
        it(`42.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`43 - tag "${tags["dt"].tag}": ${tags["dt"].Description}`, function () {
        const tagName = "dt";
        it(`43.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`44 - tag "${tags["em"].tag}": ${tags["em"].Description}`, function () {
        const tagName = "em";
        it(`44.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`45 - tag "${tags["embed"].tag}": ${tags["embed"].Description}`, function () {
        const tagName = "embed";
        it(`45.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`46 - tag "${tags["eventsource"].tag}": ${tags["eventsource"].Description}`, function () {
        const tagName = "eventsource";
        it(`46.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`47 - tag "${tags["fieldset"].tag}": ${tags["fieldset"].Description}`, function () {
        const tagName = "fieldset";
        it(`47.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`48 - tag "${tags["figcaption"].tag}": ${tags["figcaption"].Description}`, function () {
        const tagName = "figcaption";
        it(`48.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`49 - tag "${tags["figure"].tag}": ${tags["figure"].Description}`, function () {
        const tagName = "figure";
        it(`49.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`50 - tag "${tags["font"].tag}": ${tags["font"].Description}`, function () {
        const tagName = "font";
        it(`50.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`51 - tag "${tags["footer"].tag}": ${tags["footer"].Description}`, function () {
        const tagName = "footer";
        it(`51.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`52 - tag "${tags["form"].tag}": ${tags["form"].Description}`, function () {
        const tagName = "form";
        it(`52.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`53 - tag "${tags["frame"].tag}": ${tags["frame"].Description}`, function () {
        const tagName = "frame";
        it(`53.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`54 - tag "${tags["frameset"].tag}": ${tags["frameset"].Description}`, function () {
        const tagName = "frameset";
        it(`54.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function () {
            let input = {};
            input[tagName] = "textContent value";
            const expected = `<${tagName}>textContent value</${tagName}>`;
            assert.equal(createmeal.toHtml(input), expected);
        });
    });

    describe(`55 - Test textContent for non-self-closing tags`, function () {
        it(`Should return text content for tag h1`, function () {
            assert.equal(
                createmeal.toHtml({ h1: "textContent value" }),
                `<h1>textContent value</h1>`
            );
        });
        it(`Should return text content for tag head`, function () {
            assert.equal(
                createmeal.toHtml({ head: "textContent value" }),
                `<head>textContent value</head>`
            );
        });
        it(`Should return text content for tag header`, function () {
            assert.equal(
                createmeal.toHtml({ header: "textContent value" }),
                `<header>textContent value</header>`
            );
        });
        it(`Should return text content for tag hgroup`, function () {
            assert.equal(
                createmeal.toHtml({ hgroup: "textContent value" }),
                `<hgroup>textContent value</hgroup>`
            );
        });
        it(`Should return text content for tag html`, function () {
            assert.equal(
                createmeal.toHtml({ html: "textContent value" }),
                `<html>textContent value</html>`
            );
        });
        it(`Should return text content for tag i`, function () {
            assert.equal(
                createmeal.toHtml({ i: "textContent value" }),
                `<i>textContent value</i>`
            );
        });
        it(`Should return text content for tag iframe`, function () {
            assert.equal(
                createmeal.toHtml({ iframe: "textContent value" }),
                `<iframe>textContent value</iframe>`
            );
        });
        it(`Should return text content for tag ins`, function () {
            assert.equal(
                createmeal.toHtml({ ins: "textContent value" }),
                `<ins>textContent value</ins>`
            );
        });
        it(`Should return text content for tag isindex`, function () {
            assert.equal(
                createmeal.toHtml({ isindex: "textContent value" }),
                `<isindex>textContent value</isindex>`
            );
        });
        it(`Should return text content for tag kbd`, function () {
            assert.equal(
                createmeal.toHtml({ kbd: "textContent value" }),
                `<kbd>textContent value</kbd>`
            );
        });
        it(`Should return text content for tag keygen`, function () {
            assert.equal(
                createmeal.toHtml({ keygen: "textContent value" }),
                `<keygen>textContent value</keygen>`
            );
        });
        it(`Should return text content for tag label`, function () {
            assert.equal(
                createmeal.toHtml({ label: "textContent value" }),
                `<label>textContent value</label>`
            );
        });
        it(`Should return text content for tag legend`, function () {
            assert.equal(
                createmeal.toHtml({ legend: "textContent value" }),
                `<legend>textContent value</legend>`
            );
        });
        it(`Should return text content for tag li`, function () {
            assert.equal(
                createmeal.toHtml({ li: "textContent value" }),
                `<li>textContent value</li>`
            );
        });
        it(`Should return text content for tag map`, function () {
            assert.equal(
                createmeal.toHtml({ map: "textContent value" }),
                `<map>textContent value</map>`
            );
        });
        it(`Should return text content for tag mark`, function () {
            assert.equal(
                createmeal.toHtml({ mark: "textContent value" }),
                `<mark>textContent value</mark>`
            );
        });
        it(`Should return text content for tag menu`, function () {
            assert.equal(
                createmeal.toHtml({ menu: "textContent value" }),
                `<menu>textContent value</menu>`
            );
        });
        it(`Should return text content for tag meter`, function () {
            assert.equal(
                createmeal.toHtml({ meter: "textContent value" }),
                `<meter>textContent value</meter>`
            );
        });
        it(`Should return text content for tag nav`, function () {
            assert.equal(
                createmeal.toHtml({ nav: "textContent value" }),
                `<nav>textContent value</nav>`
            );
        });
        it(`Should return text content for tag noframes`, function () {
            assert.equal(
                createmeal.toHtml({ noframes: "textContent value" }),
                `<noframes>textContent value</noframes>`
            );
        });
        it(`Should return text content for tag noscript`, function () {
            assert.equal(
                createmeal.toHtml({ noscript: "textContent value" }),
                `<noscript>textContent value</noscript>`
            );
        });
        it(`Should return text content for tag object`, function () {
            assert.equal(
                createmeal.toHtml({ object: "textContent value" }),
                `<object>textContent value</object>`
            );
        });
        it(`Should return text content for tag ol`, function () {
            assert.equal(
                createmeal.toHtml({ ol: "textContent value" }),
                `<ol>textContent value</ol>`
            );
        });
        it(`Should return text content for tag optgroup`, function () {
            assert.equal(
                createmeal.toHtml({ optgroup: "textContent value" }),
                `<optgroup>textContent value</optgroup>`
            );
        });
        it(`Should return text content for tag option`, function () {
            assert.equal(
                createmeal.toHtml({ option: "textContent value" }),
                `<option>textContent value</option>`
            );
        });
        it(`Should return text content for tag output`, function () {
            assert.equal(
                createmeal.toHtml({ output: "textContent value" }),
                `<output>textContent value</output>`
            );
        });
        it(`Should return text content for tag p`, function () {
            assert.equal(
                createmeal.toHtml({ p: "textContent value" }),
                `<p>textContent value</p>`
            );
        });
        it(`Should return text content for tag pre`, function () {
            assert.equal(
                createmeal.toHtml({ pre: "textContent value" }),
                `<pre>textContent value</pre>`
            );
        });
        it(`Should return text content for tag progress`, function () {
            assert.equal(
                createmeal.toHtml({ progress: "textContent value" }),
                `<progress>textContent value</progress>`
            );
        });
        it(`Should return text content for tag q`, function () {
            assert.equal(
                createmeal.toHtml({ q: "textContent value" }),
                `<q>textContent value</q>`
            );
        });
        it(`Should return text content for tag rp`, function () {
            assert.equal(
                createmeal.toHtml({ rp: "textContent value" }),
                `<rp>textContent value</rp>`
            );
        });
        it(`Should return text content for tag rt`, function () {
            assert.equal(
                createmeal.toHtml({ rt: "textContent value" }),
                `<rt>textContent value</rt>`
            );
        });
        it(`Should return text content for tag ruby`, function () {
            assert.equal(
                createmeal.toHtml({ ruby: "textContent value" }),
                `<ruby>textContent value</ruby>`
            );
        });
        it(`Should return text content for tag s`, function () {
            assert.equal(
                createmeal.toHtml({ s: "textContent value" }),
                `<s>textContent value</s>`
            );
        });
        it(`Should return text content for tag samp`, function () {
            assert.equal(
                createmeal.toHtml({ samp: "textContent value" }),
                `<samp>textContent value</samp>`
            );
        });
        it(`Should return text content for tag script`, function () {
            assert.equal(
                createmeal.toHtml({ script: "textContent value" }),
                `<script>textContent value</script>`
            );
        });
        it(`Should return text content for tag section`, function () {
            assert.equal(
                createmeal.toHtml({ section: "textContent value" }),
                `<section>textContent value</section>`
            );
        });
        it(`Should return text content for tag select`, function () {
            assert.equal(
                createmeal.toHtml({ select: "textContent value" }),
                `<select>textContent value</select>`
            );
        });
        it(`Should return text content for tag small`, function () {
            assert.equal(
                createmeal.toHtml({ small: "textContent value" }),
                `<small>textContent value</small>`
            );
        });
        it(`Should return text content for tag span`, function () {
            assert.equal(
                createmeal.toHtml({ span: "textContent value" }),
                `<span>textContent value</span>`
            );
        });
        it(`Should return text content for tag strike`, function () {
            assert.equal(
                createmeal.toHtml({ strike: "textContent value" }),
                `<strike>textContent value</strike>`
            );
        });
        it(`Should return text content for tag strong`, function () {
            assert.equal(
                createmeal.toHtml({ strong: "textContent value" }),
                `<strong>textContent value</strong>`
            );
        });
        it(`Should return text content for tag style`, function () {
            assert.equal(
                createmeal.toHtml({ style: "textContent value" }),
                `<style>textContent value</style>`
            );
        });
        it(`Should return text content for tag sub`, function () {
            assert.equal(
                createmeal.toHtml({ sub: "textContent value" }),
                `<sub>textContent value</sub>`
            );
        });
        it(`Should return text content for tag sup`, function () {
            assert.equal(
                createmeal.toHtml({ sup: "textContent value" }),
                `<sup>textContent value</sup>`
            );
        });
        it(`Should return text content for tag table`, function () {
            assert.equal(
                createmeal.toHtml({ table: "textContent value" }),
                `<table>textContent value</table>`
            );
        });
        it(`Should return text content for tag tbody`, function () {
            assert.equal(
                createmeal.toHtml({ tbody: "textContent value" }),
                `<tbody>textContent value</tbody>`
            );
        });
        it(`Should return text content for tag td`, function () {
            assert.equal(
                createmeal.toHtml({ td: "textContent value" }),
                `<td>textContent value</td>`
            );
        });
        it(`Should return text content for tag textarea`, function () {
            assert.equal(
                createmeal.toHtml({ textarea: "textContent value" }),
                `<textarea>textContent value</textarea>`
            );
        });
        it(`Should return text content for tag tfoot`, function () {
            assert.equal(
                createmeal.toHtml({ tfoot: "textContent value" }),
                `<tfoot>textContent value</tfoot>`
            );
        });
        it(`Should return text content for tag th`, function () {
            assert.equal(
                createmeal.toHtml({ th: "textContent value" }),
                `<th>textContent value</th>`
            );
        });
        it(`Should return text content for tag thead`, function () {
            assert.equal(
                createmeal.toHtml({ thead: "textContent value" }),
                `<thead>textContent value</thead>`
            );
        });
        it(`Should return text content for tag time`, function () {
            assert.equal(
                createmeal.toHtml({ time: "textContent value" }),
                `<time>textContent value</time>`
            );
        });
        it(`Should return text content for tag title`, function () {
            assert.equal(
                createmeal.toHtml({ title: "textContent value" }),
                `<title>textContent value</title>`
            );
        });
        it(`Should return text content for tag tr`, function () {
            assert.equal(
                createmeal.toHtml({ tr: "textContent value" }),
                `<tr>textContent value</tr>`
            );
        });
        it(`Should return text content for tag tt`, function () {
            assert.equal(
                createmeal.toHtml({ tt: "textContent value" }),
                `<tt>textContent value</tt>`
            );
        });
        it(`Should return text content for tag u`, function () {
            assert.equal(
                createmeal.toHtml({ u: "textContent value" }),
                `<u>textContent value</u>`
            );
        });
        it(`Should return text content for tag ul`, function () {
            assert.equal(
                createmeal.toHtml({ ul: "textContent value" }),
                `<ul>textContent value</ul>`
            );
        });
        it(`Should return text content for tag var`, function () {
            assert.equal(
                createmeal.toHtml({ var: "textContent value" }),
                `<var>textContent value</var>`
            );
        });
        it(`Should return text content for tag video`, function () {
            assert.equal(
                createmeal.toHtml({ video: "textContent value" }),
                `<video>textContent value</video>`
            );
        });
    });

    describe(`56 - Test textContent for self-closing tags`, function () {        
        it(`Should return text content for tag hr`, function () {
            assert.equal(
                createmeal.toHtml({ hr: "textContent value" }),
                `<hr>`
            );
        });
        it(`Should return text content for tag img`, function () {
            assert.equal(
                createmeal.toHtml({ img: "textContent value" }),
                `<img>`
            );
        });
        it(`Should return text content for tag input`, function () {
            assert.equal(
                createmeal.toHtml({ input: "textContent value" }),
                `<input>`
            );
        });
        it(`Should return text content for tag link`, function () {
            assert.equal(
                createmeal.toHtml({ link: "textContent value" }),
                `<link>`
            );
        });
        it(`Should return text content for tag meta`, function () {
            assert.equal(
                createmeal.toHtml({ meta: "textContent value" }),
                `<meta>`
            );
        });
        it(`Should return text content for tag param`, function () {
            assert.equal(
                createmeal.toHtml({ param: "textContent value" }),
                `<param>`
            );
        });
        it(`Should return text content for tag source`, function () {
            assert.equal(
                createmeal.toHtml({ source: "textContent value" }),
                `<source>`
            );
        });        
        it(`Should return text content for tag track`, function () {
            assert.equal(
                createmeal.toHtml({ track: "textContent value" }),
                `<track>`
            );
        });
        it(`Should return text content for tag wbr`, function () {
            assert.equal(
                createmeal.toHtml({ wbr: "textContent value" }),
                `<wbr>`
            );
        });
    });
});
