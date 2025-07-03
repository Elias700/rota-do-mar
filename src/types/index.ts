

/*

    3. types/ – Interfaces e tipos TypeScript
Aqui você define tipos personalizados (interfaces) que serão usados em todo o projeto para garantir segurança e organização.

Exemplo de types/index.ts
ts
Copiar
Editar
export interface Beach {
  id: number;
  name: string;
  neighborhood: string;
  type: 'Urbana' | 'Isolada';
  lat: number;
  lng: number;
}

export interface WeatherData {
  temp: number;
  condition: string;
  wind: number;
}

export interface TideData {
  status: 'cheia' | 'vazando';
  nextChange: string;
}
Assim você pode importar em outros arquivos:
import { Beach } from '../types'
*/