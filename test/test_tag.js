import assert from "assert";
import createmeal from "../src/index.js";
import {describe,it} from "mocha";

describe("tag", function () {
    describe(`Test textContent for non-self-closing tags`, function () {
        it(`Should return text content for tag a`, function () {
            assert.equal(
                createmeal.toHtml({ a: "textContent value" }),
                `<a>textContent value</a>`
            );
        });
        it(`Should return text content for tag abbr`, function () {
            assert.equal(
                createmeal.toHtml({ abbr: "textContent value" }),
                `<abbr>textContent value</abbr>`
            );
        });
        it(`Should return text content for tag acronym`, function () {
            assert.equal(
                createmeal.toHtml({ acronym: "textContent value" }),
                `<acronym>textContent value</acronym>`
            );
        });
        it(`Should return text content for tag address`, function () {
            assert.equal(
                createmeal.toHtml({ address: "textContent value" }),
                `<address>textContent value</address>`
            );
        });
        it(`Should return text content for tag applet`, function () {
            assert.equal(
                createmeal.toHtml({ applet: "textContent value" }),
                `<applet>textContent value</applet>`
            );
        });
        it(`Should return text content for tag article`, function () {
            assert.equal(
                createmeal.toHtml({ article: "textContent value" }),
                `<article>textContent value</article>`
            );
        });
        it(`Should return text content for tag aside`, function () {
            assert.equal(
                createmeal.toHtml({ aside: "textContent value" }),
                `<aside>textContent value</aside>`
            );
        });
        it(`Should return text content for tag audio`, function () {
            assert.equal(
                createmeal.toHtml({ audio: "textContent value" }),
                `<audio>textContent value</audio>`
            );
        });
        it(`Should return text content for tag b`, function () {
            assert.equal(
                createmeal.toHtml({ b: "textContent value" }),
                `<b>textContent value</b>`
            );
        });
        it(`Should return text content for tag basefont`, function () {
            assert.equal(
                createmeal.toHtml({ basefont: "textContent value" }),
                `<basefont>textContent value</basefont>`
            );
        });
        it(`Should return text content for tag bb`, function () {
            assert.equal(
                createmeal.toHtml({ bb: "textContent value" }),
                `<bb>textContent value</bb>`
            );
        });
        it(`Should return text content for tag bdi`, function () {
            assert.equal(
                createmeal.toHtml({ bdi: "textContent value" }),
                `<bdi>textContent value</bdi>`
            );
        });
        it(`Should return text content for tag bdo`, function () {
            assert.equal(
                createmeal.toHtml({ bdo: "textContent value" }),
                `<bdo>textContent value</bdo>`
            );
        });
        it(`Should return text content for tag big`, function () {
            assert.equal(
                createmeal.toHtml({ big: "textContent value" }),
                `<big>textContent value</big>`
            );
        });
        it(`Should return text content for tag blockquote`, function () {
            assert.equal(
                createmeal.toHtml({ blockquote: "textContent value" }),
                `<blockquote>textContent value</blockquote>`
            );
        });
        it(`Should return text content for tag body`, function () {
            assert.equal(
                createmeal.toHtml({ body: "textContent value" }),
                `<body>textContent value</body>`
            );
        });
        it(`Should return text content for tag button`, function () {
            assert.equal(
                createmeal.toHtml({ button: "textContent value" }),
                `<button>textContent value</button>`
            );
        });
        it(`Should return text content for tag canvas`, function () {
            assert.equal(
                createmeal.toHtml({ canvas: "textContent value" }),
                `<canvas>textContent value</canvas>`
            );
        });
        it(`Should return text content for tag caption`, function () {
            assert.equal(
                createmeal.toHtml({ caption: "textContent value" }),
                `<caption>textContent value</caption>`
            );
        });
        it(`Should return text content for tag center`, function () {
            assert.equal(
                createmeal.toHtml({ center: "textContent value" }),
                `<center>textContent value</center>`
            );
        });
        it(`Should return text content for tag cite`, function () {
            assert.equal(
                createmeal.toHtml({ cite: "textContent value" }),
                `<cite>textContent value</cite>`
            );
        });
        it(`Should return text content for tag code`, function () {
            assert.equal(
                createmeal.toHtml({ code: "textContent value" }),
                `<code>textContent value</code>`
            );
        });
        it(`Should return text content for tag colgroup`, function () {
            assert.equal(
                createmeal.toHtml({ colgroup: "textContent value" }),
                `<colgroup>textContent value</colgroup>`
            );
        });
        it(`Should return text content for tag command`, function () {
            assert.equal(
                createmeal.toHtml({ command: "textContent value" }),
                `<command>textContent value</command>`
            );
        });
        it(`Should return text content for tag data`, function () {
            assert.equal(
                createmeal.toHtml({ data: "textContent value" }),
                `<data>textContent value</data>`
            );
        });
        it(`Should return text content for tag datagrid`, function () {
            assert.equal(
                createmeal.toHtml({ datagrid: "textContent value" }),
                `<datagrid>textContent value</datagrid>`
            );
        });
        it(`Should return text content for tag datalist`, function () {
            assert.equal(
                createmeal.toHtml({ datalist: "textContent value" }),
                `<datalist>textContent value</datalist>`
            );
        });
        it(`Should return text content for tag dd`, function () {
            assert.equal(
                createmeal.toHtml({ dd: "textContent value" }),
                `<dd>textContent value</dd>`
            );
        });
        it(`Should return text content for tag del`, function () {
            assert.equal(
                createmeal.toHtml({ del: "textContent value" }),
                `<del>textContent value</del>`
            );
        });
        it(`Should return text content for tag details`, function () {
            assert.equal(
                createmeal.toHtml({ details: "textContent value" }),
                `<details>textContent value</details>`
            );
        });
        it(`Should return text content for tag dfn`, function () {
            assert.equal(
                createmeal.toHtml({ dfn: "textContent value" }),
                `<dfn>textContent value</dfn>`
            );
        });
        it(`Should return text content for tag dialog`, function () {
            assert.equal(
                createmeal.toHtml({ dialog: "textContent value" }),
                `<dialog>textContent value</dialog>`
            );
        });
        it(`Should return text content for tag dir`, function () {
            assert.equal(
                createmeal.toHtml({ dir: "textContent value" }),
                `<dir>textContent value</dir>`
            );
        });
        it(`Should return text content for tag div`, function () {
            assert.equal(
                createmeal.toHtml({ div: "textContent value" }),
                `<div>textContent value</div>`
            );
        });
        it(`Should return text content for tag dl`, function () {
            assert.equal(
                createmeal.toHtml({ dl: "textContent value" }),
                `<dl>textContent value</dl>`
            );
        });
        it(`Should return text content for tag dt`, function () {
            assert.equal(
                createmeal.toHtml({ dt: "textContent value" }),
                `<dt>textContent value</dt>`
            );
        });
        it(`Should return text content for tag em`, function () {
            assert.equal(
                createmeal.toHtml({ em: "textContent value" }),
                `<em>textContent value</em>`
            );
        });
        it(`Should return text content for tag eventsource`, function () {
            assert.equal(
                createmeal.toHtml({ eventsource: "textContent value" }),
                `<eventsource>textContent value</eventsource>`
            );
        });
        it(`Should return text content for tag fieldset`, function () {
            assert.equal(
                createmeal.toHtml({ fieldset: "textContent value" }),
                `<fieldset>textContent value</fieldset>`
            );
        });
        it(`Should return text content for tag figcaption`, function () {
            assert.equal(
                createmeal.toHtml({ figcaption: "textContent value" }),
                `<figcaption>textContent value</figcaption>`
            );
        });
        it(`Should return text content for tag figure`, function () {
            assert.equal(
                createmeal.toHtml({ figure: "textContent value" }),
                `<figure>textContent value</figure>`
            );
        });
        it(`Should return text content for tag font`, function () {
            assert.equal(
                createmeal.toHtml({ font: "textContent value" }),
                `<font>textContent value</font>`
            );
        });
        it(`Should return text content for tag footer`, function () {
            assert.equal(
                createmeal.toHtml({ footer: "textContent value" }),
                `<footer>textContent value</footer>`
            );
        });
        it(`Should return text content for tag form`, function () {
            assert.equal(
                createmeal.toHtml({ form: "textContent value" }),
                `<form>textContent value</form>`
            );
        });
        it(`Should return text content for tag frame`, function () {
            assert.equal(
                createmeal.toHtml({ frame: "textContent value" }),
                `<frame>textContent value</frame>`
            );
        });
        it(`Should return text content for tag frameset`, function () {
            assert.equal(
                createmeal.toHtml({ frameset: "textContent value" }),
                `<frameset>textContent value</frameset>`
            );
        });
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

    describe(`Test textContent for self-closing tags`, function () {
        it(`Should return tag source`, function () {
            assert.equal(
                createmeal.toHtml({ source: "textContent value" }),
                `<source>`
            );
        });
        it(`Should return tag input`, function () {
            assert.equal(
                createmeal.toHtml({ input: "textContent value" }),
                `<input>`
            );
        });
        it(`Should return tag embed`, function () {
            assert.equal(
                createmeal.toHtml({ embed: "textContent value" }),
                `<embed>`
            );
        });
        it(`Should return tag col`, function () {
            assert.equal(
                createmeal.toHtml({ col: "textContent value" }),
                `<col>`
            );
        });
        it(`Should return tag base`, function () {
            assert.equal(
                createmeal.toHtml({ base: "textContent value" }),
                `<base>`
            );
        });
        it(`Should return tag area`, function () {
            assert.equal(
                createmeal.toHtml({ area: "textContent value" }),
                `<area>`
            );
        });
        it(`Should return tag br`, function () {
            assert.equal(
                createmeal.toHtml({ br: "textContent value" }),
                `<br>`
            );
        });
        it(`Should return tag hr`, function () {
            assert.equal(
                createmeal.toHtml({ hr: "textContent value" }),
                `<hr>`
            );
        });
        it(`Should return tag img`, function () {
            assert.equal(
                createmeal.toHtml({ img: "textContent value" }),
                `<img>`
            );
        });
        it(`Should return tag input`, function () {
            assert.equal(
                createmeal.toHtml({ input: "textContent value" }),
                `<input>`
            );
        });
        it(`Should return tag link`, function () {
            assert.equal(
                createmeal.toHtml({ link: "textContent value" }),
                `<link>`
            );
        });
        it(`Should return tag meta`, function () {
            assert.equal(
                createmeal.toHtml({ meta: "textContent value" }),
                `<meta>`
            );
        });
        it(`Should return tag param`, function () {
            assert.equal(
                createmeal.toHtml({ param: "textContent value" }),
                `<param>`
            );
        });
        it(`Should return tag source`, function () {
            assert.equal(
                createmeal.toHtml({ source: "textContent value" }),
                `<source>`
            );
        });
        it(`Should return tag track`, function () {
            assert.equal(
                createmeal.toHtml({ track: "textContent value" }),
                `<track>`
            );
        });
        it(`Should return tag wbr`, function () {
            assert.equal(
                createmeal.toHtml({ wbr: "textContent value" }),
                `<wbr>`
            );
        });
    });
});
