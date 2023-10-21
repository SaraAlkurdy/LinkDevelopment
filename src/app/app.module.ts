import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { UIComponentsModule } from './UIComponents/uicomponents.module';
import { NewsComponent } from './components/news/news.component';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, FooterComponent, AboutComponent, NewsComponent,BannerComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, UIComponentsModule, FormsModule],
  exports: [HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
