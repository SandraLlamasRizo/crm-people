import './App.css'
import EmployeeCardLarge from './components/EmployeeCardLarge'
import EmployeeCardSmall from './components/EmployeeCardSmall'

function App() {

  return <><div className='row flex gap-4'>
    <div className='col'>
      
        <EmployeeCardSmall />
    
    </div>
    <div className='col'>
     
        <EmployeeCardSmall />
   
    </div>
    <div className='col'>
      
        <EmployeeCardSmall />
      
    </div>
    <div className='col'>
      
        <EmployeeCardSmall />
      
    </div>
  </div>
    <div className='flex row'>
      <div className='col'>
        <EmployeeCardLarge/>
      </div>
      
  </div>
  </>
}

export default App
