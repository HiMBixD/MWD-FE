import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import { WebPagesRoutingModule } from './web-pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {webPagesManagementReducers} from './web-pages.reducer';
import {webPagesManagementEffect} from './web-pages.effect';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {NzProgressModule} from 'ng-zorro-antd/progress';
import {VimeModule} from '@vime/angular';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzEmptyModule} from 'ng-zorro-antd/empty';
// import {NzTableModule} from 'ng-zorro-antd/table';




@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
  ],
    imports: [
        StoreModule.forFeature('webPagesManage', webPagesManagementReducers),
        EffectsModule.forFeature(webPagesManagementEffect),
        CommonModule,
        WebPagesRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NzLayoutModule,
        NzMenuModule,
        NzBreadCrumbModule,
        NzIconModule,
        NzGridModule,
        NzInputModule,
        NzButtonModule,
        NzAvatarModule,
        NzDropDownModule,
        NzPopoverModule,
        NzFormModule,
        NzSelectModule,
        NzCheckboxModule,
        NzSpinModule,
        NzDescriptionsModule,
        NzSwitchModule,
        NzCardModule,
        NzModalModule,
        NzToolTipModule,
        NzPopconfirmModule,
        NzPaginationModule,
        NgxDropzoneModule,
        NzProgressModule,
        VimeModule,
        NzListModule,
        NzEmptyModule,
        // NzTableModule,
    ]
})
export class WebPagesModule { }
