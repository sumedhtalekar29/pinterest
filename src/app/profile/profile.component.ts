import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  urls=[];
  onselect(e){
    if(e.target.files){
      for(let i=0; i<File.length; i++)
      {
        var reader= new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload=(events:any) =>{
          this.urls.push(events.target.result);
        }
      }
    }
  }

}
