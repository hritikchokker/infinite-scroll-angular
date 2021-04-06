import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

import { ApiDataService } from 'src/app/service/api-data.service';

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
export class FactsDataSource extends DataSource<Fact | undefined> {
  private cachedFacts = Array.from<Fact>({ length: 0 });
  private dataStream = new BehaviorSubject<(Fact | undefined)[]>(this.cachedFacts);
  private subscription = new Subscription();

  private pageSize = 10;
  private lastPage = 0;

  constructor(private factService: ApiDataService) {
    super();

    // Start with some data.
    this._fetchFactPage();
  }

  connect(collectionViewer: CollectionViewer): Observable<(Fact | undefined)[] | ReadonlyArray<Fact | undefined>> {
    this.subscription.add(collectionViewer.viewChange.subscribe(range => {

      const currentPage = this._getPageForIndex(range.end);

      if (currentPage && range) {
        console.log(currentPage, this.lastPage);
      }

      if (currentPage > this.lastPage) {
        this.lastPage = currentPage;
        this._fetchFactPage();
      }
    }));
    return this.dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }

  private _fetchFactPage(): void {
    for (let i = 0; i < this.pageSize; ++i) {
      this.factService.getRandomFact().subscribe((res: any) => {
        this.cachedFacts = this.cachedFacts.concat(res);
        this.dataStream.next(this.cachedFacts);
      });
    }
  }

  private _getPageForIndex(i: number): number {
    return Math.floor(i / this.pageSize);
  }

}


