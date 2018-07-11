import { Component, OnInit } from '@angular/core';
import { IntroduceService } from '../shared/introduce.service';
import { Introduce } from '../shared/introduce.model';


@Component({
  selector: 'app-introduce-list',
  templateUrl: './introduce-list.component.html',
  styleUrls: ['./introduce-list.component.css']
})
export class IntroduceListComponent implements OnInit {
  visible = true;
  toggleDiv()
  {
    this.visible = !this.visible;
  }

  constructor(private introduceService: IntroduceService) { }

  ngOnInit() {
    this.introduceService.getIntroduceList();
  }




}
