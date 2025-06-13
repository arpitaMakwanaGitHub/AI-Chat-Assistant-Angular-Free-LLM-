import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent implements AfterViewChecked {
  input: string = '';
  messages: { role: 'user' | 'assistant', content: string }[] = [];
  loading = false;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;


  constructor(private http: HttpClient) { }

  sendMessage() {
    if (!this.input.trim()) return;

    const userMessage = this.input.trim();
    this.messages.push({ role: 'user', content: userMessage });
    this.input = '';
    this.loading = true;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.openRouterApiKey}`,  // replace this
      'Content-Type': 'application/json',
      'HTTP-Referer': 'http://localhost:4200'
    });

    const body = {
      model: 'mistralai/mistral-7b-instruct',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userMessage }
      ]
    };

    this.http.post<any>('https://openrouter.ai/api/v1/chat/completions', body, { headers })
      .subscribe({
        next: (res) => {
          const content = res.choices[0]?.message?.content || '(No reply)';
          this.messages.push({ role: 'assistant', content });
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.messages.push({ role: 'assistant', content: '❌ Error contacting OpenRouter' });
          this.loading = false;
        }
      });
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
