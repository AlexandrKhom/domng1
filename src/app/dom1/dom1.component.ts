import { Component, OnInit } from '@angular/core';
import {usersWithAddress} from '../data/data';

@Component({
  selector: 'app-dom1',
  templateUrl: './dom1.component.html',
  styleUrls: ['./dom1.component.css']
})
export class Dom1Component implements OnInit {
  usersWithAddress = usersWithAddress;
  constructor() { }

  ngOnInit(): void {
  }

}
