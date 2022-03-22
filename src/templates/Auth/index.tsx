import Link from 'next/link';

import * as S from './styles';

import Heading from 'components/Heading';
import Logo from 'components/Logo';

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

export default function Auth({ title, children }: AuthProps) {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Link href="/">
            <a>
              <Logo id="banner" />
            </a>
          </Link>
          <div>
            <Heading size="huge">All your favorite games in one place</Heading>
            <S.SubTitle>
              <strong>WON</strong> is the best and most complete gaming
              platform.
            </S.SubTitle>
          </div>
          <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Link href="/">
            <a>
              <Logo id="content" color="black" size="large" />
            </a>
          </Link>
          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>

          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  );
}
