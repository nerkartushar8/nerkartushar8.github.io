import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl: 'src/app.component.html'
})
export class AppComponent {
  score = 0;
    signs: any[] = ["+", "-", "X"];
    models: any[] =[];
    model: any = {};
    constructor(){

    }
    random(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
    getRandomSign(){
      let signIndex = this.random(0,3);
      return this.signs[signIndex];
    }

    generateSum(){
      this.model = {};
      this.models.push(this.model);
      this.model.sign = this.getRandomSign();
      this.model.first = this.random(123434, 999999);
      if(this.model.sign == 'X'){
        this.model.second = this.random(11, 99);
        this.model.result = this.model.first * this.model.second;
      }
      else if(this.model.sign == '+'){
                this.model.second = this.random(123434, 999999);

                this.model.result = this.model.first + this.model.second;

      }
      else if(this.model.sign == '-'){
                this.model.second = this.random(123434, 999999);
                if(this.model.first < this.model.second){
                  let temp = this.model.first;
                  this.model.first = this.model.second;
                  this.model.second = temp;
                }
                this.model.result = this.model.first - this.model.second;
      }
      
    }

    check(model){
      model.solved = true;
      if(model.solvedResult == model.result){
        this.correct(model);
      }else{
        this.wrong(model);
      }
    }
    correct(model){
      let index = this.models.indexOf(model);
      this.models.splice(index, 1);
      model.solved = true;
      this.score = this.score + (100);
    
    }
    wrong(model){
      model.error = "Wrong"
      this.score = this.score - (100 * 3);

    }
    saveAnswer($event, model){
        model.solvedResult = $event.target.value;
    }
}

