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
      return '<div class="text-1xl font-bold mt-4 mb-2 text-green-600">' + text + '</div>';
    };

    this.markdownService.renderer.link = (href: string, title: string | null | undefined, text: string) => {
      console.log(`href`, href);
      console.log(`title`, title);
      console.log(`text`, text);
      return `<a class="text-blue-600 visited:text-purple-300" href="${href}" target="blank">`+ text + `</a>`;
    }
  }
}
