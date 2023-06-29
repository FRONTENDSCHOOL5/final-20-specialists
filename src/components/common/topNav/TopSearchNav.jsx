import React from 'react';
import * as S from './TopSearchNav.style.js';
import arrowLeft from '../../../assets/icon/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';

export default function TopSearchNav({ onSearchInputChange, searchValue }) {
  const navigate = useNavigate();

  return (
    <S.Nav>
      <S.Button onClick={() => navigate(-1)}>
        <img src={arrowLeft} alt="뒤로가기" />
      </S.Button>
      <S.Input
        type="text"
        value={searchValue}
        onChange={onSearchInputChange}
        placeholder="계정 검색"
      />
    </S.Nav>
  );
}
