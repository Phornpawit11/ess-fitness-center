import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Launcher } from './launcher';

describe('Launcher', () => {
  let component: Launcher;
  let fixture: ComponentFixture<Launcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Launcher],
      providers: [provideRouter([])]
    }).compileComponents();
    fixture = TestBed.createComponent(Launcher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => expect(component).toBeTruthy());
});