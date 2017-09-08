import React from 'react';
import marked from 'marked';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withScrollToTop } from '../hocs/withScrollToTop';
import { getRemainingTime } from '../../helpers';

import {
  DangerButton,
  HeroImage,
  JobInfoSocial,
  JobTimeInfo,
  ListingBlock,
  RoundedButton,
  SideMenuButton,
  StickyNavbar,
  Title,
  Wrapper,
} from './style.js';

const findItem = (id, data) => data.filter(item => item._id === id)[0];

const ItemDetails = props => {
  const id = props.history.location.pathname.split('/').pop();
  const data = findItem(id, props.data);
  const { isAdmin } = props;
  const isSaved = props.savedJobs && props.savedJobs.includes(id);
  const caption = isSaved ? 'Saved' : 'Save';

  if (!data) return <div>Loading...</div>;

  const handleApply = () => {
    props.handleApply(data._id);
  };

  const handleSave = () => {
    props.handleSave(data._id);
  };

  const handleDelete = () => {
    props.deleteItem(id);
    props.history.push(`/jobs`);
  };

  return (
    <Wrapper>
      <HeroImage imgUrl={data.info.imgUrl} />
      {/* <HeroImage imgUrl={'/placeholder-image.jpg'} /> */}
      <Title>
        <h1>{data.info.title}</h1>
      </Title>
      <JobTimeInfo>
        <p>
          <strong>{getRemainingTime(data.expDate)} left</strong> to apply
        </p>
        <p>Position available immediately</p>
      </JobTimeInfo>
      <JobInfoSocial>
        Know someone who would be perfect for this job? Share the link:
        <span>
          <i className="fa fa-linkedin" aria-hidden="true" />
          <i className="fa fa-facebook" aria-hidden="true" />
          <i className="fa fa-twitter" aria-hidden="true" />
        </span>
      </JobInfoSocial>
      <ListingBlock summary>
        {data.companyName}
        <br />
        {data.location}
      </ListingBlock>
      <ListingBlock>
        {data.tags.map((tag, i) => (
          <span key={i} className="tag is-large">
            {tag}
          </span>
        ))}
      </ListingBlock>
      {Object.keys(JSON.parse(data.info.description)).map((key, i) => (
        <ListingBlock className="section" key={i}>
          <div className="content">
            <h3>{key}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: marked(JSON.parse(data.info.description)[key]),
              }}
            />
          </div>
        </ListingBlock>
      ))}
      THE COMPANY
      <ListingBlock>
        About {data.companyName}
        <br />
        {data.location}
        <br />
        Website: <a href={data.info.website}>{data.info.website}</a>
      </ListingBlock>
      <StickyNavbar>
        <RoundedButton first onClick={handleApply}>
          Apply now
        </RoundedButton>
        <RoundedButton empty={!isSaved} onClick={handleSave}>
          {caption}&nbsp;
          <i className="fa fa-bookmark" aria-hidden="true" />
        </RoundedButton>
        {isAdmin && (
          <Link to={`/edit/${id}`}>
            <RoundedButton>Edit</RoundedButton>
          </Link>
        )}
        {isAdmin && <DangerButton onClick={handleDelete}>Delete</DangerButton>}
        <SideMenuButton>
          <i className="fa fa-bars" aria-hidden="true" />
        </SideMenuButton>
      </StickyNavbar>
    </Wrapper>
  );
};

ItemDetails.propTypes = {};

ItemDetails.defaultProps = {};

export default withScrollToTop(ItemDetails);
