import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe((parmMap: ParamMap) => {
        const url = parmMap.get('url');
        if (url) {
          this.router.navigate([url]);
        } else {
          this.location.back();
        }
      });
  }

}
