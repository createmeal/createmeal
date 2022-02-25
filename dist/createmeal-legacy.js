!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("createmeal",[],t):"object"==typeof exports?exports.createmeal=t():e.createmeal=t()}(this,(function(){return(()=>{"use strict";var e={d:(t,i)=>{for(var r in i)e.o(i,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:i[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>c,toHtml:()=>u});const i={"!DOCTYPE":!0,"!DOCTYPE html":!0,img:!0,br:!0,hr:!0,link:!0,area:!0,base:!0,col:!0,embed:!0,input:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};class r{constructor(e){this.children=[],this.attributes=[],this.name=e}add(e){this.children.push(e)}addChildren(e){Array.isArray(e)&&e&&e.length>0?this.children=this.children.concat(e):Array.isArray(e)||"object"!=typeof e||this.add(e)}setAttribute(e,t){["html"].includes(e)||null===t?this.attributes.push(`${e}`):this.attributes.push(`${e}="${t}"`)}remove(e){let t=this.children.length;for(let i=0;i<t;i++)if(this.children[i]===e)return void this.children.splice(i,1)}getAttributes(){return this.attributes.join(" ")}getOpenTag(){return this.attributes.length>0?`<${this.name} ${this.getAttributes()}>`:`<${this.name}>`}getCloseTag(){return`</${this.name}>`}getChild(e){return this.children[e]}hasChildren(){return this.children.length>0}toHtml(){let e=[];for(let t=0,i=this.children.length;t<i;t++)e.push(this.getChild(t).toHtml());return this.getOpenTag()+e.join("")+this.getCloseTag()}}class n extends r{constructor(e){super(e)}add(e){}getOpenTag(){return this.name}getCloseTag(){return""}}class s extends r{constructor(e){super(e)}add(e){}getCloseTag(){return""}}const o={accept:{attribute:"accept",Elements:"<form>, <input>",Description:"List of types the server accepts, typically a file type."},"accept-charset":{attribute:"accept-charset",Elements:"<form>",Description:"List of supported charsets."},accesskey:{attribute:"accesskey",Elements:"Global attribute",Description:"Keyboard shortcut to activate or add focus to the element."},action:{attribute:"action",Elements:"<form>",Description:"The URI of a program that processes the information submitted via the form."},align:{attribute:"align",Elements:"<applet>, <caption>, <col>, <colgroup>, <hr>, <iframe>, <img>, <table>, <tbody>, <td>, <tfoot> , <th>, <thead>, <tr>",Description:"Specifies the horizontal alignment of the element."},allow:{attribute:"allow",Elements:"<iframe>",Description:"Specifies a feature-policy for the iframe."},alt:{attribute:"alt",Elements:"<applet>, <area>, <img>, <input>",Description:"Alternative text in case an image can't be displayed."},async:{attribute:"async",Elements:"<script>",Description:"Executes the script asynchronously."},autocapitalize:{attribute:"autocapitalize",Elements:"Global attribute",Description:"Sets whether input is automatically capitalized when entered by user"},autocomplete:{attribute:"autocomplete",Elements:"<form>, <input>, <select>, <textarea>",Description:"Indicates whether controls in this form can by default have their values automatically completed by the browser."},autofocus:{attribute:"autofocus",Elements:"<button>, <input>, <keygen>, <select>, <textarea>",Description:"The element should be automatically focused after the page loaded."},autoplay:{attribute:"autoplay",Elements:"<audio>, <video>",Description:"The audio or video should play as soon as possible."},background:{attribute:"background",Elements:"<body>, <table>, <td>, <th>",Description:"Specifies the URL of an image file. Note: Although browsers and email clients may still support this attribute, it is obsolete. Use CSS background-image instead."},bgcolor:{attribute:"bgcolor",Elements:"<body>, <col>, <colgroup>, <marquee>, <table>, <tbody>, <tfoot>, <td>, <th>, <tr>",Description:"Background color of the element. Note: This is a legacy attribute. Please use the CSS background-color property instead."},border:{attribute:"border",Elements:"<img>, <object>, <table>",Description:"The border width. Note: This is a legacy attribute. Please use the CSS border property instead."},buffered:{attribute:"buffered",Elements:"<audio>, <video>",Description:"Contains the time range of already buffered media."},capture:{attribute:"capture",Elements:"<input>",Description:"From the HTML Media Capture. The definition of 'media capture' in that specification.spec, specifies a new file can be captured."},challenge:{attribute:"challenge",Elements:"<keygen>",Description:"A challenge string that is submitted along with the public key."},charset:{attribute:"charset",Elements:"<meta>, <script>",Description:"Declares the character encoding of the page or script."},checked:{attribute:"checked",Elements:"<command>, <input>",Description:"Indicates whether the element should be checked on page load."},cite:{attribute:"cite",Elements:"<blockquote>, <del>, <ins>, <q>",Description:"Contains a URI which points to the source of the quote or change."},class:{attribute:"class",Elements:"Global attribute",Description:"Often used with CSS to style elements with common properties."},code:{attribute:"code",Elements:"<applet>",Description:"Specifies the URL of the applet's class file to be loaded and executed."},codebase:{attribute:"codebase",Elements:"<applet>",Description:"This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored."},color:{attribute:"color",Elements:"<basefont>, <font>, <hr>",Description:"This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format. Note: This is a legacy attribute. Please use the CSS color property instead."},cols:{attribute:"cols",Elements:"<textarea>",Description:"Defines the number of columns in a textarea."},colspan:{attribute:"colspan",Elements:"<td>, <th>",Description:"The colspan attribute defines the number of columns a cell should span."},content:{attribute:"content",Elements:"<meta>",Description:"A value associated with http-equiv or name depending on the context."},contenteditable:{attribute:"contenteditable",Elements:"Global attribute",Description:"Indicates whether the element's content is editable."},contextmenu:{attribute:"contextmenu",Elements:"Global attribute",Description:"Defines the ID of a <menu> element which will serve as the element's context menu."},controls:{attribute:"controls",Elements:"<audio>, <video>",Description:"Indicates whether the browser should show playback controls to the user."},coords:{attribute:"coords",Elements:"<area>",Description:"A set of values specifying the coordinates of the hot-spot region."},crossorigin:{attribute:"crossorigin",Elements:"<audio>, <img>, <link>, <script>, <video>",Description:"How the element handles cross-origin requests"},"csp ":{attribute:"csp ",Elements:"<iframe>",Description:"Specifies the Content Security Policy that an embedded document must agree to enforce upon itself."},data:{attribute:"data",Elements:"<object>",Description:"Specifies the URL of the resource."},"data-*":{attribute:"data-*",Elements:"Global attribute",Description:"Lets you attach custom attributes to an HTML element."},datetime:{attribute:"datetime",Elements:"<del>, <ins>, <time>",Description:"Indicates the date and time associated with the element."},decoding:{attribute:"decoding",Elements:"<img>",Description:"Indicates the preferred method to decode the image."},default:{attribute:"default",Elements:"<track>",Description:"Indicates that the track should be enabled unless the user's preferences indicate something different."},defer:{attribute:"defer",Elements:"<script>",Description:"Indicates that the script should be executed after the page has been parsed."},dir:{attribute:"dir",Elements:"Global attribute",Description:"Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)"},dirname:{attribute:"dirname",Elements:"<input>, <textarea>"},disabled:{attribute:"disabled",Elements:"<button>, <command>, <fieldset>, <input>, <keygen>, <optgroup>, <option>, <select>, <textarea>",Description:"Indicates whether the user can interact with the element."},download:{attribute:"download",Elements:"<a>, <area>",Description:"Indicates that the hyperlink is to be used for downloading a resource."},draggable:{attribute:"draggable",Elements:"Global attribute",Description:"Defines whether the element can be dragged."},dropzone:{attribute:"dropzone",Elements:"Global attribute",Description:"Indicates that the element accepts the dropping of content onto it."},enctype:{attribute:"enctype",Elements:"<form>",Description:"Defines the content type of the form data when the method is POST."},"enterkeyhint ":{attribute:"enterkeyhint ",Elements:"<textarea>, contenteditable",Description:"The enterkeyhint specifies what action label (or icon) to present for the enter key on virtual keyboards. The attribute can be used with form controls (such as the value of textarea elements), or in elements in an editing host (e.g., using contenteditable attribute)."},for:{attribute:"for",Elements:"<label>, <output>",Description:"Describes elements which belongs to this one."},form:{attribute:"form",Elements:"<button>, <fieldset>, <input>, <keygen>, <label>, <meter>, <object>, <output>, <progress>, <select>, <textarea>",Description:"Indicates the form that is the owner of the element."},formaction:{attribute:"formaction",Elements:"<input>, <button>",Description:"Indicates the action of the element, overriding the action defined in the <form>."},formenctype:{attribute:"formenctype",Elements:"<button>, <input>",Description:'If the button/input is a submit button (type="submit"), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides the enctype attribute of the button\'s form owner.'},formmethod:{attribute:"formmethod",Elements:"<button>, <input>",Description:'If the button/input is a submit button (type="submit"), this attribute sets the submission method to use during form submission (GET, POST, etc.). If this attribute is specified, it overrides the method attribute of the button\'s form owner.'},formnovalidate:{attribute:"formnovalidate",Elements:"<button>, <input>",Description:'If the button/input is a submit button (type="submit"), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button\'s form owner.'},formtarget:{attribute:"formtarget",Elements:"<button>, <input>",Description:'If the button/input is a submit button (type="submit"), this attribute specifies the browsing context (for example, tab, window, or inline frame) in which to display the response that is received after submitting the form. If this attribute is specified, it overrides the target attribute of the button\'s form owner.'},headers:{attribute:"headers",Elements:"<td>, <th>",Description:"IDs of the <th> elements which applies to this element."},height:{attribute:"height",Elements:"<canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>",Description:"Specifies the height of elements listed here. For all other elements, use the CSS height property. Note: In some instances, such as <div>, this is a legacy attribute, in which case the CSS height property should be used instead."},hidden:{attribute:"hidden",Elements:"Global attribute",Description:"Prevents rendering of given element, while keeping child elements, e.g. script elements, active."},high:{attribute:"high",Elements:"<meter>",Description:"Indicates the lower bound of the upper range."},href:{attribute:"href",Elements:"<a>, <area>, <base>, <link>",Description:"The URL of a linked resource."},hreflang:{attribute:"hreflang",Elements:"<a>, <area>, <link>",Description:"Specifies the language of the linked resource."},"http-eqiv":{attribute:"http-equiv",Elements:"<meta>",Description:"Defines a pragma directive."},icon:{attribute:"icon",Elements:"<command>",Description:"Specifies a picture which represents the command."},id:{attribute:"id",Elements:"Global attribute",Description:"Often used with CSS to style a specific element. The value of this attribute must be unique."},"importance ":{attribute:"importance ",Elements:"<iframe>, <img>, <link>, <script>",Description:"Indicates the relative fetch priority for the resource."},integrity:{attribute:"integrity",Elements:"<link>, <script>",Description:"Specifies a Subresource Integrity value that allows browsers to verify what they fetch."},"intrinsicsize ":{attribute:"intrinsicsize ",Elements:"<img>",Description:"This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it’s the size specified in the attribute."},inputmode:{attribute:"inputmode",Elements:"<textarea>, contenteditable",Description:"Provides a hint as to the type of data that might be entered by the user while editing the element or its contents. The attribute can be used with form controls (such as the value of textarea elements), or in elements in an editing host (e.g., using contenteditable attribute)."},ismap:{attribute:"ismap",Elements:"<img>",Description:"Indicates that the image is part of a server-side image map."},itemprop:{attribute:"itemprop",Elements:"Global attribute"},keytype:{attribute:"keytype",Elements:"<keygen>",Description:"Specifies the type of key generated."},kind:{attribute:"kind",Elements:"<track>",Description:"Specifies the kind of text track."},label:{attribute:"label",Elements:"<optgroup>, <option>, <track>",Description:"Specifies a user-readable title of the element."},lang:{attribute:"lang",Elements:"Global attribute",Description:"Defines the language used in the element."},language:{attribute:"language",Elements:"<script>",Description:"Defines the script language used in the element."},"loading ":{attribute:"loading ",Elements:"<img>, <iframe>",Description:'Indicates if the element should be loaded lazily (loading="lazy") or loaded immediately (loading="eager"). WIP: WHATWG PR #3752'},list:{attribute:"list",Elements:"<input>",Description:"Identifies a list of pre-defined options to suggest to the user."},loop:{attribute:"loop",Elements:"<audio>, <bgsound>, <marquee>, <video>",Description:"Indicates whether the media should start playing from the start when it's finished."},low:{attribute:"low",Elements:"<meter>",Description:"Indicates the upper bound of the lower range."},manifest:{attribute:"manifest",Elements:"<html>",Description:'Specifies the URL of the document\'s cache manifest. Note: This attribute is obsolete, use <link rel="manifest"> instead.'},max:{attribute:"max",Elements:"<input>, <meter>, <progress>",Description:"Indicates the maximum value allowed."},maxlength:{attribute:"maxlength",Elements:"<input>, <textarea>",Description:"Defines the maximum number of characters allowed in the element."},minlength:{attribute:"minlength",Elements:"<input>, <textarea>",Description:"Defines the minimum number of characters allowed in the element."},media:{attribute:"media",Elements:"<a>, <area>, <link>, <source>, <style>",Description:"Specifies a hint of the media for which the linked resource was designed."},method:{attribute:"method",Elements:"<form>",Description:"Defines which HTTP method to use when submitting the form. Can be GET (default) or POST."},min:{attribute:"min",Elements:"<input>, <meter>",Description:"Indicates the minimum value allowed."},multiple:{attribute:"multiple",Elements:"<input>, <select>",Description:"Indicates whether multiple values can be entered in an input of the type email or file."},muted:{attribute:"muted",Elements:"<audio>, <video>",Description:"Indicates whether the audio will be initially silenced on page load."},name:{attribute:"name",Elements:"<button>, <form>, <fieldset>, <iframe>, <input>, <keygen>, <object>, <output>, <select>, <textarea>, <map>, <meta>, <param>",Description:"Name of the element. For example used by the server to identify the fields in form submits."},novalidate:{attribute:"novalidate",Elements:"<form>",Description:"This attribute indicates that the form shouldn't be validated when submitted."},open:{attribute:"open",Elements:"<details>",Description:"Indicates whether the details will be shown on page load."},optimum:{attribute:"optimum",Elements:"<meter>",Description:"Indicates the optimal numeric value."},pattern:{attribute:"pattern",Elements:"<input>",Description:"Defines a regular expression which the element's value will be validated against."},ping:{attribute:"ping",Elements:"<a>, <area>",Description:"The ping attribute specifies a space-separated list of URLs to be notified if a user follows the hyperlink."},placeholder:{attribute:"placeholder",Elements:"<input>, <textarea>",Description:"Provides a hint to the user of what can be entered in the field."},poster:{attribute:"poster",Elements:"<video>",Description:"A URL indicating a poster frame to show until the user plays or seeks."},preload:{attribute:"preload",Elements:"<audio>, <video>",Description:"Indicates whether the whole resource, parts of it or nothing should be preloaded."},radiogroup:{attribute:"radiogroup",Elements:"<command>"},readonly:{attribute:"readonly",Elements:"<input>, <textarea>",Description:"Indicates whether the element can be edited."},referrerpolicy:{attribute:"referrerpolicy",Elements:"<a>, <area>, <iframe>, <img>, <link>, <script>",Description:"Specifies which referrer is sent when fetching the resource."},rel:{attribute:"rel",Elements:"<a>, <area>, <link>",Description:"Specifies the relationship of the target object to the link object."},required:{attribute:"required",Elements:"<input>, <select>, <textarea>",Description:"Indicates whether this element is required to fill out or not."},reversed:{attribute:"reversed",Elements:"<ol>",Description:"Indicates whether the list should be displayed in a descending order instead of a ascending."},rows:{attribute:"rows",Elements:"<textarea>",Description:"Defines the number of rows in a text area."},rowspan:{attribute:"rowspan",Elements:"<td>, <th>",Description:"Defines the number of rows a table cell should span over."},sandbox:{attribute:"sandbox",Elements:"<iframe>",Description:"Stops a document loaded in an iframe from using certain features (such as submitting forms or opening new windows)."},scope:{attribute:"scope",Elements:"<th>",Description:"Defines the cells that the header test (defined in the th element) relates to."},scoped:{attribute:"scoped",Elements:"<style>"},selected:{attribute:"selected",Elements:"<option>",Description:"Defines a value which will be selected on page load."},shape:{attribute:"shape",Elements:"<a>, <area>"},size:{attribute:"size",Elements:"<input>, <select>",Description:"Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters."},sizes:{attribute:"sizes",Elements:"<link>, <img>, <source>"},slot:{attribute:"slot",Elements:"Global attribute",Description:"Assigns a slot in a shadow DOM shadow tree to an element."},span:{attribute:"span",Elements:"<col>, <colgroup>"},spellcheck:{attribute:"spellcheck",Elements:"Global attribute",Description:"Indicates whether spell checking is allowed for the element."},src:{attribute:"src",Elements:"<audio>, <embed>, <iframe>, <img>, <input>, <script>, <source>, <track>, <video>",Description:"The URL of the embeddable content."},srcdoc:{attribute:"srcdoc",Elements:"<iframe>"},srclang:{attribute:"srclang",Elements:"<track>"},srcset:{attribute:"srcset",Elements:"<img>, <source>",Description:"One or more responsive image candidates."},start:{attribute:"start",Elements:"<ol>",Description:"Defines the first number if other than 1."},step:{attribute:"step",Elements:"<input>"},style:{attribute:"style",Elements:"Global attribute",Description:"Defines CSS styles which will override styles previously set."},summary:{attribute:"summary",Elements:"<table>"},tabindex:{attribute:"tabindex",Elements:"Global attribute",Description:"Overrides the browser's default tab order and follows the one specified instead."},target:{attribute:"target",Elements:"<a>, <area>, <base>, <form>",Description:"Specifies where to open the linked document (in the case of an <a> element) or where to display the response recieved (in the case of a <form> element)"},title:{attribute:"title",Elements:"Global attribute",Description:"Text to be displayed in a tooltip when hovering over the element."},translate:{attribute:"translate",Elements:"Global attribute",Description:"Specify whether an element’s attribute values and the values of its Text node children are to be translated when the page is localized, or whether to leave them unchanged."},type:{attribute:"type",Elements:"<button>, <input>, <command>, <embed>, <object>, <script>, <source>, <style>, <menu>",Description:"Defines the type of the element."},usemap:{attribute:"usemap",Elements:"<img>, <input>, <object>"},value:{attribute:"value",Elements:"<button>, <data>, <input>, <li>, <meter>, <option>, <progress>, <param>",Description:"Defines a default value which will be displayed in the element on page load."},width:{attribute:"width",Elements:"<canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>",Description:"For the elements listed here, this establishes the element's width. Note: For all other instances, such as <div>, this is a legacy attribute, in which case the CSS width property should be used instead."},wrap:{attribute:"wrap",Elements:"<textarea>",Description:"Indicates whether the text should be wrapped."},onafterprint:{Attribute:"onafterprint",Value:"script",Description:"Script to be run after the document is printed",Category:"Window Event Attributes"},onbeforeprint:{Attribute:"onbeforeprint",Value:"script",Description:"Script to be run before the document is printed",Category:"Window Event Attributes"},onbeforeunload:{Attribute:"onbeforeunload",Value:"script",Description:"Script to be run when the document is about to be unloaded",Category:"Window Event Attributes"},onerror:{Attribute:"onerror",Value:"script",Description:"Script to be run when an error occurs",Category:"Window Event Attributes"},onhashchange:{Attribute:"onhashchange",Value:"script",Description:"Script to be run when there has been changes to the anchor part of the a URL",Category:"Window Event Attributes"},onload:{Attribute:"onload",Value:"script",Description:"Fires after the page is finished loading",Category:"Window Event Attributes"},onmessage:{Attribute:"onmessage",Value:"script",Description:"Script to be run when the message is triggered",Category:"Window Event Attributes"},onoffline:{Attribute:"onoffline",Value:"script",Description:"Script to be run when the browser starts to work offline",Category:"Window Event Attributes"},ononline:{Attribute:"ononline",Value:"script",Description:"Script to be run when the browser starts to work online",Category:"Window Event Attributes"},onpagehide:{Attribute:"onpagehide",Value:"script",Description:"Script to be run when a user navigates away from a page",Category:"Window Event Attributes"},onpageshow:{Attribute:"onpageshow",Value:"script",Description:"Script to be run when a user navigates to a page",Category:"Window Event Attributes"},onpopstate:{Attribute:"onpopstate",Value:"script",Description:"Script to be run when the window's history changes",Category:"Window Event Attributes"},onresize:{Attribute:"onresize",Value:"script",Description:"Fires when the browser window is resized",Category:"Window Event Attributes"},onstorage:{Attribute:"onstorage",Value:"script",Description:"Script to be run when a Web Storage area is updated",Category:"Window Event Attributes"},onunload:{Attribute:"onunload",Value:"script",Description:"Fires once a page has unloaded (or the browser window has been closed)",Category:"Window Event Attributes"},onblur:{Attribute:"onblur",Value:"script",Description:"Fires the moment that the element loses focus",Category:"Form Events"},onchange:{Attribute:"onchange",Value:"script",Description:"Fires the moment when the value of the element is changed",Category:"Form Events"},oncontextmenu:{Attribute:"oncontextmenu",Value:"script",Description:"Script to be run when a context menu is triggered",Category:"Form Events"},onfocus:{Attribute:"onfocus",Value:"script",Description:"Fires the moment when the element gets focus",Category:"Form Events"},oninput:{Attribute:"oninput",Value:"script",Description:"Script to be run when an element gets user input",Category:"Form Events"},oninvalid:{Attribute:"oninvalid",Value:"script",Description:"Script to be run when an element is invalid",Category:"Form Events"},onreset:{Attribute:"onreset",Value:"script",Description:"Fires when the Reset button in a form is clicked",Category:"Form Events"},onsearch:{Attribute:"onsearch",Value:"script",Description:'Fires when the user writes something in a search field (for <input="search">)',Category:"Form Events"},onselect:{Attribute:"onselect",Value:"script",Description:"Fires after some text has been selected in an element",Category:"Form Events"},onsubmit:{Attribute:"onsubmit",Value:"script",Description:"Fires when a form is submitted",Category:"Form Events"},onkeydown:{Attribute:"onkeydown",Value:"script",Description:"Fires when a user is pressing a key",Category:"Keyboard Events"},onkeypress:{Attribute:"onkeypress",Value:"script",Description:"Fires when a user presses a key",Category:"Keyboard Events"},onkeyup:{Attribute:"onkeyup",Value:"script",Description:"Fires when a user releases a key",Category:"Keyboard Events"},onclick:{Attribute:"onclick",Value:"script",Description:"Fires on a mouse click on the element",Category:"Mouse Events"},ondblclick:{Attribute:"ondblclick",Value:"script",Description:"Fires on a mouse double-click on the element",Category:"Mouse Events"},onmousedown:{Attribute:"onmousedown",Value:"script",Description:"Fires when a mouse button is pressed down on an element",Category:"Mouse Events"},onmousemove:{Attribute:"onmousemove",Value:"script",Description:"Fires when the mouse pointer is moving while it is over an element",Category:"Mouse Events"},onmouseout:{Attribute:"onmouseout",Value:"script",Description:"Fires when the mouse pointer moves out of an element",Category:"Mouse Events"},onmouseover:{Attribute:"onmouseover",Value:"script",Description:"Fires when the mouse pointer moves over an element",Category:"Mouse Events"},onmouseup:{Attribute:"onmouseup",Value:"script",Description:"Fires when a mouse button is released over an element",Category:"Mouse Events"},onmousewheel:{Attribute:"onmousewheel",Value:"script",Description:"Deprecated. Use the onwheel attribute instead",Category:"Mouse Events"},onwheel:{Attribute:"onwheel",Value:"script",Description:"Fires when the mouse wheel rolls up or down over an element",Category:"Mouse Events"},ondrag:{Attribute:"ondrag",Value:"script",Description:"Script to be run when an element is dragged",Category:"Drag Events"},ondragend:{Attribute:"ondragend",Value:"script",Description:"Script to be run at the end of a drag operation",Category:"Drag Events"},ondragenter:{Attribute:"ondragenter",Value:"script",Description:"Script to be run when an element has been dragged to a valid drop target",Category:"Drag Events"},ondragleave:{Attribute:"ondragleave",Value:"script",Description:"Script to be run when an element leaves a valid drop target",Category:"Drag Events"},ondragover:{Attribute:"ondragover",Value:"script",Description:"Script to be run when an element is being dragged over a valid drop target",Category:"Drag Events"},ondragstart:{Attribute:"ondragstart",Value:"script",Description:"Script to be run at the start of a drag operation",Category:"Drag Events"},ondrop:{Attribute:"ondrop",Value:"script",Description:"Script to be run when dragged element is being dropped",Category:"Drag Events"},onscroll:{Attribute:"onscroll",Value:"script",Description:"Script to be run when an element's scrollbar is being scrolled",Category:"Drag Events"},oncopy:{Attribute:"oncopy",Value:"script",Description:"Fires when the user copies the content of an element",Category:"Clipboard Events"},oncut:{Attribute:"oncut",Value:"script",Description:"Fires when the user cuts the content of an element",Category:"Clipboard Events"},onpaste:{Attribute:"onpaste",Value:"script",Description:"Fires when the user pastes some content in an element",Category:"Clipboard Events"},onabort:{Attribute:"onabort",Value:"script",Description:"Script to be run on abort",Category:"Media Events"},oncanplay:{Attribute:"oncanplay",Value:"script",Description:"Script to be run when a file is ready to start playing (when it has buffered enough to begin)",Category:"Media Events"},oncanplaythrough:{Attribute:"oncanplaythrough",Value:"script",Description:"Script to be run when a file can be played all the way to the end without pausing for buffering",Category:"Media Events"},oncuechange:{Attribute:"oncuechange",Value:"script",Description:"Script to be run when the cue changes in a <track> element",Category:"Media Events"},ondurationchange:{Attribute:"ondurationchange",Value:"script",Description:"Script to be run when the length of the media changes",Category:"Media Events"},onemptied:{Attribute:"onemptied",Value:"script",Description:"Script to be run when something bad happens and the file is suddenly unavailable (like unexpectedly disconnects)",Category:"Media Events"},onended:{Attribute:"onended",Value:"script",Description:'Script to be run when the media has reach the end (a useful event for messages like "thanks for listening")',Category:"Media Events"},onerror:{Attribute:"onerror",Value:"script",Description:"Script to be run when an error occurs when the file is being loaded",Category:"Media Events"},onloadeddata:{Attribute:"onloadeddata",Value:"script",Description:"Script to be run when media data is loaded",Category:"Media Events"},onloadedmetadata:{Attribute:"onloadedmetadata",Value:"script",Description:"Script to be run when meta data (like dimensions and duration) are loaded",Category:"Media Events"},onloadstart:{Attribute:"onloadstart",Value:"script",Description:"Script to be run just as the file begins to load before anything is actually loaded",Category:"Media Events"},onpause:{Attribute:"onpause",Value:"script",Description:"Script to be run when the media is paused either by the user or programmatically",Category:"Media Events"},onplay:{Attribute:"onplay",Value:"script",Description:"Script to be run when the media is ready to start playing",Category:"Media Events"},onplaying:{Attribute:"onplaying",Value:"script",Description:"Script to be run when the media actually has started playing",Category:"Media Events"},onprogress:{Attribute:"onprogress",Value:"script",Description:"Script to be run when the browser is in the process of getting the media data",Category:"Media Events"},onratechange:{Attribute:"onratechange",Value:"script",Description:"Script to be run each time the playback rate changes (like when a user switches to a slow motion or fast forward mode)",Category:"Media Events"},onseeked:{Attribute:"onseeked",Value:"script",Description:"Script to be run when the seeking attribute is set to false indicating that seeking has ended",Category:"Media Events"},onseeking:{Attribute:"onseeking",Value:"script",Description:"Script to be run when the seeking attribute is set to true indicating that seeking is active",Category:"Media Events"},onstalled:{Attribute:"onstalled",Value:"script",Description:"Script to be run when the browser is unable to fetch the media data for whatever reason",Category:"Media Events"},onsuspend:{Attribute:"onsuspend",Value:"script",Description:"Script to be run when fetching the media data is stopped before it is completely loaded for whatever reason",Category:"Media Events"},ontimeupdate:{Attribute:"ontimeupdate",Value:"script",Description:"Script to be run when the playing position has changed (like when the user fast forwards to a different point in the media)",Category:"Media Events"},onvolumechange:{Attribute:"onvolumechange",Value:"script",Description:'Script to be run each time the volume is changed which (includes setting the volume to "mute")',Category:"Media Events"},onwaiting:{Attribute:"onwaiting",Value:"script",Description:"Script to be run when the media has paused but is expected to resume (like when the media pauses to buffer more data)",Category:"Media Events"},ontoggle:{Attribute:"ontoggle",Value:"script",Description:"Fires when the user opens or closes the <details> element",Category:"Misc Events"}};class a{constructor(e={}){this.options=e}isFieldRepresentingAttributes(e,t){return 0===e.indexOf("_")||!!this.isAttr(e,t)||"attributes"===e}setNodeAttributes(e,t){let i=this.getAttrs(t);if(i&&i.length>0)for(const t of i)e.setAttribute(t.key,t.value)}getAttrs(e,t=!1){if(!e)return;let i=[];if(Array.isArray(e))for(const t of e){if("attributes"===t)return this.processAttributeArray(t);let e=this.getAttrs(t);Array.isArray(e)?i=i.concat(e):i.push(e)}else if("object"==typeof e)for(let[r,n]of Object.entries(e))if(0!==r.indexOf("_"))if(this.isAttibutePrefix(r))i.push({key:r,value:n});else{if("attributes"===r)return this.processAttributeArray(n);(t||this.isAttr(r,n))&&i.push({key:r,value:n})}else i.push({key:r.substring(1),value:n});return i}processAttributeArray(e){let t=[];for(const i of e)t=t.concat(this.getAttrs(i,!0));return t}isAttr(e,t=""){if(o[e]&&"string"==typeof t)return!0;if("object"==typeof e)for(let[t,i]of Object.entries(e)){if(o[t]&&"string"==typeof i)return!0;if(this.isAttibutePrefix(e))return!0}return this.isAttibutePrefix(e)}isAttibutePrefix(e){let t=this.options.attributePrefixAdd;if(t&&t.length>0)for(const i of t)if(0===e.indexOf(i))return!0;return!1}}class l{constructor(e={}){this.options=e,this.attributeFacotory=new a(e)}createMainNodes(e){let t=[];return Array.isArray(e)?t=this.createNodesFromArray(e,t):"object"==typeof e&&(t=this.createNodesFromObject(e,t)),t}createNodesFromObject(e,t){let i=this.getNode(e);return Array.isArray(i)?t=t.concat(i):t.push(i),t}createNodesFromArray(e,t){for(let i of e){let e=this.getNode(i);Array.isArray(e)?t=t.concat(e):t.push(e)}return t}getNode(e){if("string"==typeof e||e instanceof String)return new n(e);if(Array.isArray(e)){let t=[];for(let i of e){let e=this.getNode(i);Array.isArray(e)?t=t.concat(e):t.push(e)}return t}if("object"==typeof e){let t=[];if(null===e)return t;for(let[n,o]of Object.entries(e)){if(this.attributeFacotory.isFieldRepresentingAttributes(n,o))continue;let e;if(i[this.isOpenTag(n)])e=new s(n);else{e=new r(n);let t=this.getNode(o);e.addChildren(t)}this.attributeFacotory.setNodeAttributes(e,o),t.push(e)}return t}}isOpenTag(e){let t;if(e){let i=e.split(" ");i&&i.length>0&&(t=i[0])}return t}}function u(e,t={}){let i=new l(t).createMainNodes(e),r=[];for(const e of i)r.push(e.toHtml());return r.join("")}const c={toHtml:u};return t})()}));