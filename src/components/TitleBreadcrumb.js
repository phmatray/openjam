import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'semantic-ui-react';

const SectionBold = ({ segment }) => (
  <strong style={{ fontWeight: '900', fontSize: '1.1em' }}>
    <Breadcrumb.Section>{segment}</Breadcrumb.Section>
  </strong>
);

const SectionRegular = ({ segment }) => <Breadcrumb.Section>{segment}</Breadcrumb.Section>;

const TitleBreadcrumb = ({ breadcrumbSegments }) => {
  let content;
  if (breadcrumbSegments.length === 1) {
    content = <SectionBold segment={breadcrumbSegments[0]} />;
  } else if (breadcrumbSegments.length === 2) {
    content = (
      <React.Fragment>
        <SectionRegular segment={breadcrumbSegments[0]} />
        <Breadcrumb.Divider icon="right chevron" />
        <SectionBold segment={breadcrumbSegments[1]} />
      </React.Fragment>
    );
  }

  return <Breadcrumb size="massive">{content}</Breadcrumb>;
};

TitleBreadcrumb.propTypes = {
  breadcrumbSegments: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default TitleBreadcrumb;
