import { Component } from '@angular/core';
import { CategoryEnum } from 'src/app/enums/category.enum';
import { NewsCategory } from 'src/app/models/news-category';
import { News } from 'src/app/models/news.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  newsCategory: NewsCategory[] = [];
  news: News[] = [];
  categoryEnum = CategoryEnum;

  selectedTab: number = 0;
  selectedCategory: number;
  filteredNews: any;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.handleGetNewsCategories();
    this.handleGetNewsListing()
  }

  handleGetNewsCategories() {
    this.newsService.getNewsCategories().subscribe((data) => {
      console.log("🚀 ~ file: news.component.ts:21 ~ NewsComponent ~ this.newsService.getNewsCategories ~ data:", data)
      this.newsCategory = data?.newsCategory;
      this.newsCategory.unshift({ id: 0, name: 'All news' })
    });
  }

  handleGetNewsListing() {
    this.newsService.getNewsListing().subscribe((data) => {
      this.news = data.News;
      this.filteredNews = data.News;
    })
  }

  handleChangeNewsTab(category: number) {
    if (category == CategoryEnum.All_news) {
      this.filteredNews = this.news;
    } else {
      this.filteredNews = this.news.filter((item: News) => parseInt(item.categoryID) == this.selectedTab);
    }

  }
}
