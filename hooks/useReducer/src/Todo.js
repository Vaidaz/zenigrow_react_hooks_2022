import { useReducer } from 'react';

const initialState = {
  jobs: [
    'Catch a pokemon',
  ],
  input: {
    value: '',
  }
};

const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const ADD_JOB_TO_TODO_LIST = 'ADD_JOB_TO_TODO_LIST';

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_INPUT_VALUE: {
      return {
        ...state,
        input: {
          ...state.input,
          value: action.value,
        }
      }
    }
    case ADD_JOB_TO_TODO_LIST: {
      const { input, jobs } = state;

      if (!input.value) {
        return state;
      }

      return {
        ...state,
        input: {
          ...state.input,
          value: '',
        },
        jobs: [
          input.value,
          ...jobs,
        ],
      }
    }
    default:
      return state;
  }
}

function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { jobs, input } = state;

  return (
    <>
      <h1>TODO</h1>
      <input
        type="text"
        placeholder='Job'
        value={input.value}
        onChange={(e) => dispatch({ type: CHANGE_INPUT_VALUE, value: e.target.value })}
      />
      <button onClick={() => dispatch({ type: ADD_JOB_TO_TODO_LIST })}>
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
