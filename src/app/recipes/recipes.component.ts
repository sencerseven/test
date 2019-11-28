import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {



  ngOnInit() {
  }

  constructor(private translate: TranslateService) {
    
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
