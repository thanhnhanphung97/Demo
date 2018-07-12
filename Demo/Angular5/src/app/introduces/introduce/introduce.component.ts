import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { IntroduceService } from '../shared/introduce.service';
import { Introduce } from '../shared/introduce.model';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent implements OnInit {

  constructor(private introduceService: IntroduceService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if(form!=null)
      form.reset();
    this.introduceService.selectedIntroduce = {
      Id: null,
      Name: '',
      Data: null,
      Img: '',
      Describe: '',
      Color: ''
    }
  }

  onSubmit(form?: NgForm){
    if(form.value.Id==null){
      confirm(form.value.Name);
        this.introduceService.postIntroduce(form.value).subscribe(data=>{
          this.resetForm(form);
          this.introduceService.getIntroduceList();

        })
    }
    else {
      this.introduceService.putIntroduce(form.value.Id,form.value).subscribe(data=>{
        this.resetForm(form);
        this.introduceService.getIntroduceList();
      })
    }
  }


}
