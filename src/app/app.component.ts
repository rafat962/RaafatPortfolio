import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedServiceService } from './shared/shared-service.service';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'portifolio';
  constructor(private shareService: SharedServiceService) {}

  dark: any = 'dark';
  ngOnInit(): void {
    this.dark = localStorage.getItem('darkMode') || 'dark';
    initFlowbite();
    if (!localStorage.getItem('darkMode')) {
      localStorage.setItem('darkMode', 'dark');
    }
    this.shareService.darkState.subscribe((data: any) => {
      this.dark = data;
    });
  }
}
