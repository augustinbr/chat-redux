import React from 'react';
import ListMessages from '../containers/list-messages';
import ListChannels from '../containers/list-channels';

const App = () => {
  return (
    <div className="app">
      <ListMessages />
      <ListChannels />
    </div>
  );
};

export default App;
