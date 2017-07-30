import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const data = {
  id: 1,
  companyId: 'cGLSxH4',
  companyName: 'StudyPortals',
  info: {
    title: 'Account Manager (Continental Europe)',
    description: {
      responsibilities: `<ul>
        <li>Praesent id massa id nisl venenatis lacinia.</li>
        <li>Aenean sit amet justo.</li>
        <li>Morbi ut odio.</li>
        <li>Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.</li>
        <li>In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Praesent id massa id nisl venenatis lacinia.</li>
        <li>Aenean sit amet justo.</li>
        <li>Morbi ut odio.</li>
        <li>Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.</li>
        <li>In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      </ul>`,
      requirements: `<ul>
        <li>Praesent id massa id nisl venenatis lacinia.</li>
        <li>Aenean sit amet justo.</li>
        <li>Morbi ut odio.</li>
        <li>Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.</li>
        <li>In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Praesent id massa id nisl venenatis lacinia.</li>
        <li>Aenean sit amet justo.</li>
        <li>Morbi ut odio.</li>
        <li>Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.</li>
        <li>In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      </ul>`,
      compensation: `<li>Praesent id massa id nisl venenatis lacinia.</li>
      <li>Aenean sit amet justo.</li>
      <li>Morbi ut odio.</li>
      <li>Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.</li>
      <li>In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>`,
    },
    imgUrl:
      'https://jobbatical.com/upload/upload_5188aa8befe95a0f610ada07dce8c408.jpg',
    website: 'studyportals.com',
    social: [
      'facebook.com/studyportalscareers',
      'twitter.com/@studyportalsdev',
      'linkedin.com/company/studyportals',
    ],
  },
  tags: ['Account', 'Manager', 'Europe', 'Sales', 'Spanish', 'German', 'EU'],
  isFeatured: true,
  expDate: 1504224000000,
  location: 'Eindhoven, Netherlands',
};

function formatDate(unix) {
  const days = ~~((unix - Date.now()) / 86400000);
  return days;
}

const ItemDetails = props =>
  <div
    style={{ backgroundImage: `url(${data.info.imgUrl})` }}
    className="item-details section"
  >
    <div className="item-details__description">
      <div className="section">
        <p className="title">
          {data.info.title}
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
              <button className="button is-success is-outlined">&para;</button>
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
      <p className="subtitle">JOB DESCRIPTION</p>
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
              dangerouslySetInnerHTML={{ __html: data.info.description[key] }}
            />
          </div>
        </div>
      )}
      <p className="subtitle">THE COMPANY</p>
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
  </div>;

ItemDetails.propTypes = {};

ItemDetails.defaultProps = {};

export default ItemDetails;
