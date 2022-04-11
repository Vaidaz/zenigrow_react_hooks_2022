import { useReducer } from 'react';

const initialState = {
  jobs: [],
  input: {
    value: '',
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'changeTheInput': {
      return {
        ...state,
        input: {
          ...state.input,
          value: action.value,
        }
      }
    }
    case 'addItemToTODO': {
      return {
        ...state,
        jobs: [
          ...state.jobs,
          state.input.value,
        ]
      }
    }
    default:
      return state
  }
}

function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { jobs, input } = state;

  const handleInputChange = (e) => {
    dispatch({ type: 'changeTheInput', value: e.target.value });
  };

  const handleButtonClick = () => {
    dispatch({ type: 'addItemToTODO' });
  };

  return (
    <>
      <h1>TODO</h1>
      <input
        type="text"
        placeholder='Job'
        value={input.value}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        Add
      </button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
