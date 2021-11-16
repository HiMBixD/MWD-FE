import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {handleRequestAddMoney, selectHandleAddMoneyRequestResult} from '../../store';
import {Pagination} from '../../models/pagination.model';
import {ModalConfirmDeleteRequestComponent} from '../../services/component';
import {NzModalService} from 'ng-zorro-antd/modal';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-table-add-money-request',
  templateUrl: './table-add-money-request.component.html',
  styleUrls: ['./table-add-money-request.component.scss']
})
export class TableAddMoneyRequestComponent implements OnInit {
  @Output() search = new EventEmitter();
  @Input() dataResponse: any;
  @Input() isLoading: boolean;
  statusSelected = null;
  usernameSearch = '';
  pagination: Pagination;
  constructor(
    private store: Store<WebPagesManagementState>,
    private modalService: NzModalService
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

  actionRequest(num: number, item, reason?): void {
    this.store.dispatch(handleRequestAddMoney({
      body: {
        requestId: item.requestId,
        type: num,
        reason
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

  showModalDelete(item): void {
    const unsub$ = new Subject();
    const modal = this.modalService.create({
      nzTitle: 'Confirm Delete Item',
      nzContent: ModalConfirmDeleteRequestComponent,
      nzOkText: 'Submit',
      nzOnOk: () => new Promise((resolve, reject) => {
        if (modal.getContentComponent().reason?.length > 0) {
          this.actionRequest(2, item, modal.getContentComponent().reason);
          this.store.pipe(select(selectHandleAddMoneyRequestResult)).pipe(takeUntil(unsub$)).subscribe(val => {
            if (val) {
              if (val.success === true) {
                resolve(val);
              }
              unsub$.next();
              unsub$.complete();
            }
          });
        }
      })
    });
  }
}
