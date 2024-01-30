import { Component, OnInit } from '@angular/core';

export class Mydream {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetData: Date
  ){

   }


}

@Component({
  selector: 'app-list-mydreams',
  templateUrl: './list-mydreams.component.html',
  styleUrls: ['./list-mydreams.component.css']
})
export class ListMydreamsComponent implements OnInit {

  mydreams = [
    new Mydream(1, 'Learn to Love' , false, new Date()),
    new Mydream(2, 'Become an Experct' , false, new Date()),
    new Mydream(3, 'Do not talk to someone who is married' , false, new Date()),

    // {id : 1, description : 'Lear to Love'},
    // {id : 2, description : 'Become an Experct'},
    // {id : 3, description : 'Do not talk to someone who is married '},
  ]
  // mydream = {
  //   id : 1,
  //   description: 'Lear to Love'
  // }

  constructor(){}

  ngOnInit() {
      
  }

}
