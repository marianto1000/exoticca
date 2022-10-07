import styled, { css } from "styled-components";
export const RowCards = styled.div`
  height: 41vh;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  position: relative;
  margin-bottom: 10%;
  margin-top: 10%;
`;
export const CardContainer = styled.div`

`;
export const PriceInfo = styled.div`
  position: absolute;
  top: 5%;
  left: 18%;
  padding: 3%;
  background-color: black;
  color: rgb(232, 203, 145);
  border-radius: 10%;
`;
export const CardBottomTitle = styled.h5`
  text-align: left;
  margin-left: 10%;
  margin-bottom: 0;
`;
export const CardBottomInfo = styled.div`
  display: flex;
  gap: 1em;
  padding-left: 10%;
`;
export const DestinationInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 54%;
  left: 14%;
  color: white;
  font-weight: bold;
  font-size: 1.3em;
  text-align: left;
`;
export const Image = styled.img`
  width: 80%;
  margin: 0 auto;
  height: 60%;
  object-fit: contain;
`;
export const LiContainer = styled.li`
  list-style: none;
  gap: 1em;
  padding-bottom: 5%;
  padding-top: 2%;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
`;

export const MainTitle = styled.h5`
  font-size: 1.5em;
  margin: 0;
  font-weight: bold;
  font-style: italic;
`;
export const CardsGrid = styled.ul`
  padding-left: 0px;
  padding: 5%;
`;
