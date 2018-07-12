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
  showForEdit(intro: Introduce)
  {
    this.introduceService.selectedIntroduce = Object.assign({},intro);
  }

  onDelete(id: number)
  {
    if(confirm('Are you sure to delete this record ?')==true){
      this.introduceService.deleteIntroduce(id).subscribe(x=>{
        this.introduceService.getIntroduceList();
      })
    }
  }


}
