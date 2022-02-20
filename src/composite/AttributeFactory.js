import attrs from "../attributes.js";

/**
 * Class specialized in manage attributes
 */
export default class NodeFactory {

    constructor(options={}){
        this.options = options;
    }

    /**
     * check if the parameter is a "attributes" field
     * or it starts with "_" representing a custom attribute
     * @param {*} objectFieldKey the name of an object field
     * @returns {boolean} true if represents an attribute.
     */
    isFieldRepresentingAttributes(objectFieldKey) {
        if(objectFieldKey.startsWith("_"))
            return true;
        return objectFieldKey === "attributes";
    }

    /**
     * Call getAttrs, iterate over result and
     * set node attributes
     * @param {Node.js} node instance of Node.js
     * @param {[]|{}} jsonFieldValue value of a field in json
     */
    setNodeAttributes(node, jsonFieldValue) {
        let attrs = this.getAttrs(jsonFieldValue);
        if (attrs && attrs.length > 0)
            for (const attr of attrs)
                node.setAttribute(attr.key, attr.value);
    }

    /**
     * extracts attr of objects or arrays.
     * 
     * an object field will be considered an attribute when
     * the field name starts with "_", the name of fild is equals
     * to "attributes" and field name is in list of attribute.js
     * @param {[]|{}} value an object or array containing attributes
     * @param {boolean} skipAttrValidation used for the field "attributes", once these attributes must never be checked
     * @returns {[]} array of attributes
     */
    getAttrs(value, skipAttrValidation=false){
        if(!value)
            return;
        let attrs = [];
        if(Array.isArray(value)){
            for(const item of value){
                if(item==="attributes"){
                    return this.processAttributeArray(item);
                }  
                let newAttrs = this.getAttrs(item);
                if(Array.isArray(newAttrs))
                    attrs = attrs.concat(newAttrs);    
                else
                    attrs.push(newAttrs);
            }
        }
        else if(typeof value ==='object'){
            for(let [key, entryValue] of Object.entries(value)){
                if(key.startsWith("_")){
                    attrs.push({"key":key.substring(1),"value":entryValue}); 
                    continue;
                }
                if(key==="attributes"){
                    return this.processAttributeArray(entryValue);
                }                 
                if(skipAttrValidation||this.isAttr(key, entryValue))
                    attrs.push({"key":key,"value":entryValue});    
            }
        }        
        return attrs;
    }

    /**
     * Process the field "attributes" of a tag definition
     * @param {[]} value an array of attributes
     * @returns {[]}
     */
    processAttributeArray(value) {
        let attrs = [];
        for (const attr of value) {
            attrs =attrs.concat(this.getAttrs(attr, true));
        }
        return attrs;
    }

    /**
     * Check whether the name represents an attribute or not
     * @param {String|Object} name attribute name
     * @param {String|Object} value 
     * @returns 
     */
    isAttr(name, value=""){
        if(attrs[name] && typeof value==="string")
            return true;
        if(typeof name === 'object'){ 
            for(let [key, entryValue] of Object.entries(name)){
                if(attrs[key]&&typeof entryValue==="string")
                    return true;
            }
        }
    }

}