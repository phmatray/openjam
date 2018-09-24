import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'semantic-ui-react';

const divider = <Breadcrumb.Divider icon="right chevron" />;

const TitleBreadcrumb = ({ breadcrumbSegments }) => {
  const segments = breadcrumbSegments
    .map(
      (segment, index) =>
        index > 0 || breadcrumbSegments.length === 1 ? (
          <strong style={{ fontWeight: '900', fontSize: '1.1em' }}>
            <Breadcrumb.Section key={segment}>{segment}</Breadcrumb.Section>
          </strong>
        ) : (
          <Breadcrumb.Section key={segment}>{segment}</Breadcrumb.Section>
        ),
    )
    .reduce((prev, curr) => [prev, divider, curr]);

  return <Breadcrumb size="massive">{segments}</Breadcrumb>;
};

TitleBreadcrumb.propTypes = {
  breadcrumbSegments: PropTypes.arrayOf(PropTypes.any).isRequired,
  description: PropTypes.string,
};

export default TitleBreadcrumb;
