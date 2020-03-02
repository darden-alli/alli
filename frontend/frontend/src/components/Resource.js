import withRoot from './landingPage/modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppAppBar from './landingPage/modules/views/AppAppBar';
import AppFooter from './landingPage/modules/views/AppFooter';
import ProductValues from './landingPage/modules/views/ProductValues';
import SimpleExpansionPanel from './landingPage/modules/components/SimpleExpansionPanel';


const data = {
  medical: {title: 'Medical Care', data: [
    {
      question: "Why do I need medical help if I'm not hurt?",
      answer: `Internal injuries after an incident are not always visible &
      may require medical attention. It is possible that you may have been exposed
      to a sexually-transmitted infection. It is important to remember that
      medical care can test & treat for STIs and address pregnancy concerns.`
    },
    {
      question: "What are my expenses?",
      answer: `You will NOT pay out of pocket. Medical appointments are covered by
      your Student Health Fee. Medication & lab tests are billed to your health
      insurance. Both the health fee and health insurance were paid for at the
      beginning of the school year. Financial assistance is available for lab tests
      and medications.`
    },
    {
      question: "Should I get a PERK kit?",
      answer: `PERK kits are designed to collect evidence of sexual contact,
      trauma and DNA within 5 days after the incident. You do NOT have to report
      the incident if you get a PERK kit done, and there is no cost to you should
      you choose to use the kit to collect evidence for use at a later time.`
    },
    {
      question: "How do I maintain my privacy?",
      answer: `Your appointment & results remain confidential between you & your
      healthcare provider. Upon request, you may have your health insurance charges
      encoded to maintain privacy. You do not have to report to the university or
      police if you seek medical help.`
    },
    {
      question: "How do I get counseling services?",
      answer: `Student Health will refer you to counseling services through
      Counseling and Psychological Services (CAPS). CAPS provides crisis walk-in,
      after hours care, and scheduled counseling & psychological services.`
    },
    {
      question: "How do I schedule an appointment?",
      answer: `You can schedule a medical appointment online through Primary Care
      or Gynecology with your NetBadge login. You can directly schedule a Primary
      Care appointment by calling (434) 982-3915. You can directly schedule a
      Gynecology appointment by calling (434) 924-2773. You can directly schedule
      a counseling appointment by calling (434) 243-5150.`
    },
  ]},
  police: {title: 'Law Enforcement', data: [
    {
      question: ,
      answer:
    },
    {
      question: ,
      answer:
    },
    {
      question: ,
      answer:
    },
  ]},
  counseling: {title: 'Counseling & Advising', data: [
    {
      question: ,
      answer:
    },
    {
      question: ,
      answer:
    },
    {
      question: ,
      answer:
    },
  ]},
  reporting: {title: 'University Reporting', data: [
    {
      question: ,
      answer:
    },
    {
      question: ,
      answer:
    },
    {
      question: ,
      answer:
    },
  ]},
  support: {title: 'University Support', data: [
    {
      question: ,
      answer:
    },
    {
      question: ,
      answer:
    },
    {
      question: ,
      answer:
    },
  ]}
};

function Resource(props) {
  return(
    <>
    <AppAppBar title={data[props.type].title} />
    <SimpleExpansionPanel panelData={data[props.type].data}/>
    <ProductValues />
    <AppFooter />
    </>
  )
}

export default withRoot(Resource);
