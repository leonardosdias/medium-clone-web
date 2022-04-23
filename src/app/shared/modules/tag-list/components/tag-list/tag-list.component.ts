import { Component, Input } from '@angular/core';
import { TPolularTag } from 'src/app/shared/interfaces/popular-tag.types';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {
  @Input('tags') tagsProps: TPolularTag[];
}
