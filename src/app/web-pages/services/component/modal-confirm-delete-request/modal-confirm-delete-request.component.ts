import {Component, Injectable, OnInit} from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-confirm-delete-request',
  templateUrl: './modal-confirm-delete-request.component.html',
  styleUrls: ['./modal-confirm-delete-request.component.scss']
})
export class ModalConfirmDeleteRequestComponent implements OnInit {
  reason = '';

  constructor(
    private modal: NzModalRef
  ) { }

  ngOnInit(): void {
  }
}
