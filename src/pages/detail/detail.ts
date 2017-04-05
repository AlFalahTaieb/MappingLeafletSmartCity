import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NavParams} from "ionic-angular";
import { Locations} from '../../providers/locations';
//import { ListPage } from '../list/list';





@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html',
    providers: [ Locations ]
    //entryComponents:[ ListPage ]
})


export class DetailPage {
    navParams: NavParams
    title: any
    latitude: any
    longitude:any


constructor(navParams: NavParams,public navCtrl: NavController) {

this.title = navParams.get('title'); 
this.latitude = navParams.get('latitude');
this.longitude = navParams.get('longitude');

console.log(this.title);
console.log(this.latitude);
 }

    ionViewDidLoad(err) {
        console.log(err);
console.log(this.latitude);

    }
    goBack() {
        this.navCtrl.pop();
    }

}
