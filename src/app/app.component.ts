import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'AngularExp6';

  tooltips = { "test_port" : `Selecting Test port
  ===
  
  ---
  
  
  Select a test port to run an on-demand test. Test ports are annotated as OSM ID/Port ID
  
  [Read more]
  
  [Read more]: https://github.com/jfcere/ngx-markdown`,

  "front_panel" : `Front check panel
   ===
   
   ---
   RFTS-400 will warn you if the reflection of the OSM thest port will be above -45dB
   `,
   
  "eof_threshold" : `End of fiber
  ===
    
  ---
    
  <img src="/assets/Whole-Lemon.jpg" width=150/>
    
  The OTDR will consider every event with the loss mre than EOF as the End of Fiber.
  ` 
  }

  constructor(private markdownService: MarkdownService) { }

  ngOnInit() {
    this.markdownService.renderer.heading = (text: string, level: number) => {
      return '<div class="text-1xl font-bold mt-4 mb-2 text-green-600">' + text + '</div>';
    };

    this.markdownService.renderer.link = (href: string, title: string | null | undefined, text: string) => {
      return `<a class="text-blue-600 visited:text-purple-300" href="${href}" target="blank">`+ text + `</a>`;
    }
  }
}
