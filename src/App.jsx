import './App.css'
import EmployeeCard from './components/EmployeeCard'

function App() {

  return (<div className='row flex gap-4'>
    <div className='col'>
      
        <EmployeeCard />
    
    </div>
    <div className='col'>
     
        <EmployeeCard />
   
    </div>
    <div className='col'>
      
        <EmployeeCard />
      
    </div>
    <div className='col'>
      
        <EmployeeCard />
      
    </div>
  </div>
    
  )
}

export default App
