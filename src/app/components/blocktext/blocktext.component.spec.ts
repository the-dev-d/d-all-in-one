import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocktextComponent } from './blocktext.component';

describe('BlocktextComponent', () => {
  let component: BlocktextComponent;
  let fixture: ComponentFixture<BlocktextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocktextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlocktextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
