import { Router } from '../router';
import { Header } from '../shared';
import './App.css';

export function App() {
  return (
    <div className='App__container'>
      <Header />
      <main className='App__main'>
        <Router />
      </main>
    </div>
  );
}
