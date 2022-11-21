import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  
  formData: FormData | null| undefined
  fileName: string = "";
  
  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    
  }

  onFileSelected(event:any){
    console.log("Upload afbeelding");
    console.log(event.target.files[0]);
    const fileReader = new FileReader()
    
    const file:File = event.target.files[0];
    console.log(file);
    if (file) {

        this.fileName = file.name;
        console.log(this.fileName);
        const formData = new FormData();
        console.log(formData);
        formData.append("thumbnail", file);
        console.log(formData);
        //const upload$ = this.http.post("/api/thumbnail-upload", formData);

        //upload$.subscribe();
    }
  }

  OnSubmit(){
    console.log(this.formData);
  }

}
