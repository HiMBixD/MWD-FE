import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {WebPagesManagementState} from '../../web-pages.reducer';
import {Observable} from 'rxjs';
import {UserDetailsModel} from '../../models/user-details.model';
import {selectMyInfo} from '../../store';
import {NzUploadChangeParam, NzUploadFile} from 'ng-zorro-antd/upload';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  userDetails$: Observable<UserDetailsModel>;
  isVisible = false;
  isVisible2 = false;
  isConfirmLoading;
  fileList: NzUploadFile[] = [];
  previewImage: string | undefined = '';
  previewVisible = false;
  constructor(private store: Store<WebPagesManagementState>) { }

  ngOnInit(): void {
    this.userDetails$ = this.store.pipe(select(selectMyInfo));

  }
  showModal(num): void {
    num === 1 ? this.isVisible = true : this.isVisible2 = true;
  }

  handleOk(): void {
    this.isVisible = false;

  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      console.log(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      console.log(`${file.name} file upload failed.`);
    }
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  }

  handlePreview = async (file: NzUploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  }

}
