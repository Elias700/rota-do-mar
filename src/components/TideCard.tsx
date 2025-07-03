

/*

    7. TideCard.tsx – Componente da maré
Exibe estado atual da maré e a próxima mudança.

tsx
Copiar
Editar
import { TideData } from '../types';

type Props = { tide: TideData };

const TideCard = ({ tide }: Props) => (
  <div className=\"tide-card\">
    <h4>Maré</h4>
    <p>Estado atual: {tide.status}</p>
    <p>Próxima mudança: {tide.nextChange}</p>
  </div>
);
*/