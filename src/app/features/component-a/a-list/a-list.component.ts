import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MongoDb } from 'src/app/services/MongoDb.Service';

@Component({
  selector: 'app-a-list',
  templateUrl: './a-list.component.html',
  styleUrls: ['./a-list.component.css']
})
export class AListComponent implements OnInit {

  constructor(private Service: MongoDb) { }

  ngOnInit(): void {
  }

}
