import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;

WrapperTabList.tabsRole = 'TabList'

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: #fff;
  margin: 8px;
  
  &:focus {
    outline: none;
  }
  
  &.is-selected {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid white;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

WrapperTab.tabsRole = 'Tab'

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  min-width: 40vh;
  padding: 16px;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
  `;

WrapperTabPanel.tabsRole = 'TabPanel'

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex;
  flex-wrap: wrap;
  gap: 16px;
`