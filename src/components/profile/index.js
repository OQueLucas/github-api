import React from 'react';
import useGithub from '../../hooks/github-hooks'
import * as S from './styled.js'

const Profile = () => {

  const { githubState } = useGithub();
  
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/36959868?v=4"
        alt="Avatar of User"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserName>
            <h3>username: </h3>
            <a href='https://github.com/OQueLucas' target="_blank" rel="noreferrer">OQueLucas</a>
          </S.WrapperUserName>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers: </h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starred: </h4>
            <span>5</span>
          </div>
          <div>
            <h4>Following: </h4>
            <span>5</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
}

export default Profile;