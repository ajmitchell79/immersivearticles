import { Component, OnInit } from '@angular/core';
import { TextAnalysisService } from '../services/text-analysis.service';
import { BingEntity } from '../models/bing/bingEntity';
import { BingEntityResponse } from '../models/bing/bingEntityResponse';

@Component({
  selector: 'app-design5',
  templateUrl: './design5.component.html',
  styleUrls: ['./design5.component.scss']
})
export class Design5Component implements OnInit {

  textAnalysisService: TextAnalysisService;
  entities: BingEntity[];
  text: string;

  constructor(textAnalysisService: TextAnalysisService) {
    this.textAnalysisService = textAnalysisService;
  }

  ngOnInit() {
    const text = document.getElementById('article-text').innerHTML;
    this.textAnalysisService.analyze(text)
      .subscribe(response => this.entities = response.entities);
  }

}
