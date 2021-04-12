//import logo from './logo.svg';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Avatarlist from './Avatarlist';
import Sectiona from './Sectiona';
import Sectionb from './Sectionb';
import Card from './Card';
import Sectionc from './Sectionc';


function App() {
  return (
    <div className="App">
    <Avatarlist/>
      <header className="App-header">
    <br></br>
     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"/>
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="https://mdbootstrap.com/img/new/slides/041.jpg" class="img-fluid" alt="..." />
    </div>
    <div class="carousel-item">
    <img src="https://mdbootstrap.com/img/new/standard/city/041.jpg" class="img-thumbnail" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="https://mdbootstrap.com/img/new/standard/city/042.jpg" class="img-fluid shadow-2-strong" alt=""/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <br></br>


<Sectiona/>
<br></br>

<Card/>
<br></br>

<Sectionb/>
<br></br>

<Sectionc/>
</header>

</div>
  );
}

export default App;
