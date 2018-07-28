import { Component, OnInit } from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Meta, MetaDefinition, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titlePage: string;

  constructor( private router: Router,
               private title: Title,
               private meta: Meta) {

   this.getDataRoute().subscribe( data => {
      console.log(data);
      this.titlePage = data.title;

      // add custom title in routes
      this.title.setTitle(this.titlePage);

      // add custom metatag in routes
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titlePage
      };
      this.meta.updateTag(metaTag);

    });

  }

  ngOnInit() {
  }

  getDataRoute() {

    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data )
    );

  }

}
