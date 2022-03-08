import * as S from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'black' | 'white';
};

export default function Checkbox({
  label,
  labelFor = '',
  labelColor = 'white',
}: CheckboxProps) {
  return (
    <S.Wrapper>
      <S.Input id={labelFor} type="checkbox" />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
}
