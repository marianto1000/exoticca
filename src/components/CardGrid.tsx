import { useQuery } from "react-query";
import api from "../utils/api";
import Card from "./Card";
import { LiContainer, TitleSection, MainTitle, CardsGrid } from "./Styled";

export default function CardGrid() {

  const { data: cards, isLoading } = useQuery(
    ["cards"],
    async () => await api()
  );

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
            </LiContainer></>
        ))}
      </CardsGrid>
    </div>
  );
}
