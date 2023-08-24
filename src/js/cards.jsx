import React from "react";
import reactDOM from "react-dom";



export const Cards = (props) => {
  return (

    //<div className="cards-container">
    <div class="d-flex align-items-right mt-3">
    <div className="row row-cols-1 row-cols-sm-6 g-4">
    <div className="co-3"></div>
  <div className="col">
    <div className="card h-100 w-100">
      <img src="https://source.unsplash.com/random/200x120?sig=3" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      </div>
      <div className="card-footer">
      <button className="btn btn-primary" type="submit">Find Out More!</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 w-100">
      <img src="https://source.unsplash.com/random/200x120?sig=1" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aliquam tincidunt mauris eu risus.</p>
      </div>
      <div className="card-footer">
      <button className="btn btn-primary" type="submit">Find Out More!</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 w-100">
      <img src="https://source.unsplash.com/random/200x120?sig=2" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      </div>
      <div className="card-footer">
      <button className="btn btn-primary" type="submit">Find Out More!</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 w-100">
      <img src="https://source.unsplash.com/random/200x120?sig=3." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Morbi in sem quis dui placerat ornare.</p>
      </div>
      <div className="card-footer">
      <button className="btn btn-primary" type="submit">Find Out More!</button>
      </div>
    </div>
  </div>
</div>
<div className="co-3"></div>
</div>
  );
};
