import React from "react";
import styled from "styled-components";
import GoogleMapReact from 'google-map-react';

function App() {

 
  return (
    <div>
      <TitleBar>
        <Title>Where is Menlo?? :(</Title>
      </TitleBar>
      <div style={{ height: '90vh', width: '100%' }}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={11}
          defaultZoom={{
            lat: 59.95,
            lng: 30.33
          }}
        >
        </GoogleMapReact>
        </div>
    </div>
  );
}

const TitleBar = styled.div`
  background: white;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 30px;
`;

export default App;
