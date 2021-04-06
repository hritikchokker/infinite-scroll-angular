import { Component, OnInit } from '@angular/core';

import { ApiDataService } from '../service/api-data.service';
import { FakerDataSource } from '../common/datasource';

@Component({
  selector: 'app-faker-module',
  templateUrl: './faker-module.component.html',
  styleUrls: ['./faker-module.component.scss']
})
export class FakerModuleComponent implements OnInit {
  dataSource: FakerDataSource;

  constructor(private factService: ApiDataService) {
    this.dataSource = new FakerDataSource(factService);
  }
  ngOnInit(): void {
  }

}
