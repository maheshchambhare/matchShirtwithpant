import React ,{useState} from 'react';
import styled from "styled-components";
import "./App.css"

// import HandImage from "../src/assets/hand.png"

import ReactGA from 'react-ga';


const MainCont = styled.div`
margin-bottom: 50px;
margin-top: 80px;
position: relative;
flex-direction: column;
display: flex;
justify-content: space-around;
align-items: center;
align-content: center;
height: 100%;
width: 100%;
`;

const Shirt = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
align-content: center;
flex-direction: column;
height: 250px;
width: 150px;
border-top-left-radius: 50px;
border-top-right-radius: 50px;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
border: 6px solid  ${props => props.color};
 background-color : ${props => props.color};

`;

const ShirtButtons = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 100px;
  background-color: #000;
  border: 1px solid #fff;
`;

const ShirtCollor = styled.div`
height: 10px;
width: 50px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
margin-top: 70px;
border: 6px solid  ${props => props.color};
background-color:  ${props => props.color};
`;

const ShirtContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width:280px;

`;

const SideArms = styled.div`
margin-top: 30px;
height:200px;
width:30px;
border: 6px solid ${props => props.color};
border-bottom: 4px solid #000;
border-top-left-radius: 60px;
border-top-right-radius: 60px;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
background-color:  ${props => props.color};
`;


const PantCont = styled.div`
display: flex;
justify-content: space-between;
width:150px ;
margin-bottom: 70px;

`;

const Pants = styled.div`
height: 250px;
width: 50px;
border: 6px solid ${props => props.color};
background-color: ${props => props.color};
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
`;

const ColorContainer = styled.div`
border-radius: 100px;
height: 50px;
width: 50px;
background-color: ${props => props.color};
`;




const colors  = ["#DBE6FD","#A5E1AD","#000","#ff7b7b","#F3F4ED","#FFE3DE"

,"#D89216","#374045","#595B83","#FFCB74","#E43F5A","#7FCD91","#465881","#FFD700",
"#448EF6","#393E46","#D3D5FD","#00818A","#FCFA70"

]


function App() {

const [ colorOfShirt , setColorOfShirt ] = useState("#448EF6")
const [colorOfPants , setColorOfPants ] = useState("#00818A")

ReactGA.initialize('G-DQV8CKLSZB');
ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="main">
    <MainCont>
      <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        width: "70%"
      }}
      >
      {
        colors.map((data,index) => {

          console.log(data);

          return <ColorContainer key={index} 
          color={data}
          onClick={() => setColorOfShirt(data)}
          />
          


        })
      }
      </div>
      <ShirtCollor color={colorOfShirt}/>
      <ShirtContainer >
        <SideArms color={colorOfShirt}/>
        <Shirt color={colorOfShirt}>
          <ShirtButtons />
          <ShirtButtons />
          <ShirtButtons />
          <ShirtButtons />
          <ShirtButtons />
        </Shirt>
        <SideArms color={colorOfShirt}/>
      </ShirtContainer>
      <PantCont>
        <Pants color={colorOfPants}/>
        <Pants color={colorOfPants} />
      </PantCont>
      <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        width: "70%"
      }}
      >
      {
        colors.slice(0).reverse().map((data,index) => {

          console.log(data);

          return <ColorContainer key={index} 
          color={data}
          onClick={() => setColorOfPants(data)}
          />
          


        })
      }
      </div>
    </MainCont>
    </div>
  );
}

export default App;
