import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from './styled'

const  Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <S.WrapperTabList>
        <S.WrapperTab>
          Repositories
        </S.WrapperTab>
        <S.WrapperTab>
          Starred
        </S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem 
          name='advanced-reatcjs-dio' 
          linkToRepo='https://github.com/OQueLucas/advanced-reatcjs-dio' 
          fullName='OQueLucas/advanced-reatcjs-dio'
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem 
          name='HTTPClient' 
          linkToRepo='https://github.com/julianazanelatto/HTTPClient' 
          fullName='julianazanelatto/HTTPClient'
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories;