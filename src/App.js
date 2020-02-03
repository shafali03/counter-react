import React from 'react';
import Counter from './Counter'
import CounterHooks from './CounterHooks'

function App() {
  return (
    <>
      Counter
      <Counter initialCount={0} />
      CounterHooks
      <CounterHooks initialCount={3} />
    </>
  )
}

export default App;
