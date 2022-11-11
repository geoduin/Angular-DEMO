import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
const uri = "mongodb+srv://oefen:<password>@oefencluster.howwn.mongodb.net/?retryWrites=true&w=majority";

@Component({
  selector: 'app-a-details',
  templateUrl: './a-details.component.html',
  styleUrls: ['./a-details.component.css']
})
export class ADetailsComponent implements OnInit {
  userId : string | null = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Data ophalen die daar bij hoort, op basis van de ID
    this.route.paramMap.subscribe(param =>  {
      this.userId =  param.get("userId");
    });
  }

}
