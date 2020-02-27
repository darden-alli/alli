import withRoot from './landingPage/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppFooter from './landingPage/modules/views/AppFooter';
import ProductHero from './landingPage/modules/views/ProductHero';
import ProductValues from './landingPage/modules/views/ProductValues';
import AppAppBar from './landingPage/modules/views/AppAppBar';

function SchoolPage(props) {
  return (
    <React.Fragment>
      <AppAppBar title={props.school.fullName} />
      <ProductHero
        mainText="Oh no!"
        secondaryText= {`We're not at ${props.school.fullName} yet,
        but we're launching new schools weekly - check back soon!`}
      />
      <ProductValues />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SchoolPage);
