import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsTextEditor } from 'maxi-angular-components';

@Component({
  selector: 'TextEditor',
  standalone: true,
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  imports: [MsTextEditor, CommonModule]
})
export class TextEditorComponent {
  placeholder = "Write something...";
  
  handleTextChange = (e: any) => {
    console.log("HTML content:", e.detail);
  };
}
