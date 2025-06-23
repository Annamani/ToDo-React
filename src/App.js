import React from 'react';
import TodoList from './TodoList';

class App extends React.Component{
    render(){
        return (
            <div>
                This is my first component using class
                <TodoList/>
            </div>
        )
    }
}

// const App=()=>{
//     return(
//         <div>
//             This is my component using arrow functions.
//         </div>
//     )
// }

export default App