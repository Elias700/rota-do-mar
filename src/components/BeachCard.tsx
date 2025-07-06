
// src/components/BeachCard.tsx

import React from 'react';
import styles from './BeachCard.module.css';

type BeachCardProps = {
  name: string;
  district: string;
  type: string;
  weather: string;
  tide: string;
  mapLink: string;
  detailLink: string;
};

const BeachCard: React.FC<BeachCardProps> = ({
  name,
  district,
  type,
  weather,
  tide,
  mapLink,
  detailLink,
}) => {
  return (
    <div className={styles.card}>
      <h3>📍 {name}</h3>
      <p><strong>Bairro:</strong> {district}</p>
      <p><strong>Tipo:</strong> {type}</p>
      <p><strong>Clima:</strong> {weather}</p>
      <p><strong>Maré:</strong> {tide}</p>
      <div className={styles.buttons}>
        <a href={mapLink}>🗺️ Ver no mapa</a>
        <a href={detailLink}>ℹ️ Detalhes</a>
      </div>
    </div>
  );
};

export default BeachCard;
