import Link from 'next/link';

import Heading from 'components/Heading';
import Logo from 'components/Logo';

import * as S from './styles';

export default function Footer() {
  return (
    <S.Wrapper>
      <Logo color="black" />
      <S.Content>
        <S.Column aria-labelledby="location">
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            CONTACT
          </Heading>
          <a href="mailto:suporte@wongames.gg">suporte@wongames.gg</a>
          <a href="tel:+552133283719">+55 21 33283719</a>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            FOLLOW US
          </Heading>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Youtube</a>
          <a href="#">Facebook</a>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            LINKS
          </Heading>
          <Link href="#">
            <a>Loja</a>
          </Link>
          <Link href="#">
            <a>Explorar</a>
          </Link>
          <Link href="#">
            <a>Buscar</a>
          </Link>
          <Link href="#">
            <a>FAQ</a>
          </Link>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            LOCATION
          </Heading>
          <span>Rua 7 de maio</span>
          <span>527 - 89020330</span>
          <span>Rio de janeiro, Brasil</span>
        </S.Column>
      </S.Content>

      <S.Copyright>Won Games 2020 © Todos os Direitos Reservados</S.Copyright>
    </S.Wrapper>
  );
}
