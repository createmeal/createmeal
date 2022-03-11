<!DOCTYPE html>
<html>

  <body>
    <div id="top"></div><a style="margin-left:5px;" class="badge badge-tryonline" href="https://npm.runkit.com/createmeal"><img src="https://img.shields.io/badge/Try it online on-RunKit-f55fa6"></a><span> </span><a style="margin-left:5px;" class="badge badge-contributors" href="https://github.com/createmeal/createmeal/graphs/contributors"><img src="https://img.shields.io/badge/CONTRIBUTORS-3-brightgreen"></a><span> </span><a style="margin-left:5px;" class="badge badge-issues" href="https://github.com/createmeal/createmeal/issues"><img src="https://img.shields.io/badge/ISSUES-6-yellow"></a><span> </span><a style="margin-left:5px;" class="badge" href="https://github.com/createmeal/createmeal/blob/master/LICENSE"><img src="https://img.shields.io/badge/LICENSE-MIT-blue"></a><span> </span><a style="margin-left:5px;" href="https://www.jsdelivr.com/package/npm/createmeal"><img src="https://data.jsdelivr.com/v1/package/npm/createmeal/badge"></a><span> </span><a style="margin-left:5px;" class="badge" href="https://www.npmjs.com/package/createmeal"><img src="https://img.shields.io/badge/NPM-2.1.0-red"></a><span> </span><a style="margin-left:5px;" class="badge" href="#usage"><img src="https://img.shields.io/badge/REPO STATUS-ACTIVE-green"></a><span> </span><a href="https://openbase.com/js/createmeal?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge"><img src="https://badges.openbase.com/js/featured/createmeal.svg?token=qN8WsbWRkOBtfXJ9tNG0KnUwxkjPAjs6HUSniqdmrCU=" alt="Featured on Openbase"></a><span> </span><a href="https://codecov.io/gh/createmeal/createmeal"><img src="https://codecov.io/gh/createmeal/createmeal/branch/master/graph/badge.svg?token=RG5SQ286T0"></a>
    <div align="center">
      <h3>Createmeal</h3>
      <p align="center"><span>HTML generator powered by json</span><br><a href="https://createmeal.org"><strong>Explore the full documentation »</strong></a></p>
      <p><a href="#"><span>View Demo</span></a><span> · </span><a href="https://github.com/createmeal/createmeal/issues"><span>Report Bug</span></a><span> · </span><a href="https://github.com/createmeal/createmeal/issues"><span>Request Feature</span></a></p>
    </div>
    <details>
      <summary>Table of Contents</summary>
      <ol>
        <li><a href="#about-the-project"><span>About The Project</span></a>
          <ul>
            <li><a href="#built-with"><span>Built With</span></a></li>
          </ul>
        </li>
        <li><a href="#getting-started"><span>Getting Started</span></a>
          <ul>
            <li><a href="#installation"><span>Installation</span></a></li>
            <li><a href="#loading"><span>Loading</span></a></li>
          </ul>
        </li>
        <li><a href="#usage"><span>Usage</span></a>
          <ul>
            <li><a href="#base-specification"><span>Base Specification</span></a></li>
          </ul>
        </li>
        <li><a href="#license"><span>License</span></a></li>
      </ol>
    </details>
    <section>
      <h2>About The Project</h2>
      <p>HTML is the standard way to produce web page content and there are several other options to produce text estructures like markdown, jsml, WackoWiki Markup, AsciiDoc, Contentflow, and others.</p>
      <p>Createmeal gives us the advantage of using the same HTML tag names and similar semantic, but using json in its sintax instead of xml. It decreases the need of learn a new language, brings a better way to generate layout content programatically on javascript side, componentize, create templates, serialize text to object, and all the flexibility of using json.</p>
      <p>Of course, for many people, HTML is enough, but it is great when you have good alternatives to solve problems, and turn live better.</p>
    </section>
    <p align="right"><a href="#top"><span>back to top</span></a></p>
    <section>
      <h3>Built With</h3>
      <p>The entire library is created using vanilla javascript. All dependencies, HTML, images and other things are used only for Development, testing, and example porpose.</p>
    </section>
    <p align="right"><a href="#top"><span>back to top</span></a></p>
    <section>
      <h2>Getting Started</h2>
      <p><span>Try to accessing the guide for complete reference: </span><a href="https://createmeal.org"><strong>Getting Started</strong></a></p>
      <h3>Installation</h3>
      <ul>
        <li><span>NPM</span><pre><code>npm i createmeal</code></pre>
        </li>
        <li><span>CDN</span><pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/createmeal@3.0.0/dist/createmeal-legacy.js"&gt;&lt;/script&gt;</code></pre>
        </li>
      </ul>
      <h3>Loading</h3>
      <ul>
        <li><span>ES Module Browser (ESM)</span><pre><code>&lt;script type="module" src="https://cdn.jsdelivr.net/npm/createmeal@2.1.0/dist/createmeal.js"&gt;&lt;/script&gt;
