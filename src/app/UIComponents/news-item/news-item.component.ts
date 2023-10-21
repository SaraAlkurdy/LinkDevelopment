import { Component, Input } from '@angular/core';
import { CategoryEnum } from 'src/app/enums/category.enum';
import { News } from 'src/app/models/news.interface';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
  @Input() news: News[] = [];
  categoryEnum = CategoryEnum; 
}
