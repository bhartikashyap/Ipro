import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { MenuController, NavController,ModalController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-lines',
  templateUrl: './lines.page.html',
  styleUrls: ['./lines.page.scss'],
})
export class LinesPage implements OnInit {
  @Input() placementTree: any;
  @Input() leg: any;
  @Input() userId:any;
  @Input() levelUpId:any;
  @Output() openPopUp = new EventEmitter<object>();
  @Output() lowestLevel = new EventEmitter<number>();
  @Output() levelUp = new EventEmitter<object>();
  constructor(private util:UtilService) { }


  ngOnInit() {
  }

  

  openPopUps(userId,leg){
    console.log(userId,leg)
    let data = {
      userId:userId,
      leg:leg
    } //this causing some issue
   
    this.util.setStorage('memberId',userId);
    this.util.setStorage('level',leg);
    this.openPopUp.emit(data);
  //  data = {
  //     userId:"",
  //     leg:""
  //   }
  }

  levelUps(userId,leg){
    let data = {
      userId:userId,
      leg:leg
    }
    this.levelUp.emit(data);

  }
  lowestLevels(userId){
    
    this.lowestLevel.emit(userId);


  }
  replaceRank(rank){
    if(rank != '' && rank != undefined && rank != null){
       if(rank.indexOf('MANAGER')>-1){
         
         rank = 'M'+rank.split('MANAGER')[1];
         
       }
       else if(rank.indexOf('LEADER')>-1){
        rank = 'L'+rank.split('LEADER')[1];
        // rank.replace('LEADER','L');
       
      }
     // console.log(rank)
      return rank;
    }
    else return "--";

  }
  
  

  isEmptyObject(obj) {
    // console.log(obj)
    return Object.keys(obj).length === 0;
  }


}
