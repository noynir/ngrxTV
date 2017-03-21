import {Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoginViewComponent implements OnInit {

  @Input()
  private submitText:string = 'submit'

  @Output()
  private onFormSubmit=new EventEmitter<{email:string,password:string}>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(data){

    if(data.valid){
        this.onFormSubmit.emit({email:data.value['email'],password:data.value['password']});
    }

  }


}
