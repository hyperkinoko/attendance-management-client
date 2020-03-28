import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'attendance-management-client';

  constructor(private auth: AuthService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // 認証サーバからのリダイレクトの場合
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.auth.parseToken(fragment);
      }
    });
  }
}
