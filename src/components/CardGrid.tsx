import { useQuery } from "react-query";
import api from "../utils/api";
import Card from "./Card";
import Spinner from '../shared/Spinner';
import { LiContainer, TitleSection, MainTitle, CardsGrid } from "./Styled";

export default function CardGrid() {
  const { data: cards, status } = useQuery(
    ["cards"],
    async () => await api()
  );
  if (status === "loading") {
    return <Spinner />;
  } 
  
  return (
    <div>
      <CardsGrid>
        {cards?.slides.map((cardInfo: any) => (
          <>
            <TitleSection className="cardTitle">
              <MainTitle>{cardInfo.name}</MainTitle>
              <p>{cardInfo.description}</p>
            </TitleSection>
            <LiContainer key={cardInfo.id}>
              <Card cardInfo={cardInfo} />
            </LiContainer>
          </>
        ))}
      </CardsGrid>
    </div>
  );
}
