import {Injectable} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd/modal';
import {ModalConfirmDeleteRequestComponent} from './component/modal-confirm-delete-request/modal-confirm-delete-request.component';


export class SharedService {

  constructor(
    private modalService: NzModalService
  ) {
  }

  showModalDelete() {
    return this.modalService.confirm({
      nzTitle: 'Confirm Delete Item',
      nzContent: ModalConfirmDeleteRequestComponent
    });
  }
}


