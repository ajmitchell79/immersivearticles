import { Pipe, PipeTransform } from "@angular/core";
//import { SafeHtml } from "@angular/platform-browser";
import { DomSanitizer } from '@angular/platform-browser';
import { KeywordsService} from './keywordsService'

@Pipe({ name: "highlight" })
export class Highlight implements PipeTransform {
    /* use this for single match search */
    static SINGLE_MATCH: string = "Single-Match";
    /* use this for single match search with a restriction that target should start with search string */
    static SINGLE_AND_STARTS_WITH_MATCH: string = "Single-And-StartsWith-Match";
    /* use this for global search */
    static MULTI_MATCH: string = "Multi-Match";

    kwd = [];

    constructor(private sanitizer: DomSanitizer, keywords: KeywordsService) {
       this.kwd = keywords.getKeywords();
    }
    transform(
        contentString: string = null,
        stringToHighlight: string = null,
    ) {
        if (stringToHighlight && contentString) {
            let regex: any = "";
            let replaced = contentString;
            for (let i = 0; i < this.kwd.length; i++) {
              regex = new RegExp(this.kwd[i], "gi");
              replaced = replaced.replace(regex, (match) => `<span ` + `data-word="` + this.kwd[i] + `" `  + `class="related-content-link" style="cursor:pointer;text-decoration:underline;color:#D40915;">${match}</span>`);
            }
            return this.sanitizer.bypassSecurityTrustHtml(replaced);
        } else {
            return this.sanitizer.bypassSecurityTrustHtml(contentString);
        }
    }
}