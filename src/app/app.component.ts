import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppendStringPipe } from './pipes/append-string.pipe';
import { MessagesService } from './services/messages.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, AppendStringPipe, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessagesService]
})
export class AppComponent implements OnInit {

  messages:string[] = [];
  posts: any[] = [];
  constructor(private messageService:MessagesService) {
    this.messages = messageService.getMessages();
  }
  title = 'intro';

  counter:number = 0;

  increment() {
    this.counter += this.counter
  }

  ngOnInit(): void {
    this.messageService.getPost().subscribe(response => {
      this.posts = response;
      console.log(response)
    })
  }
}
