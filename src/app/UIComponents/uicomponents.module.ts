import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { FormsModule } from '@angular/forms';
import { NewsItemComponent } from './news-item/news-item.component';
import { EmptyDataComponent } from './empty-data/empty-data.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FacebookIconComponent } from './icons/facebook-icon/facebook-icon.component';
import { TwitterIconComponent } from './icons/twitter-icon/twitter-icon.component';
import { InstagramIconComponent } from './icons/instagram-icon/instagram-icon.component';
import { GooglePlayIconComponent } from './icons/google-play-icon/google-play-icon.component';
import { AppleStoreIconComponent } from './icons/apple-store-icon/apple-store-icon.component';
import { DateIconComponent } from './icons/date-icon/date-icon.component';
import { ShareIconComponent } from './icons/share-icon/share-icon.component';
import { FavoriteIconComponent } from './icons/favorite-icon/favorite-icon.component';

const components = [
  TabComponent, TabsComponent, NewsItemComponent, EmptyDataComponent, SpinnerComponent, FacebookIconComponent, TwitterIconComponent, InstagramIconComponent, GooglePlayIconComponent, AppleStoreIconComponent, DateIconComponent, ShareIconComponent, FavoriteIconComponent
]
@NgModule({
  declarations: [...components],
  imports: [CommonModule, FormsModule],
  exports: [...components],
})
export class UIComponentsModule { }
