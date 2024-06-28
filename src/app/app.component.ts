import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PalindromeComponent } from "../app/palindrome/palindrome.component";
import { ResultComponent } from "../app/result/result.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PalindromeComponent, NgOptimizedImage, FormsModule, ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Palindrometer'
  text = "A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing."
}
