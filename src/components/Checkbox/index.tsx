import { useState, InputHTMLAttributes } from 'react';
import * as S from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'black' | 'white';
  onCheck?: (status: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck,
}: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  function onChange() {
    const status = !checked;
    setChecked(status);

    if (onCheck) {
      onCheck(status);
    }
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
}
