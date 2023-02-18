import { TableOfContentItem } from "./table-of-contents-item.mjs";

export class SummaryItem {
    constructor(id,text,topics){
        return {
            li: {
                a: {
                    href: id,
                    span: text,
                },
                ul: topics?.map(topic => new TableOfContentItem(topic)),
            },
        }
    }
}