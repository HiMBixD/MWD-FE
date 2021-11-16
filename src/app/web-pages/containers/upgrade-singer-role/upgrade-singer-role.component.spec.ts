import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeSingerRoleComponent } from './upgrade-singer-role.component';

describe('UpgradeSingerRoleComponent', () => {
  let component: UpgradeSingerRoleComponent;
  let fixture: ComponentFixture<UpgradeSingerRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeSingerRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeSingerRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
