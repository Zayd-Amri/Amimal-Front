import { Component, OnInit } from '@angular/core';
import {Cloudinary, CloudinaryFile, CloudinaryImage} from '@cloudinary/base';
import {fill} from '@cloudinary/base/actions/resize';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
