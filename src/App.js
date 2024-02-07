import './css/bootstrap.css';
import './css/App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
  const cards = data.map(card => {
    return (<Card
      key={card.id}
      {...card}
    />)
  });

  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
