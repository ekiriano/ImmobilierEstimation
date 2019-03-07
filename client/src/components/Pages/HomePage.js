import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <header className="hero homepage">
        <div className="hero-text">
          <h1>Estimmo</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            ratione nam molestias recusandae porro mollitia at cumque alias quae
            reiciendis!
          </p>
        </div>
      </header>

      <section className="presentation">
        <div className="container">
          <div className="row">
            <div className="columns">
              <div className="is-one-third mt-1">
                <img
                  src="https://via.placeholder.com/400"
                  className="rounded"
                  alt=""
                />
              </div>
              <div className="column">
                <h2>A title</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum voluptatibus nulla aspernatur vero iure corrupti omnis
                  voluptates eius ab cumque quas deserunt laborum, repellendus,
                  sapiente aliquid, accusamus quae! Iusto explicabo porro cumque
                  nesciunt provident adipisci quia alias iure fuga
                  exercitationem, eveniet minus. Iure distinctio fugiat
                  veritatis. Enim assumenda necessitatibus repellendus.
                </p>
                <Link to="#" className="button is-medium is-rounded ">
                  Learn More ->
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="columns">
              <div className="column">
                <h2>A title</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum voluptatibus nulla aspernatur vero iure corrupti omnis
                  voluptates eius ab cumque quas deserunt laborum, repellendus,
                  sapiente aliquid, accusamus quae! Iusto explicabo porro cumque
                  nesciunt provident adipisci quia alias iure fuga
                  exercitationem, eveniet minus. Iure distinctio fugiat
                  veritatis. Enim assumenda necessitatibus repellendus.
                </p>
                <Link to="#" className="button is-medium is-rounded ">
                  Learn More ->
                </Link>
              </div>
              <div className="is-one-third">
                <img
                  src="https://via.placeholder.com/400"
                  className="rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="columns">
              <div className="is-one-third">
                <img
                  src="https://via.placeholder.com/400"
                  className="rounded"
                  alt=""
                />
              </div>
              <div className="column">
                <h2>A title</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum voluptatibus nulla aspernatur vero iure corrupti omnis
                  voluptates eius ab cumque quas deserunt laborum, repellendus,
                  sapiente aliquid, accusamus quae! Iusto explicabo porro cumque
                  nesciunt provident adipisci quia alias iure fuga
                  exercitationem, eveniet minus. Iure distinctio fugiat
                  veritatis. Enim assumenda necessitatibus repellendus.
                </p>
                <Link to="#" className="button is-medium is-rounded ">
                  Learn More ->
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
