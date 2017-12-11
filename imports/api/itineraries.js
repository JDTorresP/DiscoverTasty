import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Itineraries = new Mongo.Collection('itineraries');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('itineraries', function itiPublication() {
    return Itineraries.find();
  });
}

Meteor.methods({
  'itineraries.invite'(itineraryId, un){
    check(itineraryId, String);
    check(un, String);

    Users.find({username: un}) ? Itineraries.update(itineraryId, { $addToSet: { "invited": un } }) : console.log("The user does not exist");
  },
  'itineraries.getByUser'(un) {
    return Itineraries.find( {$or: [{username : un}, {invited: un}]});
  },
  'itineraries.insert'(name ,id) {
    check(name, String);
    events = [];
 
    Itineraries.insert({
      name,
      events,
      createdAt: new Date(),
      owner: id,
      invited: [],
      username: Meteor.users.findOne(id).username,
    });
    console.log( "insertado: " + name);
  },

  'itineraries.get'() {
    return Itineraries.find({}).fetch();
  },

  'itineraries.remove'(itineraryId) {
    check(itineraryId, String);
 
    Itineraries.remove(itineraryId);
  },

  //newEvent sería un objeto, seria importante la fecha/hora de la visita y el nombre, dirección del restaurante q se visitará.
  'itineraries.addEvent'(itineraryId, fechaHora, nombreRestaurante, direccion, latitud, longitud) {
    check(longitud, Number);
    check(latitud, Number);
    check(itineraryId, String);
    check(fechaHora, Date);
    check(nombreRestaurante, String);
    check(direccion, String)
 
    newEvent = { title: nombreRestaurante, start: fechaHora, desc: direccion, lng: longitud, lat: latitud};

    Itineraries.update(itineraryId, { $addToSet: { "events": newEvent } });
  },
  
  'itineraries.updateEvents'(itineraryId, events) {
    check(events, Array);
    check(itineraryId, String);

    Itineraries.update(itineraryId, { $set: { "events": events } });
  }

});