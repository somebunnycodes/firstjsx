import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className='App'>
      <PersonCard 
        firstName='Jane'
        lastName='Doe'
        age={45}
        hairColour='Black' />
        <PersonCard 
        firstName='John'
        lastName='Smith'
        age={88}
        hairColour='Brown' />
        <PersonCard 
        firstName='Millard'
        lastName='Fillmore'
        age={50}
        hairColour='Brown' />
        <PersonCard 
        firstName='Maria'
        lastName='Smith'
        age={62}
        hairColour='Brown' />
    </div>
  );
}

export default App;
