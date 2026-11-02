import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Examples from './components/Examples/Example.jsx';
import { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </Fragment>
  );
}


