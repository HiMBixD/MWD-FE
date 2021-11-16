import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pagination} from '../../models/pagination.model';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {NzModalService} from 'ng-zorro-antd/modal';
import {handleRequestRegisterSinger, selectHandleRegisterSingerRequestResult} from '../../store';
import {ModalConfirmDeleteRequestComponent} from '../../services/component';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-table-register-singer',
  templateUrl: './table-register-singer.component.html',
  styleUrls: ['./table-register-singer.component.scss']
})
export class TableRegisterSingerComponent implements OnInit {
  @Output() search = new EventEmitter();
  @Input() dataResponse: any;
  @Input() isLoading: boolean;
  statusSelected = null;
  usernameSearch = '';
  pagination: Pagination;
  isVisible = false;
  htmlString: any;
  constructor(
    private store: Store<WebPagesManagementState>,
    private modalService: NzModalService,
    private sanitizer: DomSanitizer
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
    this.store.dispatch(handleRequestRegisterSinger({
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
          this.store.pipe(select(selectHandleRegisterSingerRequestResult)).pipe(takeUntil(unsub$)).subscribe(val => {
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

  ViewModalRegister(linkFile): void {
    this.htmlString = linkFile;
    this.isVisible = true;
  }
}
