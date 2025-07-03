

/*2. services/ – Conexão com APIs e dados
Aqui você coloca os serviços responsáveis por buscar dados externos ou simular dados internos (mock). São funções de lógica isolada que não têm nada a ver com interface.

Arquivo	Função
weatherApi.ts	Conexão com a API do OpenWeatherMap (clima atual e previsão)
tideApi.ts	Conexão com a API de marés (ex: Marés.com.br ou WorldTides)
beaches.ts	Pode conter dados fixos (mock) ou funções para buscar praias de um banco ou Firebase

Exemplo de weatherApi.ts
ts
Copiar
Editar
import axios from 'axios';

export const getWeatherByCoords = async (lat: number, lon: number) => {
  const apiKey = 'SUA_CHAVE';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
};
*/