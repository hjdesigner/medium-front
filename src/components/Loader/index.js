import React from 'react';
import { bool } from 'prop-types';
import * as S from './style';

const Loader = ({ fullPage }) => {
  return (
    <S.LoaderElement fullPage={fullPage} data-testid="loaderElement">
      <S.LoaderContent>
        <S.LoaderContentSpinner>
          <S.LoaderSpinner fullPage={fullPage} />    
        </S.LoaderContentSpinner>
        <S.LoaderContentText>
          <S.LoaderText fullPage={fullPage}>Loading...</S.LoaderText>
        </S.LoaderContentText>
      </S.LoaderContent>
    </S.LoaderElement>
  );
};

Loader.propTypes = {
	fullPage: bool,
};

export default Loader;
