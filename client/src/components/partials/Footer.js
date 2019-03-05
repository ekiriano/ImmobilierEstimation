import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui container">
        <div className="ui stackable inverted equal height stackable grid">
          <div className="twelve wide column">
            <h4 className="ui inverted header">
              <i className="icon rocket" /> Nos Partenaires
            </h4>
            <div className="ui horizontal inverted link list">
              <Link to="#" className="item">
                LRSet
              </Link>
              <Link to="#" className="item">
                Immo
              </Link>
              <Link to="#" className="item">
                Villa
              </Link>
              <Link to="#" className="item">
                IDK
              </Link>
              <Link to="#" className="item">
                COUCOUDE
              </Link>
              <Link to="#" className="item">
                FDS
              </Link>
            </div>
          </div>

          <div className="four wide column">
            <h4 className="ui inverted header">
              <i className="icon heart" />
              Share on social media!
            </h4>
            <button className="ui circular facebook icon button">
              <i className="facebook icon" />
            </button>
            <button className="ui circular twitter icon button">
              <i className="twitter icon" />
            </button>
            <button className="ui circular linkedin icon button">
              <i className="linkedin icon" />
            </button>
            <button className="ui circular google plus icon button">
              <i className="google plus icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
