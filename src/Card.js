import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Card = ()=>{
    return(
        
        <div>
        <h1>Our Items</h1>
             <div class="card-group">
  <div class="card">
    <img src="https://mdbootstrap.com/img/new/standard/city/041.jpg" class="card-img-top" alt=""/>
    <div class="card-body">
      <h5 class="card-title btn-success">Card title</h5>
      <p class="card-text btn-secondary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text btn-danger"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://mdbootstrap.com/img/new/standard/city/041.jpg" class="card-img-top" alt=""/>
    <div class="card-body">
      <h5 class="card-title btn-success">Card title</h5>
      <p class="card-text btn-secondary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text btn-danger"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://mdbootstrap.com/img/new/standard/city/042.jpg" class="card-img-top" alt=""/>
    <div class="card-body">
      <h5 class="card-title btn-success">Card title</h5>
      <p class="card-text btn-secondary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text btn-danger"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>

        
        )
    }
    
    
    
    
    export default Card;