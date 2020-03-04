import React, { FC, ReactElement, ChangeEvent } from "react";

interface IProps {
  minValue: number;
  maxValue: number;
  currentValue: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selector?: string;
}
const Slider: FC<IProps> = ({
  minValue,
  maxValue,
  onChange,
  currentValue,
  selector
}: IProps): ReactElement => {
  const getSliderBackground = (): string =>
    `linear-gradient(90deg, #DA2C38 ${(currentValue / maxValue) *
      100}%, #747572 ${(currentValue / maxValue) * 100}%)`;
  return (
    <input
      type="range"
      min={minValue}
      max={maxValue}
      value={currentValue}
      style={{
        background: getSliderBackground()
      }}
      onChange={onChange}
      className={`slider ${selector}`}
      data-testid={selector}
    />
  );
};

export default React.memo(Slider);
