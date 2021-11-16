import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {Observable} from 'rxjs';
import {UserDetailsModel} from '../../models/user-details.model';
import {
  deleteFileMusic,
  searchUserMusic,
  selectMyInfo,
  selectMyInfoLoadingState,
  selectUserImageList,
  selectUserMusicList,
  setUserAvatar
} from '../../store';
import {AppConstants} from '../../../app.constant';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {CommonService} from '../../services/common.service';
import {Pagination} from '../../models/pagination.model';

@Component({
  selector: 'app-upload-music-page',
  templateUrl: './upload-music-page.component.html',
  styleUrls: ['./upload-music-page.component.scss']
})
export class UploadMusicPageComponent implements OnInit {
  fileProgress = 0;
  fileList: File[] = [];
  isLoading$: Observable<boolean>;
  fileUploadedId;
  userDetails$: Observable<UserDetailsModel>;
  listAvatar$: Observable<any>;
  isChooseUpload = true;
  isVisiblePickFile = false;
  listFileMusic$: Observable<any>;
  songChecked = {
    id: null,
    name: null
  };
  urlMusic = AppConstants.urlMusic;
  uploadMusicDescription: any;
  pagination: Pagination;
  constructor(
    private store: Store<WebPagesManagementState>,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.userDetails$ = this.store.pipe(select(selectMyInfo));
    this.isLoading$ = this.store.pipe(select(selectMyInfoLoadingState));
    this.listAvatar$ = this.store.pipe(select(selectUserImageList));
    this.pagination = {
      pageNumber: 0,
      pageSize: 5
    };
  }
  onSelect(event): void {
    this.fileProgress = -1;
    this.fileList.pop();
    this.fileList.push(...event.addedFiles);
  }

  onRemove(event): void  {
    this.fileList.splice(this.fileList.indexOf(event), 1);
  }

  getStatusProgressBar(): any {
    return this.fileProgress === -2 ? 'exception' :
      this.fileProgress > -1 ? 'active' :
        this.fileProgress >= 100 ? null : 'exception';
  }

  handleCancel(num): void {
    if (num === 1) {
      this.isVisiblePickFile = false;
    } else if (num === 2) {
    } else if (num === 3) {
    }
  }

  handleOk(val): void {
    if (val === 'pickSong') {
      this.fileUploadedId = this.songChecked.id;
      this.isVisiblePickFile = false;
    }
  }

  checkedItem($event: any): void {
    if (this.songChecked.id === $event.id) {
      this.songChecked = {
        name: null,
        id: null
      };
    } else {
      this.songChecked = {
        id: $event.id,
        name: $event.metadata.fileName
      };
    }
  }

  deleteSong(item): void {
    this.store.dispatch(deleteFileMusic({
      body: {
        id: item.id
      },
      searchBody: { pagination: this.pagination}
  }));
  }

  onUpload(): void {
    this.fileProgress = 0;
    this.commonService.uploadFile({
      file: this.fileList[0],
      description: this.uploadMusicDescription,
      fileType: AppConstants.MUSIC,
      fileName: this.fileList[0].name,
      typeUpload: AppConstants.TYPE_UPLOAD.MUSIC
    })
      .subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.fileProgress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            if (!event?.body?.success) {
              this.fileProgress = -2;
            } else {
              this.fileUploadedId = event.body.data;
              this.fileProgress = -1;
            }
          }
        },
        err => {
          this.fileProgress = -2;
        }
      );
  }

  openModalPickFile(): void {
    this.isVisiblePickFile = true;
    this.pagination = {
      pageSize: 5,
      pageNumber: 0
    };
    this.store.dispatch(searchUserMusic({
      body: {
        pagination: this.pagination
      }
    }));
    this.listFileMusic$ = this.store.pipe(select(selectUserMusicList));
  }

  onSearch(page?): void {
    if (page) {
      this.pagination = {
        pageSize: this.pagination.pageSize,
        pageNumber: page - 1
      };
    }
    this.store.dispatch(searchUserMusic({body: {pagination: this.pagination}}));
  }
}
