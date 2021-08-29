import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : HomeService ) { }

  ngOnInit(): void{
    this.service.getHome().subscribe();
  }

}
