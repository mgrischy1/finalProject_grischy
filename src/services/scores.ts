import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

import {ScoresPage} from "../models/scoresModes";
import { AuthService } from "./auth";
@Injectable()
export class ScoresServices {
    [x: string]: any;
  private scores: ScoresPage[] = [];

  constructor(private http: Http, private authService: AuthService) {}

  addScores( amount: number ) {
    this.scores.push(new ScoresPage(amount));
    console.log(this.scores);
  }

  getScores() {
    return this.scores.slice();
  }

  updatScores(amount: number)
                {
    this.scores[amount] = new ScoresPage(amount);
  }

  removeRecipe(amount: number) {
    this.scores.splice(amount, 1);
  }

  storeList(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http.put("https://p5grischy.firebaseio.com" + userId, this.scores)
      .map((response: Response) => response.json());
  }
//   addItem(scores) {
//     this.afd.list('/p5grischy/').push(scores);
//   }

  fetchList(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http.get('https://p5grischy.firebaseio.com/' + userId + '/scores.json?auth=' + token)
      .map((response: Response) => {
        const scores: ScoresPage[] = response.json() ? response.json() : [];
        // for (let item of scores) {
        //   if (!item.hasOwnProperty('amount')) {
        //     item.amount = [];
        //   }
      //  }
        return scores;
      })
      .do((scores: ScoresPage[]) => {
        if (scores) {
          this.scores = scores;
        } else {
          this.scores = [];
        }
      });
  }
}
