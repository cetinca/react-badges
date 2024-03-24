import { useState } from 'react'
import './App.css'
import Badge from './components/Badge'
import Banner from './components/Banner'
import Card from './components/Card'

function App() {

  return (
    <>
      <div className='app'>
        <Card title="Easy Deployment" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        <p></p>
        <Badge color="yellow" text="Badge" />
        <p></p>
        <Badge color="green" text="Badge" />
        <p></p>
        <Badge color="blue" text="Badge" />
        <p></p>
        <Badge color="red" text="Badge" />
        <p></p>
        <Banner color="yellow" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" title="Attention" />
        <p></p>
        <Banner color="green" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" title="Congratulations" />
        <p></p>
        <Banner color="blue" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" title="Update available" />
        <p></p>
        <Banner color="red" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" title="There is a problem with your application" />
        <p></p>
      </div>

    </>
  )
}

export default App
