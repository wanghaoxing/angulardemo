import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private comments: Comment[] = [
    new Comment(1, 1, '2019-02-02 22:22:22', '张三', 3, '东西不错'),
    new Comment(2, 2, '2019-02-02 22:22:22', '王五', 3, '东西不错'),
    new Comment(3, 1, '2019-02-02 22:22:22', '赵六', 1.5, '东西不错'),
    new Comment(4, 3, '2019-02-02 22:22:22', '李四', 3, '东西不错'),
    new Comment(5, 2, '2019-02-02 22:22:22', '陈八', 3, '东西不错')
  ];
  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get('/api/products').subscribe(res => {
      // tslint:disable-next-line:no-unused-expression
      res;
    });
  }
  getProduct(id: number): Product {
    return this.products.find(product => product.id == id);
  }

  getComnetsByProductId(id: number): Comment[] {
    return this.comments.filter(comment => comment.productId == id);
  }
  getAllCategories() {
    return ['电子产品', '硬件设备', '图书'];
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
export class Comment {

  constructor(public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string) {

  }
}

