import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ContactMessage } from '../../models/contact-message.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-container">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title">Get In Touch</h1>
          <p class="page-subtitle">I'd love to hear from you. Send me a message!</p>
        </div>

        <div class="contact-content">
          <!-- Contact Form -->
          <div class="contact-form-section">
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="contact-form">
              <div class="form-group">
                <label for="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  [(ngModel)]="message.name" 
                  required 
                  class="form-input"
                  placeholder="Your full name">
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  [(ngModel)]="message.email" 
                  required 
                  email
                  class="form-input"
                  placeholder="your.email@example.com">
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  [(ngModel)]="message.subject" 
                  class="form-input"
                  placeholder="What's this about?">
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  [(ngModel)]="message.message" 
                  required 
                  rows="6"
                  class="form-textarea"
                  placeholder="Tell me about your project or just say hello..."></textarea>
              </div>

              <button 
                type="submit" 
                [disabled]="!contactForm.form.valid || isSubmitting"
                class="submit-btn">
                <span *ngIf="!isSubmitting">Send Message</span>
                <span *ngIf="isSubmitting">Sending...</span>
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info-section">
            <div class="contact-info">
              <h3>Let's Connect</h3>
              <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p>
              
              <div class="contact-methods">
                <div class="contact-method">
                  <div class="contact-icon">📧</div>
                  <div class="contact-details">
                    <h4>Email</h4>
                    <p>your.email&#64;example.com</p>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="contact-icon">💼</div>
                  <div class="contact-details">
                    <h4>LinkedIn</h4>
                    <p>linkedin.com/in/yourprofile</p>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="contact-icon">🐙</div>
                  <div class="contact-details">
                    <h4>GitHub</h4>
                    <p>github.com/yourusername</p>
                  </div>
                </div>
              </div>

              <div class="response-time">
                <h4>Response Time</h4>
                <p>I typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Success Message -->
        <div class="success-message" *ngIf="showSuccess">
          <div class="success-content">
            <div class="success-icon">✅</div>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
            <button (click)="resetForm()" class="btn-secondary">Send Another Message</button>
          </div>
        </div>

        <!-- Error Message -->
        <div class="error-message" *ngIf="showError">
          <div class="error-content">
            <div class="error-icon">❌</div>
            <h3>Oops! Something went wrong</h3>
            <p>Please try again or contact me directly via email.</p>
            <button (click)="hideError()" class="btn-secondary">Try Again</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      min-height: 100vh;
      padding: 40px 0;
      background: #f9fafb;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .page-header {
      text-align: center;
      margin-bottom: 50px;
    }

    .page-title {
      font-size: 3rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 15px;
    }

    .page-subtitle {
      font-size: 1.25rem;
      color: #6b7280;
      max-width: 600px;
      margin: 0 auto;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      margin-bottom: 40px;
    }

    .contact-form-section {
      background: white;
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-group label {
      font-weight: 600;
      color: #374151;
      font-size: 0.95rem;
    }

    .form-input,
    .form-textarea {
      padding: 15px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
      font-family: inherit;
    }

    .form-input:focus,
    .form-textarea:focus {
      outline: none;
      border-color: #2563eb;
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }

    .submit-btn {
      background: #2563eb;
      color: white;
      padding: 15px 30px;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      align-self: flex-start;
    }

    .submit-btn:hover:not(:disabled) {
      background: #1d4ed8;
      transform: translateY(-2px);
    }

    .submit-btn:disabled {
      background: #9ca3af;
      cursor: not-allowed;
      transform: none;
    }

    .contact-info-section {
      display: flex;
      align-items: center;
    }

    .contact-info {
      background: white;
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      width: 100%;
    }

    .contact-info h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 15px;
    }

    .contact-info > p {
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 30px;
    }

    .contact-methods {
      margin-bottom: 30px;
    }

    .contact-method {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
    }

    .contact-icon {
      font-size: 1.5rem;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f3f4f6;
      border-radius: 50%;
    }

    .contact-details h4 {
      font-size: 1rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 5px 0;
    }

    .contact-details p {
      color: #6b7280;
      margin: 0;
      font-size: 0.9rem;
    }

    .response-time {
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
    }

    .response-time h4 {
      font-size: 1rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 5px 0;
    }

    .response-time p {
      color: #6b7280;
      margin: 0;
      font-size: 0.9rem;
    }

    .success-message,
    .error-message {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      text-align: center;
      z-index: 1000;
      max-width: 400px;
      width: 90%;
    }

    .success-content,
    .error-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }

    .success-icon,
    .error-icon {
      font-size: 3rem;
    }

    .success-content h3,
    .error-content h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
    }

    .success-content h3 {
      color: #059669;
    }

    .error-content h3 {
      color: #dc2626;
    }

    .success-content p,
    .error-content p {
      color: #6b7280;
      margin: 0;
    }

    .btn-secondary {
      background: #6b7280;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .btn-secondary:hover {
      background: #4b5563;
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2.5rem;
      }

      .contact-content {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .contact-form-section,
      .contact-info {
        padding: 25px;
      }

      .success-message,
      .error-message {
        padding: 30px 20px;
      }
    }
  `]
})
export class ContactComponent {
  message: ContactMessage = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting: boolean = false;
  showSuccess: boolean = false;
  showError: boolean = false;

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.showError = false;

    this.contactService.sendMessage(this.message).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.showSuccess = true;
        this.resetForm();
      },
      error: (error) => {
        console.error('Error sending message:', error);
        this.isSubmitting = false;
        this.showError = true;
      }
    });
  }

  resetForm() {
    this.message = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.showSuccess = false;
  }

  hideError() {
    this.showError = false;
  }
}
