import { Routes, Route, Navigate } from 'react-router-dom';

import { Home, Today } from '../pages';
import { lazyLoad } from '../shared';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Today />} />
      <Route path='/home' element={lazyLoad(Home)} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
