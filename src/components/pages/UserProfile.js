import {useParams} from "react-router-dom";

// UserProfile.js
import React from 'react';
export default function UserProfile() {
  const { username } = useParams();
  
  return(<h2>Profil de {username}</h2>);
};