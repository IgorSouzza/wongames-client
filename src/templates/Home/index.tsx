import * as S from './styles';

import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

import Menu from 'components/Menu';
import Footer from 'components/Footer';
import Container from 'components/Container';
import BannerSlider from 'components/BannerSlider';
import Showcase from 'components/Showcase';

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

      <Showcase
        title="News"
        games={newGames}
        highlight={mostPopularHighlight}
      />

      <Showcase
        title="Most popular"
        games={mostPopularGames}
        highlight={mostPopularHighlight}
      />

      <S.SectionUpcoming>
        <Showcase title="Upcoming" games={upcomingGames} />
        <Showcase highlight={upcomingHighlight} games={upcomingGames} />
      </S.SectionUpcoming>

      <Showcase
        title="Free Games"
        games={freeGames}
        highlight={freeGamesHighlight}
      />

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
}
