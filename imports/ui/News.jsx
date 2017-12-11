import React, {Component} from "react";
import Title from './Title.jsx';
import Card from './Card.jsx';

class News extends Component { 
  constructor() {
    super();
    this.state = {
      posts: []
    }
    this.createRestaurants = this.createRestaurants.bind(this);
    this.selected = this.selected.bind(this);

  }
   createRestaurants(){
    var resp = [];
    this.props.nearRestaurants.map((t,i)=>{
      let ruta = '',categ ='', tips = [];
      if(t.venue.photos.count==0)
        {
          ruta = 'https://resizer.otstatic.com/v2/photos/large/24887154.jpg';
        }
        else{
          ruta = t.venue.photos.groups[0].items[0].prefix+'500x300'+t.venue.photos.groups[0].items[0].suffix;
        }
       categ= typeof (t.venue.location.city || t.venue.location.country)== 'undefined' ? 'COLOMBIA':t.venue.location.city+','+t.venue.location.country;
       let p = {
          "category": categ,
          "title": t.venue.name,
          "text": 'Visit Us',
          "image": ruta,
          "id":t.venue.id,
          "address":t.venue.location.address,
          "lat":t.venue.location.lat,
          "lng":t.venue.location.lng,
          "url":t.venue.url,
          "price": t.venue.price ? t.venue.price.message : "No price" ,
          "rating":t.venue.rating,
          "tips":t.tips
          
      }
         resp.push(p);
    });
   return resp;
  }
  selected(id){
    this.props.changeSelected(id);
    this.props.click();
  }
 
  render() {
    let restar;
    console.log(this.props.nearRestaurants);
    let res = this.createRestaurants();
    if(res){
      restar=(<div> 
         <div className="app-card-list"  id="app-card-list">
        {
          Object
          .keys(res)
          .map(key => <Card key={key} index={key} details={res[key]} click={this.selected} />)
        }
    </div>
      </div>)
    }else{
       restar=(<div>No restaurants near, please enable location</div>)
    }
    
    return <div>
      <header className="app-header"></header>
      <Title />
     {restar}
    </div>
  }
}
export default News;