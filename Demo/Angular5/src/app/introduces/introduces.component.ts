import { Component, OnInit } from '@angular/core';
import { IntroduceService } from './shared/introduce.service'
@Component({
  selector: 'app-introduces',
  templateUrl: './introduces.component.html',
  styleUrls: ['./introduces.component.css'],
  providers:[IntroduceService]
})
export class IntroducesComponent implements OnInit {

  constructor(private introduceService: IntroduceService) { }

  ngOnInit() {
  }

}
