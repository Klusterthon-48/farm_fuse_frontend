'use client'

import React, { useState } from 'react';
import Sidebar from '../components/dashboard_components/Sidebar';
import Navbar from '../components/dashboard_components/Navbar';
import MainContent from '../components/dashboard_components/MainContent';


export default function Dashboard () {
  const [selectedItem, setSelectedItem] = useState('home');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handlePredict = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.get(
        "https://farm-fuse-backend.vercel.app/api/predict",
       
      );

      const json = response.data;

      if (response.status === 200) {
        router.push("/");
      } else {
        setIsLoading(false);
        setError(json.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex">
      <Sidebar selectedItem={selectedItem} onItemClick={handleItemClick} />
      <div className="flex-1 bg-white">
        <Navbar />
        <MainContent selectedItem={selectedItem} />
      </div>
    </div>
  );
};


