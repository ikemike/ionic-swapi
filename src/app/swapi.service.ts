import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty, merge, onErrorResumeNext } from 'rxjs';
import { expand } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {


  constructor(private httpSvc: HttpClient) {}

  /**
   * Basic method - does an HTTP request and returns the observable 
   */
  public getPlanetsFromWeb() {

    const baseUrl = 'https://swapi.co/api/planets';

    // Merge is a great way to make MULTIPLE observable calls! Like Promise.All([])
    //return merge(...requests);
    return this.getPage(baseUrl)
      .pipe(expand(
        // Expand will keep adding observables until empty - 
        // in this case, using the 'next' property of the response
        (data, i) => (<any> data).next ? this.getPage((<any> data).next) : empty()
      ))
      ;
  }

  private getPage(pageUrl: string) {
    return this.httpSvc.get(pageUrl);
  }
  

  public getPlanets() {
    console.log('getPlanets()');
    let planets = this.processPlanets();
    console.log(planets);
  }

  public processPlanets() {
    let planetNames = [];
    this.getPlanetsFromWeb().subscribe(
      data => {
        console.log(data);
        planetNames.push(this.getPlanetNames(data));
      }
    );
    return planetNames;
  }

  public getPlanetNames(planetsJson) {
    return planetsJson.results.map(aPlanet => {
      return aPlanet.name;
    })
  }

}
