import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {handleRequestAddMoney} from '../../store';

@Component({
  selector: 'app-table-add-money-request',
  templateUrl: './table-add-money-request.component.html',
  styleUrls: ['./table-add-money-request.component.scss']
})
export class TableAddMoneyRequestComponent implements OnInit {
  @Output() search = new EventEmitter();
  @Input() listData: any;
  statusSelected = null;
  usernameSearch = '';
  constructor(
    private store: Store<WebPagesManagementState>
  ) { }

  ngOnInit(): void {
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
        status: this.statusSelected
      }
    }));
  }

  onSearch(): void {
    this.search.emit({
      username: this.usernameSearch,
      status: this.statusSelected
    });
  }
}
