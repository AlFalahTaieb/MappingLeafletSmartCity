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



        //Location emta3i As soon as yetchrja !
        map.locate({ setView: true},12);


//https://www.coordonnees-gps.fr/communes/paris-/75100 emta3 el finder des geoloc
        //Quand j'ai la localisation dessine les Markers ! 
        function onLocationFound(e) {
            var radius = e.accuracy / 2;
            L.marker(e.latlng, {draggable:'true'}).addTo(map);
            L.circle(e.latlng, radius).addTo(map)

            //Remedier à ça le plus tot possible ...

            L.marker(
                [48.838806, 2.282278]).addTo(map).bindPopup("<b>Musée de l'Homme (Muséum National d'Histoire Naturelle)</b><div><img style='width: 100%' src='http://www.museedelhomme.fr/sites/museedelhomme.fr/files/styles/bandeau_home/public/thumbnails/image/musee-de-lhomme_jfk003_1440_850_0.jpg'alt='image'/></div> ",{minWitdh:256});



            L.marker(
                [48.863788,2.322672]).addTo(map).bindPopup("<b>Musée National de L'Orangerie des Tuileries</b><div><img style='width: 100%' src='http://i.imgur.com/ga9pBRR.jpg' alt='image'/></div> ",{minWitdh:256} );

            L.marker(
                [48.859754,2.325917]).addTo(map).bindPopup("<b>Etablissement Public du Musée d'Orsay</b><div><img style='width: 100%' src='http://i.imgur.com/KNh0jrE.jpg'/></div> ",{minWitdh:256} );
            L.marker(
                [48.871887,2.282381]).addTo(map).bindPopup("<b>Musée d'Ennery</b><div><img style='width: 100%' src='http://i.imgur.com/4f7zTVg.png'/></div> ",{minWitdh:256} );
            L.marker(
                [48.840346,2.319415]).addTo(map).bindPopup("<b>Musée Jean Moulin</b><div><img style='width: 100%' src='http://i.imgur.com/KNh0jrE.jpg'/></div> ",{minWitdh:256} );
                
             L.marker(
                [48.8597,2.362644]).addTo(map).bindPopup("<b>Musée National Picasso</b><div><img style='width: 100%' src='http://i.imgur.com/l99VhGo.jpg'/></div> ",{minWitdh:256} );

            L.marker(
                [48.858257,2.361524]).addTo(map).bindPopup("<b>Musée Cognacq-Jay, Musée du XVIIIe siècle de la ville de Paris</b><div><img style='width: 100%' src='http://i.imgur.com/yDJNx1o.png'/></div> ",{minWitdh:256} );
                   
                     L.marker(
                [48.840346,2.319415]).addTo(map).bindPopup("<b>Musée Jean Moulin</b><div><img style='width: 100%' src='http://i.imgur.com/KNh0jrE.jpg'/></div> ",{minWitdh:256} );

                     L.marker(
                [48.841491,2.355989]).addTo(map).bindPopup("<b>Galerie de Minéralogie et de Géologie (Muséum d'Histoire Naturelle)</b><div><img style='width: 100%' src='http://i.imgur.com/7ILKKdG.png'/></div> ",{minWitdh:256} );
                   
                     L.marker(
                [48.878849,2.312855]).addTo(map).bindPopup("<b>Musée Nissim de Camondo (Les Arts Décoratifs)</b><div><img style='width: 100%' src='http://i.imgur.com/FGTEuoh.png    '/></div> ",{minWitdh:256} );
    
                     L.marker(
                [48.887709,2.340577]).addTo(map).bindPopup("<b>Musée de Montmartre</b><div><img style='width: 100%' src='http://i.imgur.com/XMVjS1s.jpg'/></div> ",{minWitdh:256} );   


                     L.marker(
                [48.877878,2.334383]).addTo(map).bindPopup("<b>Musée d'Art Moderne de la ville de Paris</b><div><img style='width: 100%' src='http://i.imgur.com/VYRCUYf.png'/></div> ",{minWitdh:256} );

                     L.marker(
                [48.86434209999999,2.297820799999954]).addTo(map).bindPopup("<b>Musée National Gustave Moreau</b><div><img style='width: 100%' src='http://i.imgur.com/GLB9Qw9.jpg'/></div> ",{minWitdh:256} );



                    L.marker(
                [48.86434209999999,2.297820799999954]).addTo(map).bindPopup("<b>Musée National Gustave Moreau</b><div><img style='width: 100%' src='http://i.imgur.com/GLB9Qw9.jpg'/></div> ",{minWitdh:256} );


                    L.marker(
                [48.880899,2.333278]).addTo(map).bindPopup("<b>Musée de la Vie Romantique</b><div><img style='width: 100%' src='http://i.imgur.com/yTY7KCO.jpg'/></div> ",{minWitdh:256} );


                    L.marker(
                [48.8633218,2.3333]).addTo(map).bindPopup("<b>Musées Arts Décoratifs Mode et du Textile</b><div><img style='width: 100%' src='http://i.imgur.com/eyXAdEW.jpg'/></div> ",{minWitdh:256} );


                    L.marker(
                [48.860433,2.324889]).addTo(map).bindPopup("<b>Musée National de la Légion d'Honneur et des Ordres de Chevalerie</b><div><img style='width: 100%' src='http://i.imgur.com/QI1AanH.jpg'/></div> ",{minWitdh:256} );


                    L.marker(
                [48.854437,2.335771]).addTo(map).bindPopup("<b>Musée National Eugène Delacroix</b><div><img style='width: 100%' src='http://i.imgur.com/BSDbk5j.png'/></div> ",{minWitdh:256} );

                    L.marker(
                [48.833784,2.331927]).addTo(map).bindPopup("<b>Les Catacombes</b><div><img style='width: 100%' src='http://i.imgur.com/uOeGqCA.jpg'/></div> ",{minWitdh:256} );

           


//Juste pour tester le cercle d'un Cluster et comprendre son fonctionnement 
            L.marker(e.latlng).addTo(map)

                .bindPopup("Tu es loin de " + radius + " m de ce point.").openPopup();

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
