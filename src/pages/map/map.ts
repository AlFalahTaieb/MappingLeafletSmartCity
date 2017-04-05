import { Component, OnInit } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { Locations } from '../../providers/locations';
import { GoogleMaps } from '../../providers/google-maps';
import { NavController, Platform } from 'ionic-angular';

import * as L from 'leaflet';

@Component({
    selector: 'page-map',
    templateUrl: 'map.html'
})

export class MapPage implements OnInit{

    constructor(public navCtrl: NavController, public maps: GoogleMaps, public platform: Platform, public locations: Locations) {

    }

    ngOnInit(): void {
    
        this.drawMap();
        this.platform.ready().then(() => {

            let locationsLoaded = this.locations.load();
            Promise.all([

                locationsLoaded
            ])
        });
    }

    drawMap(): void {
        let map = L.map('map');


        L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzsdDXD2lMJpTfCVsVuA', {
            attribution: 'Map data &copy; <a href="http://GuideMe.Com">GuideMe</a>Author:<a href="http://json.Alfelah.com/">Taieb</a>',
            maxZoom: 18
        }).addTo(map);



        //web location
        map.locate({ setView: true},12);



        //when we have a location draw a marker and accuracy circle
        function onLocationFound(e) {
            var radius = e.accuracy / 2;
            L.marker(e.latlng, {draggable:'true'}).addTo(map);
            L.circle(e.latlng, radius).addTo(map)
            L.marker(
                [48.838806, 2.282278]).addTo(map).bindPopup("<b>Musée de l'Homme (Muséum National d'Histoire Naturelle)</b><div><img style='width: 100%' src='http://www.museedelhomme.fr/sites/museedelhomme.fr/files/styles/bandeau_home/public/thumbnails/image/musee-de-lhomme_jfk003_1440_850_0.jpg'alt='image'/></div> ",{minWitdh:256});
            L.marker(
                [48.863788,2.322672]).addTo(map).bindPopup("Musée National de L'Orangerie des Tuileries");
            L.marker(
                [48.863788,2.322672]).addTo(map).bindPopup("Musée National de L'Orangerie des Tuileries");



            L.marker(e.latlng).addTo(map)

                .bindPopup("You are within " + radius + " meters from this point").openPopup();

            L.circle(e.latlng, radius).addTo(map);





        }
        map.on('locationfound', onLocationFound);
        //alert on location error
        function onLocationError(e) {
            alert(e.message);
        }

        map.on('locationerror', onLocationError);
    }
    //Marker




}
