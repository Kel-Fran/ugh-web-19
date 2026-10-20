import { useState } from 'react'
import type { Animal, AnimalOperationProps } from './types/animal';
import AnimalController from './components/AnimalController';
import AnimalList from './components/AnimalList';

let id = 0;

function App() {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const operations: AnimalOperationProps = {
      animals() {
        return animals;
      },
      incrementAge(id) {
        setAnimals(animals => animals.map(it => it.id === id ? {...it, age: it.age + 1} : it))
      },
      remove(id) {
        setAnimals(animals => animals.filter(it => it.id !== id))
      },
      add(name, age) {
        const nextId = id++;
        setAnimals(animals => [...animals, {id: nextId, name, age}])
      },
    }


  return (
    <>
    <AnimalController {...operations}/>
    <AnimalList {...operations}/>
    </>
  )
}

export default App
