import { Task } from './task';

// Emulación de una base de datos para guardar las tereas
export const TASKS: Task[] = [
  {
    id: 1,
    text: 'Terminar primer módulo de Angular',
    day: 'Octubre 15 a las 12:00',
    reminder: true,
  },
  {
    id: 2,
    text: 'Practicar de Angular',
    day: 'Octubre 30 a las 18:00',
    reminder: true,
  },
  {
    id: 3,
    text: 'Profundizar los componentes y servicios de Angular',
    day: 'Noviembre 01 a las 20:00',
    reminder: false,
  },
  {
    id: 4,
    text: 'Realizar mi primer proyecto en Angular',
    day: 'Noviembre 15 a las 12:00',
    reminder: true,
  },
];
