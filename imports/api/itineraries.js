import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Itineraries = new Mongo.Collection('itineraries');
 
Meteor.methods({
  'itineraries.insert'(name) {
    check(name, String);
    events = [];
    // Make sure the user is logged in before inserting a task
    /* if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    } */
 
    Itineraries.insert({
      name,
      events,
      createdAt: new Date(),
     // owner: this.userId,
     // invited: usuarios invitados.
     // username: Meteor.users.findOne(this.userId).username,
    });
    console.log( "insertado: " + name);
  },

  'itineraries.get'() {
    return Itineraries.find({});
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
 
    newEvent = { restName: nombreRestaurante, date: fechaHora, address: direccion, lng: longitud, lat: latitud};

    Itineraries.update(itineraryId, { $addToSet: { "events": newEvent } });
  },
});