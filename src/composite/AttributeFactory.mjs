import attrs from "../attributes.mjs";
import tags from "../tags.mjs";

/**
 * Class specialized in manage attributes
 */
export default class AttributeFactory {

    constructor(options={}){
        this.options = options;
        this.booleanAttibutes = Object.values(attrs).filter(attribute=> attribute.datatype?.includes("boolean"));
    }

    /**
     * check whether the parameter is an "attributes" field
     * or it starts with "_" representing a custom attribute
     * @param {*} objectFieldKey the name of an object field
     * @returns {boolean} true if represents an attribute.
     */
     isFieldRepresentingAttributes(objectFieldKey, entryValue) {
        if(objectFieldKey.indexOf("_")===0)
            return true;
        if(this.isAttr(objectFieldKey, entryValue)){
            return true;
        }
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
                attrs = attrs.concat(this.getAttrs(item));
            }
        }
        else if(typeof value ==='object'){
            for(let [key, entryValue] of Object.entries(value)){
                if(key.indexOf("_")===0){
                    attrs.push(this.getAttribute(key.substring(1),entryValue)); 
                    continue;
                }
                if(this.isAttibutePrefix(key)){
                    attrs.push(this.getAttribute(key,entryValue));
                    continue;
                }
                if(key==="attributes"){
                    return this.processAttributeArray(entryValue);
                }                 
                if(skipAttrValidation||this.isAttr(key, entryValue))
                    attrs.push(this.getAttribute(key,entryValue));
            }
        }        
        return attrs;
    }
    /**
     * Generate an object that represents the key/value of an attribute.
     * @param {string} key name of attribute
     * @param {string} value value of atribute
     * @returns 
     */
    getAttribute(key,value){
        if(this.isBooleanAttribute(key)){
            return {"key":key};
        }
        return {"key":key,"value":value};
    }
    /**
     * Check if an attribute is boolean or not.
     * @param {string} fieldKey 
     * @returns 
     */
    isBooleanAttribute(fieldKey){
        return this.booleanAttibutes.find(attribute => attribute.attribute === fieldKey) !== undefined;
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
        if(typeof value==="string" && attrs[name] && !tags[name])
            return true;
        return this.isAttibutePrefix(name);
    }

    /**
     * attributePrefixAdd:["*", "data-", "aria-"]
     * @param {String} fieldKey 
     * @returns
     */
     isAttibutePrefix(fieldKey){
        let prefixes = this.options.attributePrefixAdd;
        if(prefixes && prefixes.length>0){
            for(const prefix of prefixes){
                if(fieldKey.indexOf(prefix)===0){
                    return true
                }
            }
        }
        return false;
    }

}