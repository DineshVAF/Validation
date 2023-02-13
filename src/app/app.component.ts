import { Component } from '@angular/core';
import { PostsService } from './posts.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'validation';
  number: any;
  getData: any[] = [];
  constructor(private postData: PostsService) { }
  user = {
    username: '',
  };
  inputvalue: string = this.user.username;

  ngOnInit() {

  }
  getUsername(number: any) {
    this.postData.getData(number)
      .subscribe((res: any) => {
        this.getData = res;
      });

  }

}
// apivalidation() {
//   this.postData.getPosts().subscribe((result) => {
//     console.warn("result", result)
//     this.data = result;
//   })
// }