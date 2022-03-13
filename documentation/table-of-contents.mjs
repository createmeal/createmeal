import { SummaryItem } from "./summary-item.mjs"

export class TableOfContents {
    constructor({summaryText}){
        return {
            details: [
                { summary: [summaryText] },
                {
                    ol: [
                        new SummaryItem("#about-the-project","About the Project",
                        [
                            {id: "#built-with", text: "Built With"}
                        ]),
                        new SummaryItem("#getting-started","Getting Started",
                        [
                            {id:  "#install",text: "Install"},
                            {id:  "#loading",text: "Loading"}
                        ]),
                        new SummaryItem("#usage","Usage",
                        [
                            {id: "#base-specification", text: "Base Specification"}
                        ]),
                        new SummaryItem("#license","License")
                    ],
                },
            ],
        }
    }
}