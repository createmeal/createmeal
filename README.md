<!DOCTYPE html>
<html>
    <body>
        <div id="top"></div>
        <a
            style="margin-left: 5px"
            href="https://github.com/createmeal/createmeal/graphs/contributors"
            ><img
                src="https://img.shields.io/badge/CONTRIBUTORS-2-brightgreen" /></a
        ><span> </span
        ><a
            style="margin-left: 5px"
            href="https://github.com/createmeal/createmeal/issues"
            ><img src="https://img.shields.io/badge/ISSUES-0-yellow" /></a
        ><span> </span
        ><a
            style="margin-left: 5px"
            href="https://github.com/createmeal/createmeal/blob/master/LICENSE"
            ><img src="https://img.shields.io/badge/LICENSE-MIT-green" /></a
        ><span> </span
        ><a
            style="margin-left: 5px"
            href="https://www.jsdelivr.com/package/npm/createmeal"
            ><img
                src="https://data.jsdelivr.com/v1/package/npm/createmeal/badge"
        /></a>
        <div align="center">
            <h3>Createmeal</h3>
            <p align="center">
                <span>HTML generator powered by json</span><br /><a
                    href="#usage"
                    ><strong>Explore the docs »</strong></a
                >
            </p>
            <p>
                <a href="#"><span>View Demo</span></a
                ><span> · </span
                ><a href="https://github.com/createmeal/createmeal/issues"
                    ><span>Report Bug</span></a
                ><span> · </span
                ><a href="https://github.com/createmeal/createmeal/issues"
                    ><span>Request Feature</span></a
                >
            </p>
        </div>
        <details>
            <summary>Table of Contents</summary>
            <ol>
                <li>
                    <a href="#about-the-project"
                        ><span>About The Project</span></a
                    >
                    <ul>
                        <li>
                            <a href="#built-with"><span>Built With</span></a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#getting-started"><span>Getting Started</span></a>
                    <ul>
                        <li>
                            <a href="#installation"
                                ><span>Installation</span></a
                            >
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#usage"><span>Usage</span></a>
                    <ul>
                        <li>
                            <a href="#simple-example-of-usage-in-an-application"
                                ><span
                                    >Simple example of usage in an
                                    application</span
                                ></a
                            >
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#roadmap"><span>Roadmap</span></a>
                </li>
                <li>
                    <a href="#contributing"><span>Contributing</span></a>
                </li>
                <li>
                    <a href="#license"><span>License</span></a>
                </li>
                <li>
                    <a href="#contact"><span>Contact</span></a>
                </li>
                <li>
                    <a href="#acknowledgments"><span>Acknowledgments</span></a>
                </li>
            </ol>
        </details>
        <section>
            <h2>About The Project</h2>
            <p>
                HTML is the standard way to produce web page content and there
                are several other options to produce text estructures like
                markdown, jsml, WackoWiki Markup, AsciiDoc, Contentflow, and
                others. But to work with these alternatives at first you will
                need learn a new language, is not ease to produce content using
                javascript, and most of them has a strange sintax and some times
                worst then HTML.
            </p>
            <p>
                Createmeal gives us the same HTML tag names and semantic, but
                using json in its sintax. It decreases the need of learn a new
                language, gives us a better way to generate layout content
                powered by javascript, in additional to allow us storage source
                easilly in database if is needed, componentize, create
                templates, use other languages like yaml, and serialize text to
                object.
            </p>
            <p>
                Of course, for many people, HTML is excelent, but is great when
                you have good alternatives to solve problems, and turn live
                better.
            </p>
            <p align="right">
                <a href="#top"><span>back to top</span></a>
            </p>
        </section>
        <section>
            <h3>Built With</h3>
            <p>
                The entire library is actually created using javascript and the
                dependences and HTML is used only for Development and testing,
                and example porpose.
            </p>
        </section>
        <section>
            <h2>Getting Started</h2>
            <p>
                <span>Try to accessing the guide for complete reference: </span
                ><a href="#usage"><strong>Getting Started</strong></a>
            </p>
            <h3>Installation</h3>
            <ul>
                <li>
                    <span>npm</span>
                    <pre><code>npm i createmeal</code></pre>
                </li>
                <li>
                    <span>CDN</span>
                    <pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/createmeal@1.0.0/dist/createmeal.min.js"&gt;&lt;/script&gt;</code></pre>
                </li>
            </ul>
        </section>
        <section>
            <h2>Usage</h2>
            <p>
                <span>
                    The main metod of createmeal is toHtml({}), so
                    createmeal.toHtml({div:{}}), will return
                    &lt;div&gt;&lt;/div&gt;.
                </span>
            </p>
            <h3>Examples</h3>
            <ul>
                <li>
                    <span>attributes</span>
                    <pre><code>toHtml({
    div:{
        class:["container"]
    }
}) 
//&lt;tagName class="container"&gt;&lt;tagName class="container"&gt;</code></pre>
                </li>
                <li>
                    <span>textContent</span>
                    <pre><code>
toHtml({
    p:["Hello World!"]
}) 
//&lt;p&gt;Hello World!&lt;p&gt;
</code></pre>
                </li>
                <li>
                    <span>table</span>
                    <pre><code>
{
    table:{
        class: "table table-success table-striped table-hover",
        thead: { 
            tr: [
                { 
                    th: ["First"] 
                }, 
                { th: ["Second"] }, 
                { th: ["Third"] }
            ]
        },
        tbody: [
            {
                tr: [
                    { 
                        td: ["valor primeira coluna"] 
                    },
                    { td: ["valor segunda coluna"] },
                    { td: ["valor terceira coluna"] },
                ],
            },
            {
                tr: [
                    { td: ["linha 1 coluna A"] },
                    { td: ["linha 2 coluna B"] },
                    { td: ["linha 3 coluna C"] },
                ],
            },
        ],
    }
}
//result of table generation:
&lt;table class="table table-success table-striped table-hover"&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;First&lt;/th&gt;
            &lt;th&gt;Second&lt;/th&gt;
            &lt;th&gt;Third&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;valor primeira coluna&lt;/td&gt;
            &lt;td&gt;valor segunda coluna&lt;/td&gt;
            &lt;td&gt;valor terceira coluna&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;linha 1 coluna A&lt;/td&gt;
            &lt;td&gt;linha 2 coluna B&lt;/td&gt;
            &lt;td&gt;linha 3 coluna C&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;
</code></pre>
                </li>
                <h1 align="center">
                    <img
                        alt="table.png"
                        title="Table generated by createmeal"
                        src="./assets/table.png"
                    />
                </h1>
            </ul>
            <h3>Simple example of usage in an application</h3>
            <ul>
                <li>
                    <span>CDN</span>
                    <pre><code>
&lt;html&gt;
    &lt;body&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/createmeal@1.0.0/dist/createmeal.min.js"&gt;&lt;/script&gt;
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
</code></pre>
                </li>
                <li>
                    <span>CDN Result</span>
                    <pre><code>&lt;html lang="en"&gt;
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
        <h2>Roadmap</h2>
        <h2>Contributing</h2>
        <h2>License</h2>
        <h2>Contact</h2>
        <h2>Acknowledgments</h2>
    </body>
</html>
