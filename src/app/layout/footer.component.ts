import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nk-footer',
  template: `
      <footer id="footer" class="footer mt-auto py-3">
          <div class="container">
              <span nkTarget="footer" class="text-muted"></span>
          </div>
      </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
