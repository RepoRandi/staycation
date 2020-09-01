import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";

export default function Activities({ data }) {
  if (data.length === 0) return null;
  return (
    <section className="container">
      <Fade bottom>
        <h4 className="mb-3 font-weight-medium">Treasure to Choose</h4>
        <div className="container-grid">
          {data.map((item, index) => {
            return (
              <div className="item column-3 row-1" key={`activity-${index}`}>
                <Fade bottom delay={300 * index}>
                  <div className="card">
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={
                          item.imageUrl
                            ? `${process.env.REACT_APP_HOST}/${item.imageUrl}`
                            : ""
                        }
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="stretched-link d-block text-gray-800"
                        href={`/properties/${item._id}`}
                      >
                        <h5 className="h4">{item.name}</h5>
                      </Button>
                      <span className="text-gray-500">{item.type}</span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
