import { SerializedStyles } from '@emotion/serialize';

import { ESubmitButton } from './SubmitButtonCss';

type Props = {
  setCss?: SerializedStyles;
  value: string;
  disabled: boolean;
};

export const SubmitButton = (props: Props) => {
  const { setCss, value, disabled } = props;

  return (
    <button css={[ESubmitButton, setCss]} type='submit' disabled={disabled}>
      {value}
    </button>
  );
};
