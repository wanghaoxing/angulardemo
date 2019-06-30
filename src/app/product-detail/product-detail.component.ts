import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  private product: Product;
  private comments: Comment[];
  newRating = 5;
  newComment = '';
  isCommentHidden = true;
  constructor(private routeInfo: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    const productId: number = this.routeInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getComnetsByProductId(productId);
  }
  addComment() {
    const comment = new Comment(
      0, this.product.id, new Date().toLocaleString(), 'someone', this.newRating, this.newComment
    );
    this.comments.unshift(comment);
    // tslint:disable-next-line:no-shadowed-variable
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
