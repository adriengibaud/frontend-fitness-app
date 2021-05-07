import styled from 'styled-components';

import Table from './Table';

const PricingTable = () => {
  return (
    <Section>
      <div className='container'>
        <Table
          price={15}
          primaryColor='rgba(84,89,247,1)'
          secondaryColor='rgba(78,139,194,1)'
          thirdColor='rgba(93,184,222,1)'
        />
        <Table
          price={15}
          primaryColor='rgba(254,134,231,1)'
          secondaryColor='rgba(53,119,187,1)'
          thirdColor='rgba(93,184,222,1)'
        />
        <Table
          price={15}
          primaryColor='rgba(101,101,101,1)'
          secondaryColor='rgba(184,200,217,1)'
          thirdColor='rgba(93,184,222,1)'
        />
      </div>
    </Section>
  );
};

export default PricingTable;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  .container {
    padding-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
