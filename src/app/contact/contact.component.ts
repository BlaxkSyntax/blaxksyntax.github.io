import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  constructor( public fb:FormBuilder, private http:HttpClient) { 
    this.form = this.fb.group({
      name : "",
      surname : "",
      email : "",
      subject : "",
      msg : ""
    })
  }

  ngOnInit(): void {
  }

  submitform () {
    console.log(this.form.value)
    console.log(this.http.post("https://my-profile-api-server.herokuapp.com/email",this.form.value).subscribe(data => {
        console.log(data);
    }));
  }

}
