import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';

// const f_id = process.env.FOURSQUARE_ID,
//         f_sec= process.env.FOURSQUARE_SECRET;
const f_id = 'WY1U2ZGODOKUWDY0R4KBQ1MVBJGGPQH5JJPMJUHWXUK2WQBU',
        f_sec= 'OEBOQUL5ANG1QFAPIJ4DP3YTBA4HR1Q5QCXPPOMQPYDEUUHP';
if(Meteor.isServer)
{
    Meteor.methods({
        
        // return array of venues
        'foursquare-search'(lat, lng) {
    
            var foursquare_id = f_id,
            foursquare_secret = f_sec;
    
            if (! foursquare_secret || ! foursquare_id) {
                console.log('!! You should set both, FOURSQUARE_ID and FOURSQUARE_SECRET env variables');
                }
    
           
            
            if (! foursquare_secret || ! foursquare_id) {
            throw new Meteor.Error('Foursquare not configured');
            }
    
    /*         if(!this.userId) {
            throw new Meteor.Error('Permission denied');
            } */
    
            check(lat, Number);
            check(lng, Number);
    
            var result,
                params = {
                client_id: foursquare_id,
                client_secret: foursquare_secret,
                venuePhotos:1,
                v: 20170801,
                query: "Restaurante",
                limit: 30,
                ll: '' + lat + ',' + lng,
            };
    
            try {
                console.log(params);
            result = HTTP.get('https://api.foursquare.com/v2/venues/explore', {
                params: params,
                timeout: 20000
            });
            } catch(error) {
            throw new Meteor.Error('Foursquare api call failed');
            }
    
            /* save query in db
            Queries.insert({
            userId: this.userId,
            lat: lat,
            lng: lng,
            query: query,
            radius: radius,
            });
            */
            //return result.data.response.groups.items; 
            return result.data.response.groups[0].items;
        },
        'foursquare-info-restaurant'(id){
            var foursquare_id = f_id,
            foursquare_secret = f_sec;
    
            if (! foursquare_secret || ! foursquare_id) {
                console.log('!! You should set both, FOURSQUARE_ID and FOURSQUARE_SECRET env variables');
                }
    
            console.log("SECRET: "+foursquare_secret);
            console.log("ID: "+foursquare_id)
            
            if (! foursquare_secret || ! foursquare_id) {
            throw new Meteor.Error('Foursquare not configured');
            }

            var result,
                params = {
                client_id: foursquare_id,
                client_secret: foursquare_secret,
                venuePhotos:1,
                v: 20170801,
                query: "Restaurante",
                limit: 30,
                ll: '' + lat + ',' + lng,
            };
               try {
                console.log(params);
            result = HTTP.get('https://api.foursquare.com/v2/venues/search', {
                params: params,
                timeout: 20000
            });
            } catch(error) {
            throw new Meteor.Error('Foursquare api call failed');
            }
    
            //return result.data.response.groups.items; 
            return result.data.response.groups[0].items;
        },
    });
}
