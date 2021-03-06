import React from 'react';
import FolderSidebar from '../FolderSidebar/FolderSidebar';
import NotesList from '../NotesList/NotesList';
import Header from '../Header/Header';

function Main(props) {
  return(
    <div>
      <Header />
      <FolderSidebar folders={props.folders} notes={props.notes} />
      <NotesList notes={props.notes} {...props}/>
    </div>
  )
}

export default Main;