import withRoot from './landingPage/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppFooter from './landingPage/modules/views/AppFooter';
import ProductHero from './landingPage/modules/views/ProductHero';
import ProductValues from './landingPage/modules/views/ProductValues';
import ProductCategories from './landingPage/modules/views/ProductCategories';
import AppAppBar from './landingPage/modules/views/AppAppBar';


function SchoolPage(props) {
  const mainNotFound="Oh no!";
  const secondaryNotFound=`We're not at ${props.school.fullName} yet,
  but we're launching new schools weekly - check back soon!`;

  return (
    <React.Fragment>
      <AppAppBar title={props.school.shortName} />
      {props.school.launched
      ? <ProductCategories />
      : <ProductHero
        mainText={mainNotFound}
        secondaryText={secondaryNotFound}
        />}
      <ProductValues />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SchoolPage);
