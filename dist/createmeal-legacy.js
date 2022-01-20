!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("createmeal",[],t):"object"==typeof exports?exports.createmeal=t():e.createmeal=t()}(this,(function(){return(()=>{"use strict";var e={d:(t,i)=>{for(var r in i)e.o(i,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:i[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>c,toHtml:()=>l});const i={accept:{attribute:"accept",Elements:"<form>, <input>",Description:"List of types the server accepts, typically a file type."},"accept-charset":{attribute:"accept-charset",Elements:"<form>",Description:"List of supported charsets."},accesskey:{attribute:"accesskey",Elements:"Global attribute",Description:"Keyboard shortcut to activate or add focus to the element."},action:{attribute:"action",Elements:"<form>",Description:"The URI of a program that processes the information submitted via the form."},align:{attribute:"align",Elements:"<applet>, <caption>, <col>, <colgroup>, <hr>, <iframe>, <img>, <table>, <tbody>, <td>, <tfoot> , <th>, <thead>, <tr>",Description:"Specifies the horizontal alignment of the element."},allow:{attribute:"allow",Elements:"<iframe>",Description:"Specifies a feature-policy for the iframe."},alt:{attribute:"alt",Elements:"<applet>, <area>, <img>, <input>",Description:"Alternative text in case an image can't be displayed."},async:{attribute:"async",Elements:"<script>",Description:"Executes the script asynchronously."},autocapitalize:{attribute:"autocapitalize",Elements:"Global attribute",Description:"Sets whether input is automatically capitalized when entered by user"},autocomplete:{attribute:"autocomplete",Elements:"<form>, <input>, <select>, <textarea>",Description:"Indicates whether controls in this form can by default have their values automatically completed by the browser."},autofocus:{attribute:"autofocus",Elements:"<button>, <input>, <keygen>, <select>, <textarea>",Description:"The element should be automatically focused after the page loaded."},autoplay:{attribute:"autoplay",Elements:"<audio>, <video>",Description:"The audio or video should play as soon as possible."},background:{attribute:"background",Elements:"<body>, <table>, <td>, <th>",Description:"Specifies the URL of an image file. Note: Although browsers and email clients may still support this attribute, it is obsolete. Use CSS background-image instead."},bgcolor:{attribute:"bgcolor",Elements:"<body>, <col>, <colgroup>, <marquee>, <table>, <tbody>, <tfoot>, <td>, <th>, <tr>",Description:"Background color of the element. Note: This is a legacy attribute. Please use the CSS background-color property instead."},border:{attribute:"border",Elements:"<img>, <object>, <table>",Description:"The border width. Note: This is a legacy attribute. Please use the CSS border property instead."},buffered:{attribute:"buffered",Elements:"<audio>, <video>",Description:"Contains the time range of already buffered media."},capture:{attribute:"capture",Elements:"<input>",Description:"From the HTML Media Capture. The definition of 'media capture' in that specification.spec, specifies a new file can be captured."},challenge:{attribute:"challenge",Elements:"<keygen>",Description:"A challenge string that is submitted along with the public key."},charset:{attribute:"charset",Elements:"<meta>, <script>",Description:"Declares the character encoding of the page or script."},checked:{attribute:"checked",Elements:"<command>, <input>",Description:"Indicates whether the element should be checked on page load."},cite:{attribute:"cite",Elements:"<blockquote>, <del>, <ins>, <q>",Description:"Contains a URI which points to the source of the quote or change."},class:{attribute:"class",Elements:"Global attribute",Description:"Often used with CSS to style elements with common properties."},code:{attribute:"code",Elements:"<applet>",Description:"Specifies the URL of the applet's class file to be loaded and executed."},codebase:{attribute:"codebase",Elements:"<applet>",Description:"This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored."},color:{attribute:"color",Elements:"<basefont>, <font>, <hr>",Description:"This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format. Note: This is a legacy attribute. Please use the CSS color property instead."},cols:{attribute:"cols",Elements:"<textarea>",Description:"Defines the number of columns in a textarea."},colspan:{attribute:"colspan",Elements:"<td>, <th>",Description:"The colspan attribute defines the number of columns a cell should span."},content:{attribute:"content",Elements:"<meta>",Description:"A value associated with http-equiv or name depending on the context."},contenteditable:{attribute:"contenteditable",Elements:"Global attribute",Description:"Indicates whether the element's content is editable."},contextmenu:{attribute:"contextmenu",Elements:"Global attribute",Description:"Defines the ID of a <menu> element which will serve as the element's context menu."},controls:{attribute:"controls",Elements:"<audio>, <video>",Description:"Indicates whether the browser should show playback controls to the user."},coords:{attribute:"coords",Elements:"<area>",Description:"A set of values specifying the coordinates of the hot-spot region."},crossorigin:{attribute:"crossorigin",Elements:"<audio>, <img>, <link>, <script>, <video>",Description:"How the element handles cross-origin requests"},"csp ":{attribute:"csp ",Elements:"<iframe>",Description:"Specifies the Content Security Policy that an embedded document must agree to enforce upon itself."},data:{attribute:"data",Elements:"<object>",Description:"Specifies the URL of the resource."},"data-*":{attribute:"data-*",Elements:"Global attribute",Description:"Lets you attach custom attributes to an HTML element."},datetime:{attribute:"datetime",Elements:"<del>, <ins>, <time>",Description:"Indicates the date and time associated with the element."},decoding:{attribute:"decoding",Elements:"<img>",Description:"Indicates the preferred method to decode the image."},default:{attribute:"default",Elements:"<track>",Description:"Indicates that the track should be enabled unless the user's preferences indicate something different."},defer:{attribute:"defer",Elements:"<script>",Description:"Indicates that the script should be executed after the page has been parsed."},dir:{attribute:"dir",Elements:"Global attribute",Description:"Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)"},dirname:{attribute:"dirname",Elements:"<input>, <textarea>"},disabled:{attribute:"disabled",Elements:"<button>, <command>, <fieldset>, <input>, <keygen>, <optgroup>, <option>, <select>, <textarea>",Description:"Indicates whether the user can interact with the element."},download:{attribute:"download",Elements:"<a>, <area>",Description:"Indicates that the hyperlink is to be used for downloading a resource."},draggable:{attribute:"draggable",Elements:"Global attribute",Description:"Defines whether the element can be dragged."},dropzone:{attribute:"dropzone",Elements:"Global attribute",Description:"Indicates that the element accepts the dropping of content onto it."},enctype:{attribute:"enctype",Elements:"<form>",Description:"Defines the content type of the form data when the method is POST."},"enterkeyhint ":{attribute:"enterkeyhint ",Elements:"<textarea>, contenteditable",Description:"The enterkeyhint specifies what action label (or icon) to present for the enter key on virtual keyboards. The attribute can be used with form controls (such as the value of textarea elements), or in elements in an editing host (e.g., using contenteditable attribute)."},for:{attribute:"for",Elements:"<label>, <output>",Description:"Describes elements which belongs to this one."},form:{attribute:"form",Elements:"<button>, <fieldset>, <input>, <keygen>, <label>, <meter>, <object>, <output>, <progress>, <select>, <textarea>",Description:"Indicates the form that is the owner of the element."},formaction:{attribute:"formaction",Elements:"<input>, <button>",Description:"Indicates the action of the element, overriding the action defined in the <form>."},formenctype:{attribute:"formenctype",Elements:"<button>, <input>",Description:'If the button/input is a submit button (type="submit"), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides the enctype attribute of the button\'s form owner.'},formmethod:{attribute:"formmethod",Elements:"<button>, <input>",Description:'If the button/input is a submit button (type="submit"), this attribute sets the submission method to use during form submission (GET, POST, etc.). If this attribute is specified, it overrides the method attribute of the button\'s form owner.'},formnovalidate:{attribute:"formnovalidate",Elements:"<button>, <input>",Description:'If the button/input is a submit button (type="submit"), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button\'s form owner.'},formtarget:{attribute:"formtarget",Elements:"<button>, <input>",Description:'If the button/input is a submit button (type="submit"), this attribute specifies the browsing context (for example, tab, window, or inline frame) in which to display the response that is received after submitting the form. If this attribute is specified, it overrides the target attribute of the button\'s form owner.'},headers:{attribute:"headers",Elements:"<td>, <th>",Description:"IDs of the <th> elements which applies to this element."},height:{attribute:"height",Elements:"<canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>",Description:"Specifies the height of elements listed here. For all other elements, use the CSS height property. Note: In some instances, such as <div>, this is a legacy attribute, in which case the CSS height property should be used instead."},hidden:{attribute:"hidden",Elements:"Global attribute",Description:"Prevents rendering of given element, while keeping child elements, e.g. script elements, active."},high:{attribute:"high",Elements:"<meter>",Description:"Indicates the lower bound of the upper range."},href:{attribute:"href",Elements:"<a>, <area>, <base>, <link>",Description:"The URL of a linked resource."},hreflang:{attribute:"hreflang",Elements:"<a>, <area>, <link>",Description:"Specifies the language of the linked resource."},"http-eqiv":{attribute:"http-equiv",Elements:"<meta>",Description:"Defines a pragma directive."},icon:{attribute:"icon",Elements:"<command>",Description:"Specifies a picture which represents the command."},id:{attribute:"id",Elements:"Global attribute",Description:"Often used with CSS to style a specific element. The value of this attribute must be unique."},"importance ":{attribute:"importance ",Elements:"<iframe>, <img>, <link>, <script>",Description:"Indicates the relative fetch priority for the resource."},integrity:{attribute:"integrity",Elements:"<link>, <script>",Description:"Specifies a Subresource Integrity value that allows browsers to verify what they fetch."},"intrinsicsize ":{attribute:"intrinsicsize ",Elements:"<img>",Description:"This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it’s the size specified in the attribute."},inputmode:{attribute:"inputmode",Elements:"<textarea>, contenteditable",Description:"Provides a hint as to the type of data that might be entered by the user while editing the element or its contents. The attribute can be used with form controls (such as the value of textarea elements), or in elements in an editing host (e.g., using contenteditable attribute)."},ismap:{attribute:"ismap",Elements:"<img>",Description:"Indicates that the image is part of a server-side image map."},itemprop:{attribute:"itemprop",Elements:"Global attribute"},keytype:{attribute:"keytype",Elements:"<keygen>",Description:"Specifies the type of key generated."},kind:{attribute:"kind",Elements:"<track>",Description:"Specifies the kind of text track."},label:{attribute:"label",Elements:"<optgroup>, <option>, <track>",Description:"Specifies a user-readable title of the element."},lang:{attribute:"lang",Elements:"Global attribute",Description:"Defines the language used in the element."},language:{attribute:"language",Elements:"<script>",Description:"Defines the script language used in the element."},"loading ":{attribute:"loading ",Elements:"<img>, <iframe>",Description:'Indicates if the element should be loaded lazily (loading="lazy") or loaded immediately (loading="eager"). WIP: WHATWG PR #3752'},list:{attribute:"list",Elements:"<input>",Description:"Identifies a list of pre-defined options to suggest to the user."},loop:{attribute:"loop",Elements:"<audio>, <bgsound>, <marquee>, <video>",Description:"Indicates whether the media should start playing from the start when it's finished."},low:{attribute:"low",Elements:"<meter>",Description:"Indicates the upper bound of the lower range."},manifest:{attribute:"manifest",Elements:"<html>",Description:'Specifies the URL of the document\'s cache manifest. Note: This attribute is obsolete, use <link rel="manifest"> instead.'},max:{attribute:"max",Elements:"<input>, <meter>, <progress>",Description:"Indicates the maximum value allowed."},maxlength:{attribute:"maxlength",Elements:"<input>, <textarea>",Description:"Defines the maximum number of characters allowed in the element."},minlength:{attribute:"minlength",Elements:"<input>, <textarea>",Description:"Defines the minimum number of characters allowed in the element."},media:{attribute:"media",Elements:"<a>, <area>, <link>, <source>, <style>",Description:"Specifies a hint of the media for which the linked resource was designed."},method:{attribute:"method",Elements:"<form>",Description:"Defines which HTTP method to use when submitting the form. Can be GET (default) or POST."},min:{attribute:"min",Elements:"<input>, <meter>",Description:"Indicates the minimum value allowed."},multiple:{attribute:"multiple",Elements:"<input>, <select>",Description:"Indicates whether multiple values can be entered in an input of the type email or file."},muted:{attribute:"muted",Elements:"<audio>, <video>",Description:"Indicates whether the audio will be initially silenced on page load."},name:{attribute:"name",Elements:"<button>, <form>, <fieldset>, <iframe>, <input>, <keygen>, <object>, <output>, <select>, <textarea>, <map>, <meta>, <param>",Description:"Name of the element. For example used by the server to identify the fields in form submits."},novalidate:{attribute:"novalidate",Elements:"<form>",Description:"This attribute indicates that the form shouldn't be validated when submitted."},open:{attribute:"open",Elements:"<details>",Description:"Indicates whether the details will be shown on page load."},optimum:{attribute:"optimum",Elements:"<meter>",Description:"Indicates the optimal numeric value."},pattern:{attribute:"pattern",Elements:"<input>",Description:"Defines a regular expression which the element's value will be validated against."},ping:{attribute:"ping",Elements:"<a>, <area>",Description:"The ping attribute specifies a space-separated list of URLs to be notified if a user follows the hyperlink."},placeholder:{attribute:"placeholder",Elements:"<input>, <textarea>",Description:"Provides a hint to the user of what can be entered in the field."},poster:{attribute:"poster",Elements:"<video>",Description:"A URL indicating a poster frame to show until the user plays or seeks."},preload:{attribute:"preload",Elements:"<audio>, <video>",Description:"Indicates whether the whole resource, parts of it or nothing should be preloaded."},radiogroup:{attribute:"radiogroup",Elements:"<command>"},readonly:{attribute:"readonly",Elements:"<input>, <textarea>",Description:"Indicates whether the element can be edited."},referrerpolicy:{attribute:"referrerpolicy",Elements:"<a>, <area>, <iframe>, <img>, <link>, <script>",Description:"Specifies which referrer is sent when fetching the resource."},rel:{attribute:"rel",Elements:"<a>, <area>, <link>",Description:"Specifies the relationship of the target object to the link object."},required:{attribute:"required",Elements:"<input>, <select>, <textarea>",Description:"Indicates whether this element is required to fill out or not."},reversed:{attribute:"reversed",Elements:"<ol>",Description:"Indicates whether the list should be displayed in a descending order instead of a ascending."},rows:{attribute:"rows",Elements:"<textarea>",Description:"Defines the number of rows in a text area."},rowspan:{attribute:"rowspan",Elements:"<td>, <th>",Description:"Defines the number of rows a table cell should span over."},sandbox:{attribute:"sandbox",Elements:"<iframe>",Description:"Stops a document loaded in an iframe from using certain features (such as submitting forms or opening new windows)."},scope:{attribute:"scope",Elements:"<th>",Description:"Defines the cells that the header test (defined in the th element) relates to."},scoped:{attribute:"scoped",Elements:"<style>"},selected:{attribute:"selected",Elements:"<option>",Description:"Defines a value which will be selected on page load."},shape:{attribute:"shape",Elements:"<a>, <area>"},size:{attribute:"size",Elements:"<input>, <select>",Description:"Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters."},sizes:{attribute:"sizes",Elements:"<link>, <img>, <source>"},slot:{attribute:"slot",Elements:"Global attribute",Description:"Assigns a slot in a shadow DOM shadow tree to an element."},span:{attribute:"span",Elements:"<col>, <colgroup>"},spellcheck:{attribute:"spellcheck",Elements:"Global attribute",Description:"Indicates whether spell checking is allowed for the element."},src:{attribute:"src",Elements:"<audio>, <embed>, <iframe>, <img>, <input>, <script>, <source>, <track>, <video>",Description:"The URL of the embeddable content."},srcdoc:{attribute:"srcdoc",Elements:"<iframe>"},srclang:{attribute:"srclang",Elements:"<track>"},srcset:{attribute:"srcset",Elements:"<img>, <source>",Description:"One or more responsive image candidates."},start:{attribute:"start",Elements:"<ol>",Description:"Defines the first number if other than 1."},step:{attribute:"step",Elements:"<input>"},style:{attribute:"style",Elements:"Global attribute",Description:"Defines CSS styles which will override styles previously set."},summary:{attribute:"summary",Elements:"<table>"},tabindex:{attribute:"tabindex",Elements:"Global attribute",Description:"Overrides the browser's default tab order and follows the one specified instead."},target:{attribute:"target",Elements:"<a>, <area>, <base>, <form>",Description:"Specifies where to open the linked document (in the case of an <a> element) or where to display the response recieved (in the case of a <form> element)"},title:{attribute:"title",Elements:"Global attribute",Description:"Text to be displayed in a tooltip when hovering over the element."},translate:{attribute:"translate",Elements:"Global attribute",Description:"Specify whether an element’s attribute values and the values of its Text node children are to be translated when the page is localized, or whether to leave them unchanged."},type:{attribute:"type",Elements:"<button>, <input>, <command>, <embed>, <object>, <script>, <source>, <style>, <menu>",Description:"Defines the type of the element."},usemap:{attribute:"usemap",Elements:"<img>, <input>, <object>"},value:{attribute:"value",Elements:"<button>, <data>, <input>, <li>, <meter>, <option>, <progress>, <param>",Description:"Defines a default value which will be displayed in the element on page load."},width:{attribute:"width",Elements:"<canvas>, <embed>, <iframe>, <img>, <input>, <object>, <video>",Description:"For the elements listed here, this establishes the element's width. Note: For all other instances, such as <div>, this is a legacy attribute, in which case the CSS width property should be used instead."},wrap:{attribute:"wrap",Elements:"<textarea>",Description:"Indicates whether the text should be wrapped."}},r={"!DOCTYPE":!0,"!DOCTYPE html":!0,img:!0,br:!0,hr:!0,link:!0,area:!0,base:!0,col:!0,embed:!0,input:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};class s{constructor(e){this.children=[],this.attributes=[],this.name=e}add(e){this.children.push(e)}addChildren(e){Array.isArray(e)&&e&&e.length>0?this.children=this.children.concat(e):"object"==typeof e&&e.length>0&&this.add(e)}setAttribute(e,t){["html"].includes(e)||null===t?this.attributes.push(`${e}`):this.attributes.push(`${e}="${t}"`)}remove(e){let t=this.children.length;for(let i=0;i<t;i++)if(this.children[i]===e)return void this.children.splice(i,1)}getAttributes(){return this.attributes.join(" ")}getOpenTag(){return this.attributes.length>0?`<${this.name} ${this.getAttributes()}>`:`<${this.name}>`}getCloseTag(){return`</${this.name}>`}getChild(e){return this.children[e]}hasChildren(){return this.children.length>0}toHtml(){let e=[];for(let t=0,i=this.children.length;t<i;t++)e.push(this.getChild(t).toHtml());return this.getOpenTag()+e.join("")+this.getCloseTag()}}class n extends s{constructor(e){super(e)}getOpenTag(){return this.name}getCloseTag(){return""}}class a extends s{constructor(e){super(e)}add(e){}getCloseTag(){return""}}class o{static getNode(e){if("string"==typeof e||e instanceof String)return new n(e);if(Array.isArray(e)){let t=[];for(let i of e){let e=this.getNode(i);Array.isArray(e)?t=t.concat(e):t.push(e)}return t}if("object"==typeof e){let t=[];for(let[i,n]of Object.entries(e)){if(this.isAttr(i,n))continue;if("attributes"===i)continue;let e;if(r[o.isOpenTag(i)])e=new a(i);else{e=new s(i);let t=this.getNode(n);e.addChildren(t)}let l=this.getAttrs(n);if(l&&l.length>0)for(const t of l)e.setAttribute(t.key,t.value);t.push(e)}return t}}static isOpenTag(e){let t;if(e){let i=e.split(" ");i&&i.length>0&&(t=i[0])}return t}static getObjectNode(e){return new s(e)}static getAttrs(e,t=!1){if(!e)return;let i=[];if(Array.isArray(e))for(const t of e){if("attributes"===t)return o.processAttributeArray(t);let e=this.getAttrs(t);Array.isArray(e)?i=i.concat(e):i.push(e)}else if("object"==typeof e)for(let[r,s]of Object.entries(e)){if("attributes"===r)return o.processAttributeArray(s);(t||this.isAttr(r,s))&&i.push({key:r,value:s})}return i}static processAttributeArray(e){let t=[];for(const i of e)t=t.concat(this.getAttrs(i,!0));return t}static isAttr(e,t=""){if(i[e]&&"string"==typeof t)return!0;if("object"==typeof e)for(let[t,r]of Object.entries(e))if(i[t]&&"string"==typeof r)return!0}}function l(e){let t=function(e){let t=function(e){let t=[];if(Array.isArray(e))for(let i of e){let e=o.getNode(i);Array.isArray(e)?t=t.concat(e):t.push(e)}else if("object"==typeof e){let i=o.getNode(e);Array.isArray(i)?t=t.concat(i):t.push(i)}return t}(e);return t}(e),i=[];for(const e of t)i.push(e.toHtml());return i.join("")}const c={toHtml:l};return t})()}));