
/*5. BeachCard.tsx – Componente para mostrar praia
Mostra um “cartão” com nome, bairro, clima e maré.

Exemplo:
tsx
Copiar
Editar
import { Beach } from '../types';

type Props = { beach: Beach };

const BeachCard = ({ beach }: Props) => (
  <div className=\"beach-card\">
    <h3>{beach.name}</h3>
    <p><strong>Bairro:</strong> {beach.neighborhood}</p>
    <p><strong>Tipo:</strong> {beach.type}</p>
    <button>Detalhes</button>
  </div>
);*/