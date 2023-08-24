import React from "react";
import reactDOM from "react-dom";

export const Cards =(props) => {
    return (
        <div className="cards-container">
            
            <div class="card-deck">
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap">
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
    <a href="#" class="btn btn-primary">Find Out More</a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap">
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
    <a href="#" class="btn btn-primary">Find Out More</a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap">
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer">
    <a href="#" class="btn btn-primary">Find Out More</a>
    </div>
  </div>
</div>

        </div>

    );
};