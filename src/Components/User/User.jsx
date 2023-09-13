import React from 'react';
import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => {
  return <section>
    <UserHeader />
    <Routes>
      <Route patch="/" element={<Feed />} />
      <Route patch="postar" element={<UserPhotoPost />} />
      <Route patch="estatisticas" element={<UserStats />} />
    </Routes>
  </section>
}

export default User;