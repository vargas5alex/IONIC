import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OmdbProvider } from '../../providers/omdb/omdb';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public title: string;
  public movie: any;
  // Inyectar la dependencia de OMDB
  constructor(public navCtrl: NavController,
              public omdb: OmdbProvider) {
                this.title = 'batman'
  }

  public search(): void {
    this.omdb.searchMovie(this.title).subscribe((response) => {
      this.movie = response;
    })
  }
}
