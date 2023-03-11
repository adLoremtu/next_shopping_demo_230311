import React from 'react';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessageWrap, ErrorMessageIcon, ErrorMessageText } from './errorMessageCss';

type Props = {
  children: React.ReactNode;
};

export const ErrorMessage = (props: Props) => {
  const { children } = props;
  return (
    <div css={ErrorMessageWrap}>
      <FontAwesomeIcon icon={faTriangleExclamation} css={ErrorMessageIcon} />
      <p css={ErrorMessageText}>{children}</p>
    </div>
  );
};
