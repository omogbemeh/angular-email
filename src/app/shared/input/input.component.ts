import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() label = '';
  @Input() name = '';
  @Input() placeholder = '';
  @Input() control!: FormControl;
  @Input() type = 'text';
  @Input() controlType = 'input';
  constructor() {}

  ngOnInit(): void {}
}
