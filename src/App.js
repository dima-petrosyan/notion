import './App.css'
import Login from './components/Login/Login.js'
import Posts from './components/Posts/Posts.js'
import Header from './components/Header/Header.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(props) {

    return (
        <BrowserRouter>
        	<Header />
        	<div className='app-wrapper'>  
        		<div className='container'>
        			<Routes>
	                	<Route path='/login' element={<Login />} />
	                	<Route path='/posts' element={<Posts />} />
	            	</Routes>
        		</div>  
            </div>
        </BrowserRouter>
    )

}

export default App