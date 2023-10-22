import React from 'react';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { App } from '/imports/ui/App';

// アプリケーション起動に実行されるコード 
Meteor.startup(() => {
  const container = document.getElementById('body');
  const root = createRoot(container);
  root.render(<App />);
});
