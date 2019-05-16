import { Pipe, PipeTransform } from "@angular/core";
//import { SafeHtml } from "@angular/platform-browser";
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: "highlight" })
export class Highlight implements PipeTransform {
    /* use this for single match search */
    static SINGLE_MATCH: string = "Single-Match";
    /* use this for single match search with a restriction that target should start with search string */
    static SINGLE_AND_STARTS_WITH_MATCH: string = "Single-And-StartsWith-Match";
    /* use this for global search */
    static MULTI_MATCH: string = "Multi-Match";

    constructor(private sanitizer: DomSanitizer) {}
    transform(
        contentString: string = null,
        stringToHighlight: string = null,
        option: string = "Single-And-StartsWith-Match",
        caseSensitive: boolean = false,
        highlightStyleName: string = "search-highlight"
    ) {
        if (stringToHighlight && contentString && option) {
            let regex: any = "";
            let caseFlag: string = !caseSensitive ? "i" : "";
            switch (option) {
                case "Single-Match": {
                    regex = new RegExp(stringToHighlight, caseFlag);
                    break;
                }
                case "Single-And-StartsWith-Match": {
                    regex = new RegExp("^" + stringToHighlight, caseFlag);
                    break;
                }
                case "Multi-Match": {
                    regex = new RegExp(stringToHighlight, "g" + caseFlag);
                    break;
                }
                default: {
                    // default will be a global case-insensitive match
                    regex = new RegExp(stringToHighlight, "gi");
                }
            }
            const replaced = contentString.replace(
                regex,
                (match) => `<span class="related-content-link" style="cursor:pointer;text-decoration:underline;color:#D40915;">${match}</span>`
            );
            return this.sanitizer.bypassSecurityTrustHtml(replaced);
        } else {
            return this.sanitizer.bypassSecurityTrustHtml(contentString);
        }
    }
}