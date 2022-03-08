import { useState, InputHTMLAttributes } from 'react';
import * as S from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'black' | 'white';
  isChecked?: boolean;
  value?: string | ReadonlyArray<string> | number;
  onCheck?: (status: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({
  label,
  labelFor = '',
  labelColor = 'white',
  isChecked = false,
  value,
  onCheck,
  ...props
}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked);

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
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
}
