import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import SimpleComponent from './components/SimpleComponent'
import SimpleComponentWithProps from './components/SimpleComponentWithProps'
import ComponentWithChildren from './components/ComponentWithChildren'
import Counter from './components/Counter'
import ExplainUseEffect from './components/ExplainUseEffect'

function App() {


  return (
    <>

      <SimpleComponent />

      <SimpleComponentWithProps title="Hello, World!" message="This is a simple component with props." />


      <ComponentWithChildren>
        <h3>This is a child element passed to the ComponentWithChildren.</h3>
        <p>This is another child passed for this component</p>
      </ComponentWithChildren>

      <Counter />


      <ExplainUseEffect />

    </>
  )
}

export default App
