import { ShieldBadge } from "./shield-badge.mjs";

export class Badges {
    constructor(items){
        return {
            section: [
                {
                    _class: "badges"
                },
                items?.map(item=> new ShieldBadge(item)),
                createCDNBadge(),
                createOpenbaseBadge(),
                createCodecovBadge()
            ]
        }
    }
}


function createCDNBadge(){
    return {
        a: {
            _class: "badge",
            _style: "margin-left:5px;",
            _href: "https://www.jsdelivr.com/package/npm/createmeal",
            img: {
                src: `https://data.jsdelivr.com/v1/package/npm/createmeal/badge`,
            },
        },
    }
}
function createOpenbaseBadge(){
    return {
        a: {
            _class: "badge",
            _style: "margin-left:5px;",
            _href: "https://openbase.com/js/createmeal?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge",
            img: {
                _src: "https://badges.openbase.com/js/featured/createmeal.svg?token=qN8WsbWRkOBtfXJ9tNG0KnUwxkjPAjs6HUSniqdmrCU=",
                _alt: "Featured on Openbase"
            }
        }
    }
}
function createCodecovBadge(){
    return {
        a: {
            _class: "badge",
            _style: "margin-left:5px;",
            _href: "https://codecov.io/gh/createmeal/createmeal",
            img: {
                _src: "https://codecov.io/gh/createmeal/createmeal/branch/master/graph/badge.svg?token=RG5SQ286T0"
            }
        }
    }
}