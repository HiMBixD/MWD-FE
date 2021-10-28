import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {handleRequestAddMoney} from '../../store';
import {Pagination} from '../../models/pagination.model';

@Component({
  selector: 'app-table-add-money-request',
  templateUrl: './table-add-money-request.component.html',
  styleUrls: ['./table-add-money-request.component.scss']
})
export class TableAddMoneyRequestComponent implements OnInit {
  @Output() search = new EventEmitter();
  @Input() dataResponse: any;
  statusSelected = null;
  usernameSearch = '';
  pagination: Pagination;
  constructor(
    private store: Store<WebPagesManagementState>
  ) { }

  ngOnInit(): void {
    this.pagination = {
      pageNumber: 0,
      pageSize: 10
    };
  }

  getStatusName(code: string): string {
    return code === '0' ? 'New' : code === '1' ? 'Approved' : code === '2' ? 'Denied' : code;
  }

  actionRequest(num: number, item): void {
    this.store.dispatch(handleRequestAddMoney({
      body: {
        requestId: item.requestId,
        type: num,
      },
      searchBody: {
        username: this.usernameSearch,
        status: this.statusSelected,
        pagination: this.pagination
      }
    }));
  }

  onSearch(page?): void {
    if (page) {
      this.pagination = {
        pageSize: this.pagination.pageSize,
        pageNumber: page - 1
      };
    }
    this.search.emit({
      username: this.usernameSearch,
      status: this.statusSelected,
      pagination: this.pagination
    });
  }
}
