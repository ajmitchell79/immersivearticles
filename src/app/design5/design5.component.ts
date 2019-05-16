import { Component, OnInit } from '@angular/core';
import { TextAnalysisService } from '../services/text-analysis.service';
import { DataService } from '../services/data.service';
import { BingEntity } from '../models/bing/bingEntity';
import { TextChunk } from '../models/bing/textChunk';
import { TextHighlightService } from '../services/text-highlight.service';
import { ElementScrollPercentage } from "../services/element-scroll-percentage.service";

@Component({
  selector: 'app-design5',
  templateUrl: './design5.component.html',
  styleUrls: ['./design5.component.scss']
})
export class Design5Component implements OnInit {

  entities: BingEntity[];
  content: TextChunk[];
  loading: boolean;
  innerScroll: number;

  constructor(
    private textAnalysisService: TextAnalysisService, 
    private dataService: DataService,
    private highlightService: TextHighlightService,
    private elementScrollPercentage: ElementScrollPercentage) {
      this.innerScroll = 0;
    }

  ngOnInit() {
    const articleData = this.dataService.articleChartData();
    this.loading = true;
    this.content = [{content: articleData.content, name: ''}];
    this.textAnalysisService.analyze(articleData.content)
      .subscribe(response => {
        this.entities = response.entities.map((entity, index) => ({...entity, display: this.entityDisplayLevel(index, response.entities.length)}));
        this.content = this.highlightService.splitText(articleData.content, response.entities);
        this.loading = false;
      });
  }

  updateEntityDisplay(){
    if(this.loading)
      return;

      for(let i=0; i<this.entities.length; i++){
        this.entities[i].display = this.entityDisplayLevel(i, this.entities.length);
      }
    // this.entities = this.entities.map((entity, index) =>
    // {
    //   return {
    //     ...entity,
    //     display: this.entityDisplayLevel(index, this.entities.length)
    //   }
    // });
  }

  entityDisplayLevel(index, count) {
    const center = count / (100/this.innerScroll);
    const distance = Math.abs(index - center);
    return distance > 3 ? 0 : distance > 1 ? 1 : 2;
  }
  
  public recordInnerScroll( percent: number ) : void {
    this.innerScroll = percent;
    //console.log(percent);
    this.updateEntityDisplay();
  }

}
