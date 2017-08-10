import React from 'react';
import marked from 'marked';
// import PropTypes from 'prop-types';

import './style.css';

import dummyData from './dummyData';

function formatDate(unix) {
  const days = ~~((unix - Date.now()) / 86400000);
  return days;
}

const ItemDetails = props => {
  const data = dummyData[0];

  return (
    <div
      style={{ backgroundImage: `url(${data.info.imgUrl})` }}
      className="item-details section"
    >
      <div className="item-details__description">
        <div className="section">
          <p className="title">
            {data.info.title} - Job Id: {props.match.params.id}
          </p>
          <div className="level">
            <div className="level-left">
              <p className="level-item">
                <strong>{formatDate(data.expDate)} days left</strong>&nbsp;to
                apply
              </p>
            </div>
            <div className="level-right">
              <span className="level-item">
                <span>Save for later&nbsp;</span>
                <button className="button is-success is-outlined">
                  &para;
                </button>
              </span>
              <div className="level-item">
                <button className="button is-success">APPLY NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="tags">
            {data.tags.map((tag, i) =>
              <span key={i} className="tag is-large">
                {tag}
              </span>
            )}
          </div>
        </div>
        <p className="item-details__subtitle subtitle">JOB DESCRIPTION</p>
        {Object.keys(data.info.description).map((key, i) =>
          <div className="section" key={i}>
            <div className="content">
              <p
                className="subtitle is-5"
                style={{ textTransform: 'capitalize' }}
              >
                {key}
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: marked(data.info.description[key]),
                }}
              />
            </div>
          </div>
        )}
        <p className="item-details__subtitle subtitle">THE COMPANY</p>
        <div className="section">
          <p className="title is-4">
            About {data.companyName}
          </p>
          <p className="subtitle is-5">
            in {data.location}
          </p>
          <p className="">
            Website:{' '}
            <a
              href={`https://${data.info.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.info.website}
            </a>
            <br />
            Social:{' '}
            {data.info.social.map((soc, i) =>
              <span key={i}>
                <a
                  href={`https://${soc}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {soc.split('.')[0]}
                </a>&nbsp;
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {};

ItemDetails.defaultProps = {};

export default ItemDetails;