&lt;script type="module"&gt;
    import {toHtml} from "createmeal"
&lt;/script&gt;</code></pre>
        </li>
        <li><span>HTML script type='application/javascript'</span><pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/createmeal@2.1.0/dist/createmeal-legacy.js"&gt;&lt;/script&gt;
&lt;script type="application/javascript"&gt;
    createmeal.toHtml();
&lt;/script&gt;</code></pre>
        </li>
        <li><span>ES Module NodeJs (MJS)</span><pre><code>import {toHtml} from 'createmeal';</code></pre>
        </li>
        <li><span>Typescript</span><pre><code>import {toHtml} from 'createmeal';</code></pre>
        </li>
        <li><span>CommonJS (CJS)</span><pre><code>const {toHtml} = require('createmeal/dist/createmeal-legacy-node').createmeal;</code></pre>
        </li>
      </ul>
    </section>
    <p align="right"><a href="#top"><span>back to top</span></a></p>
    <section>
      <h2>Usage</h2>
      <p><span>
                                        The main metod of createmeal is toHtml({}), so createmeal.toHtml({div:{}}),
                                        will return &lt;div&gt;&lt;/div&gt;.
                                    </span></p>
      <h3>Base Specification</h3>
      <ul>
        <li><span>Simple text: Text is represented by an array of strings. </span><pre><code>createmeal.toHtml(["test"]);\\ "test"</code></pre>
        </li>
        <li><span>Paragraphe: Tag text content can be an array of strings. </span><pre><code>{"p":["teste"]} \\&lt;p&gt;teste&lt;/p&gt;</code></pre>
        </li>
        <li><span>paragraphe composed by array of strings: Multiple strings compose an unique text. </span><pre><code>{"p":["test","Of","Strings"]} \\&lt;p&gt;testOfStrings&lt;/p&gt;</code></pre>
        </li>
        <li><span>Tag defined by array of strings: is not the default way, but is an available option.</span><pre><code>["&lt;h1&gt;Tag h1 generated by text&lt;/h1&gt;"] \\&lt;h1&gt;Tag h1 generated by text&lt;/h1&gt;</code></pre>
        </li>
      </ul>
      <h3>Incorporate in your application</h3>
      <ul>
        <li><span>CDN</span><pre><code>
&lt;html&gt;
    &lt;body&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/createmeal@3.0.0/dist/createmeal-legacy.js"&gt;&lt;/script&gt;
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
</code></pre>
        </li>
        <li><span>CDN Result</span><pre><code>&lt;html lang="en"&gt;
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
</code></pre>
        </li>
      </ul>
    </section>
    <p align="right"><a href="#top"><span>back to top</span></a></p>
    <section>
      <h2>License</h2><a href="https://github.com/createmeal/createmeal/blob/master/LICENSE"><span>MIT</span></a>
    </section>
    <p align="right"><a href="#top"><span>back to top</span></a></p>
  </body>

</html>