import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Call from './Call';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Call />
  </StrictMode>
);
