export class ShieldBadge {
    constructor({className="badge",style="margin-left:5px;",href,label,message,color}){
        return {
            a: {
                _style: style,
                _class: className,
                _href: href,
                img: {
                    src: `https://img.shields.io/badge/${label}-${message}-${color}`,
                },
            },
        }
    }
}