import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-manage-resource',
  templateUrl: './manage-resource.component.html',
  styleUrls: ['./manage-resource.component.css'],
})
export class ManageResourceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onPreview() {
    console.log(this.data);
  }

  onSubmit() {}

  data: String;
  public Editor = ClassicEditor;
  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    setTimeout(() => {
      this.data = data;
    }, 1000);
    // console.log( data );
  }


}
