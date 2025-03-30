
import { Suspense } from 'react';
import './App.css';
import Countries from './components/countries/countries';

// restful api of countries
const countriesPromise = fetch('https://restcountries.com/v3.1/all').then(res => res.json());

function App() {

  return (
    <>
      

      <Suspense fallback={<h2>Countries are loading...</h2>}>
        <div>
          <Countries countriesPromise={countriesPromise}></Countries>
        </div>
      </Suspense>
    </>
  )
}

export default App
