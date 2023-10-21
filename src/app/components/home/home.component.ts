import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  imagesPath="../../../assets/images/";
  decors=[
    {id:0,name:'decore-orange.svg'},
    {id:2,name:'decore-green.svg'},
    {id:1,name:'decore-purple.svg'},
  ]
  selectedDecore=this.decors[0].name;
  onBannerChanged(id:number){
    this.selectedDecore=this.decors.find(x=> x.id==id).name;
  }
}
