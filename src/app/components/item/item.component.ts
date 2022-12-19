import { Movie } from './../../models/movie';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null

  imageSizes = IMAGE_SIZES
  constructor() { }

  ngOnInit(): void {
  }

}
