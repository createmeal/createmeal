export class TableOfContentItem {
    constructor({id,text}){
        return {
            li: {
                a: [{
                    _href: id
                },text],
            }
        }
    }
}