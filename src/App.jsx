import { useState } from 'react'
import data from './data'
import List from './List'

const App = () => {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className="container">
        <h2 className="title">{people.length} birthdays today</h2>
        <div className="title-underline"></div>
        <List people={people} />
        <button
          className="btn-block btn"
          type="button"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  )
}

export default App
