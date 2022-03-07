import * as S from './styles';

import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

import Menu from 'components/Menu';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Heading from 'components/Heading';
import BannerSlider from 'components/BannerSlider';
import GameCardSlider from 'components/GameCardSlider';
import Highlight from 'components/Highlight';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  upcomingGames: GameCardProps[];
  freeGamesHighlight: HighlightProps;
  freeGames: GameCardProps[];
};

export default function Home({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingHighlight,
  upcomingGames,
  freeGamesHighlight,
  freeGames,
}: HomeTemplateProps) {
  return (
    <section>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary">
            News
          </Heading>
          <GameCardSlider items={newGames} color="black" />
        </Container>
      </S.SectionNews>

      <Container>
        <S.SectionMostPopular>
          <Heading lineLeft lineColor="secondary">
            Most popular
          </Heading>
          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} />
        </S.SectionMostPopular>
      </Container>

      <Container>
        <S.SectionUpcoming>
          <Heading lineLeft lineColor="secondary">
            Upcoming
          </Heading>
          <GameCardSlider items={upcomingGames} />
          <Highlight {...upcomingHighlight} />
          <GameCardSlider items={upcomingGames} />
        </S.SectionUpcoming>
      </Container>

      <Container>
        <S.SectionFreeGames>
          <Heading lineLeft lineColor="secondary">
            Free Games
          </Heading>
          <Highlight {...freeGamesHighlight} />
          <GameCardSlider items={freeGames} />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
}
