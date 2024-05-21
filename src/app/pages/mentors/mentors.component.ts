import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mentors',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>mentors works!</p>`,
  styleUrl: './mentors.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MentorsComponent { }
