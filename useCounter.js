import { useState} from 'react';


const useCounter = ( inicialState = 10 ) => {

   const [counter, setState] = useState( inicialState );

   const increment = () => {
       setState( counter + 1 );
   }

   const decrement = () => {
    setState( counter - 1 );
}

const reset = () => {
    setState( inicialState );
}

return {counter, increment, decrement, reset }

}

export default useCounter;




