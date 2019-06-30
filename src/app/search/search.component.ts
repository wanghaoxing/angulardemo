import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductService } from '../shared/product.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  formModel: FormGroup;
  categories: string[];
  constructor(private productService: ProductService) {
    let fb = new FormBuilder();
    this.formModel = fb.group({
      title: ['', Validators.minLength(3)], //最少不少于3个字符
      price: [null, this.positiveNumberValidator], //不能为负数
      category: ['-1'] //默认值为-1 --全部分类
    })
  }
  ngOnInit() {
    this.categories = this.productService.getAllCategories();
  }
  positiveNumberValidator(control: FormControl): any {
    if (!control.value) {//如果输入为空则返回空，相当于去空格
      return null;
    }
    let price = parseInt(control.value);
    if (price > 0) { // 如果大于0不显示错误信息
      return null;
    } else {  // 不大于0则显示错误信息
      return { positiveNumber: true };
    }
  }
  //如果验证通过的话就把表单对应的值打印到控制台
  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}