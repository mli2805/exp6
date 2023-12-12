import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'AngularExp6';

  constructor(private markdownService: MarkdownService) { }

  ngOnInit() {
    this.markdownService.renderer.heading = (text: string, level: number) => {
      console.log(text);
      console.log(level);
      return '<div class="text-2xl font-bold m-4 text-red-600">' + text + '</div>';
    };
  }
}
