import React from "react";


//// Change "Cards to whatever you need to whatver you need to if you are adding yours in"

export const Cards = () => {
  return (
    //// These are just the basic cards ive added. They are displaying vertically at the moment. I was having issues with it and will circle back to it tonight during mentoring.
    //// Also have some classes on the styles.css you may want to look at in case it conflicts with anything. one is .container and other is .card
    //// if those classes arent used at the end of project we can delete. should only be throwing 2 errors for empty rulesets but that is okay for now
    /// feel free to add files,code or remove anything that you need for your code to work. 
    //// Be sure to also check the home.jsx and make sure to import react and whatever name you are using for your .jsx file

    <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="card-img-top" alt="Skyscrapers"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="card-img-top" alt="Los Angeles Skyscrapers"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top" alt="Palm Springs Road"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to show
            that equal height action.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
   
  );
};
