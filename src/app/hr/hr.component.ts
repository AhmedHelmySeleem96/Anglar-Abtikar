import { Component, OnInit, Renderer2 } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
  isOpened = false ;
  // isSidebarCollapsed = false;
  // constructor(private renderer: Renderer2) {}

  // toggleSidebar() {
  //   this.isSidebarCollapsed = !this.isSidebarCollapsed;

  //   const sidebar = document.querySelector('.sidebar-wrapper');
  //   if (sidebar) {
  //     if (this.isSidebarCollapsed) {
  //       this.renderer.addClass(sidebar, 'collapsed');
  //     } else {
  //       this.renderer.removeClass(sidebar, 'collapsed');
  //     }
  //   }
  // }
  ngOnInit(): void {
    setTimeout(() =>{
      this.loadScript();

    },300)
  }
  public loadScript() {
    const body = document.body as HTMLDivElement;
    const script = document.createElement("script");
    script.innerHTML = "";
    script.src = "./assets/lib/them/assets/js/app.js";
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
