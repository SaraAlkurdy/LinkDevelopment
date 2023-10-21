import { Component, EventEmitter, Output } from '@angular/core';
import { Banner } from 'src/app/models/banner.interface';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  bannerSlides: Banner[] = [];
  selectedIdx = 0;
  @Output() onChangeBanner=new EventEmitter<number>();
  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.handleGetBannerDate();
  }

  handleGetBannerDate() {
    this.bannerService.getBannerData().subscribe((data) => {
      this.bannerSlides = data.slides;
    });
  }
  changeBanner(id: number) {
    this.selectedIdx = id;
    this.onChangeBanner.emit(id);
  }
}
