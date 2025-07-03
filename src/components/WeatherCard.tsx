



/*
    6. WeatherCard.tsx – Componente do clima
Responsável por exibir o clima atual e previsão futura.

tsx
Copiar
Editar
import { WeatherData } from '../types';

type Props = { weather: WeatherData };

const WeatherCard = ({ weather }: Props) => (
  <div className=\"weather-card\">
    <h4>Clima</h4>
    <p>🌡️ {weather.temp}°C</p>
    <p>🌤️ {weather.condition}</p>
    <p>💨 Vento: {weather.wind} km/h</p>
  </div>
);
*/