import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';


if(Meteor.isServer)
{
    Meteor.methods({
        
        // return array of venues
        'foursquare-search'(lat, lng) {
    
            var foursquare_id = process.env.FOURSQUARE_ID,
            foursquare_secret = process.env.FOURSQUARE_SECRET;
    
            if (! foursquare_secret || ! foursquare_id) {
                console.log('!! You should set both, FOURSQUARE_ID and FOURSQUARE_SECRET env variables');
                }
    
            console.log("SECRET: "+foursquare_secret);
            console.log("ID: "+foursquare_id)
            
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
    });
}
