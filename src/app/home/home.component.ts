import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:any = [];

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe(
      ( data: any[]) =>{
        this.products = data;
        console.log(this.products);
        
    })
  }

}
