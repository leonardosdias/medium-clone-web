import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss']
})
export class TagFeedComponent implements OnInit {
  public apiUrl: string;
  public tagName: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.paramMap)
    this.tagName = this.activatedRoute.snapshot.paramMap.get('slug');
    console.log(this.tagName);
    this.apiUrl = `/articles?tag=${this.tagName}`;
  }

}
