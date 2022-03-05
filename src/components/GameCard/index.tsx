import {
  Favorite,
  FavoriteBorder,
  AddShoppingCart,
} from '@styled-icons/material';

import * as S from './styles';

import Ribbon from 'components/Ribbon';
import Button from 'components/Button';

export type GameCardProps = {
  banner: string;
  title: string;
  developer: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  ribbon?: string;
  onFav?: () => void;
};

export default function GameCard({
  banner,
  title,
  developer,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  onFav,
}: GameCardProps) {
  return (
    <S.Wrapper>
      <S.ImageBox>
        <img src={banner} alt={title} />
      </S.ImageBox>
      {!!ribbon && <Ribbon size="small">{ribbon}</Ribbon>}
      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
        <S.FavButton role="button" type="button" onClick={onFav}>
          {!favorite && <FavoriteBorder aria-label="Add to wishlist" />}
          {!!favorite && <Favorite aria-label="Remove from wishlist" />}
        </S.FavButton>
        <S.BuyBox>
          {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  );
}
