import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDetailsModel} from '../../models/user-details.model';
import {activeAccount, addProduct, deleteFileImage, searchUserImage, selectActiveResult, setUserAvatar} from '../../store';
import {Subject} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {takeUntil} from 'rxjs/operators';
import {AppConstants} from '../../../app.constant';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {CommonService} from '../../services/common.service';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {Pagination} from '../../models/pagination.model';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {
  @Input() fileUploadedId;
  @Input() listAvatar;
  @Input() isLoading: boolean;
  @Input() userData: UserDetailsModel;
  addSongForm: FormGroup;
  isVisibleUploadAvatar = false;
  isVisiblePickAvatar = false;
  isUsedUpload = false;
  fileList: File[] = [];
  fileProgress = 0;
  uploadedAvatar;
  previewVisible = false;
  previewImage: string | undefined = '';
  urlImg = AppConstants.urlImg;
  imgChecked;
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private store: Store<WebPagesManagementState>,
  ) { }
  pagination: Pagination;
  ngOnInit(): void {
    this.pagination = {
      pageNumber: 0,
      pageSize: 4
    };
    this.addSongForm = this.fb.group({
      thumbnail: [null, [Validators.required]],
      productName: [null, [Validators.required, Validators.maxLength(25)]]
    });
  }
  onSelect(event): void {
    this.fileProgress = -1;
    this.fileList.pop();
    this.fileList.push(...event.addedFiles);
  }
  checkedItem($event: any): void {
    if (this.imgChecked === $event) {
      this.imgChecked = null;
    } else {
      this.imgChecked = $event;
    }
  }

  deleteImg(item): void {
    this.store.dispatch(deleteFileImage({
      body: {
        id: item.id
      },
      searchBody: {fileType: AppConstants.AVATAR_FILE, pagination: this.pagination}
    }));
  }

  onRemove(event): void  {
    this.fileList.splice(this.fileList.indexOf(event), 1);
  }

  getStatusProgressBar(): any {
    return this.fileProgress === -2 ? 'exception' :
      this.fileProgress > -1 ? 'active' :
        this.fileProgress >= 100 ? null : 'exception';
  }
  submitForm(): void {
    this.store.dispatch(addProduct({body: {
        fileId: this.fileUploadedId,
        productAvatar: this.addSongForm.value.thumbnail,
        productName: this.addSongForm.value.productName
      }}));
  }

  handleCancel(val): void {
    if (val === 'upload') {
      this.isVisibleUploadAvatar = false;
      this.fileList.pop();
      this.fileProgress = -1;
    } else if (val === 'pick') {
      this.isVisiblePickAvatar = false;
    }
  }

  handleOk(val): void {
    if (val === 'upload') {
      this.fileProgress = 0;
      this.commonService.uploadFile({
        file: this.fileList[0],
        description: 'Avatar File',
        fileType: AppConstants.AVATAR_FILE,
        fileName: this.fileList[0].name,
        typeUpload: AppConstants.TYPE_UPLOAD.IMAGE
      })
        .subscribe(
          event => {
            if (event.type === HttpEventType.UploadProgress) {
              this.fileProgress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              if (!event?.body?.success) {
                this.fileProgress = -2;
              } else {
                this.uploadedAvatar = event.body.data;
                this.isUsedUpload = true;
                this.addSongForm.patchValue({thumbnail: event.body.data});
                this.fileProgress = -1;
                this.isVisibleUploadAvatar = false;
                this.fileList.pop();
              }
            }
          },
          err => {
            this.fileProgress = -2;
          }
        );
    } else if (val === 'pick') {
      this.addSongForm.patchValue({thumbnail: this.imgChecked});
      this.isVisiblePickAvatar = false;
      this.isUsedUpload = false;
    }

  }

  onSearch(page?): void {
    if (page) {
      this.pagination = {
        pageSize: this.pagination.pageSize,
        pageNumber: page - 1
      };
    }
    this.store.dispatch(searchUserImage({body: {fileType: AppConstants.AVATAR_FILE, pagination: this.pagination}}));
  }

  showModal(val): void {
    if (val === 'upload') {
      this.isVisibleUploadAvatar = true;
    } else if (val === 'pick') {
      this.isVisiblePickAvatar = true;
      this.pagination = {
        pageNumber: 0,
        pageSize: 4
      };
      this.store.dispatch(searchUserImage({body: {fileType: AppConstants.AVATAR_FILE, pagination: this.pagination}}));
    }
  }

  changeTypeFileUsed(): void {

    if (this.isUsedUpload) {
      this.addSongForm.patchValue({thumbnail: this.uploadedAvatar});
    } else {
      this.addSongForm.patchValue({thumbnail: this.imgChecked});
    }
  }
}
