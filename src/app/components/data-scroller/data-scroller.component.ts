import {
  BehaviorSubject,
  Observable,
  Subscription
} from 'rxjs';
import {
  CollectionViewer,
  DataSource
} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

import { ApiDataService } from 'src/app/service/api-data.service';
import { FactsDataSource } from 'src/app/common/datasource';

export interface Fact {
  text?: string;
  date?: string;
}



@Component({
  selector: 'app-data-scroller',
  templateUrl: './data-scroller.component.html',
  styleUrls: ['./data-scroller.component.scss']
})
export class DataScrollerComponent implements OnInit {
  dataSource: FactsDataSource;

  constructor(private factService: ApiDataService) {
    this.dataSource = new FactsDataSource(factService);
  }
  ngOnInit(): void {
  }

}



