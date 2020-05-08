import React from "react";

//側邊欄
import Search from '../components/Search';
import Location from '../components/location';
import Filter from '../components/filter';
import ShowList from '../components/ShowList';
import styled from '@emotion/styled';

const SidebarComponent = styled.div`
  width: 350px;
  height: 100%;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const SearchComponent = styled.div`
  outline: 1px solid red;
  padding: 20px;
  background: rgb(244, 249, 252);
`;

export default function Sidebar({location, submit, Bind, rawData}) {
  
  return (
     <SidebarComponent>
       <SearchComponent>
          <Search onSubmitValue={ submit } bindValue={ Bind }/>
          <Location onHandlePostion={location} />
          <Filter/>
       </SearchComponent>
       <ShowList data={rawData}/>
     </SidebarComponent>
  );
}



