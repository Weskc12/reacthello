import React from "react";


//// Change "Cards to whatever you need to whatver you need to if you are adding yours in"

export const Cards = () => {
  return (
    //// These are just the basic cards ive added. They are displaying vertically at the moment. I was having issues with it and will circle back to it tonight during mentoring.
    //// Also have some classes on the styles.css you may want to look at in case it conflicts with anything. one is .container and other is .card
    //// if those classes arent used at the end of project we can delete. should only be throwing 2 errors for empty rulesets but that is okay for now
    /// feel free to add files,code or remove anything that you need for your code to work. 
    //// Be sure to also check the home.jsx and make sure to import react and whatever name you are using for your .jsx file

      <span className="cardcontainer ">
        <div className="card d-flex" style={{ width: "18rem;" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card d-flex" style={{ width: "18rem;" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card d-flex" style={{ width: "18rem;" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card d-flex" style={{ width: "18rem;" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        

      </span>
   
  );
};
