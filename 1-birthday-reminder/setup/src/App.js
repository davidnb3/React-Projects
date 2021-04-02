import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
  const [people, setPeople] = useState(data);

  function handleRemove(id) {
    const updatePeople = people.filter((person) => person.id !== id);
    setPeople(updatePeople);
  }
  return <main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people} onRemove={handleRemove} />
      <button className='btn' onClick={() => setPeople([])}>
        Clear all
      </button>
    </section>
  </main>
}

export default App;
