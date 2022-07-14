import React, { useState } from 'react';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks'

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState()

  const submitGetUser = () => {
    if(!usernameForSearch) return;
    return getUser(usernameForSearch);
  }

  return (
    <header>
      <S.Wrapper>
        <input 
        type="text" 
        placeholder='Type the user name to search...'
        onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type='submit' onClick={submitGetUser}>Search</button>
      </S.Wrapper>
    </header>
  );
}

export default Header;