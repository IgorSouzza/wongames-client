import Button from 'components/Button';
import * as S from './styles';

export type HighlightProps = {
  title: string;
  subtitle: string;
  align?: 'right' | 'left';
  backgroundImage: string;
  floatImage?: string;
  buttonLabel: string;
  buttonLink: string;
};

export default function Highlight({
  title,
  subtitle,
  align = 'right',
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink,
}: HighlightProps) {
  return (
    <S.Wrapper align={align} backgroundImage={backgroundImage}>
      {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Wrapper>
  );
}
