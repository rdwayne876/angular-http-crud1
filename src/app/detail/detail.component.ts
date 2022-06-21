import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  product:any = {}

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    var myvar:any = []

    this.activatedRoute.params.forEach(param => {
      myvar = param['id']
    });

    this.dataService.getOne(myvar).subscribe(
      (data:any) => {
        this.product = data
        console.log(this.product);
      }
    )
    
  }

}
