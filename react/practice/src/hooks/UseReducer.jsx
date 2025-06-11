import React, { useReducer } from 'react';

const initialState = {
    username: '',
    email: '',
    password: '',
    errors: {}
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                ...state,
                [action.field]: action.value,
                errors: { ...state.errors, [action.field]: '' } // Clear error on change
            };
        case 'VALIDATE':
            const errors = {};
            if (!state.username.trim()) errors.username = 'Username is required!';
            if (!state.email.includes('@')) errors.email = 'Invalid email format!';
            if (state.password.length < 6) errors.password = 'Password must be at least 6 characters!';
            return { ...state, errors };
        case 'SUBMIT':
            return { ...state, errors: {} }; // Clear errors on submit
        default:
            return state;
    }
}

function FormWithReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'VALIDATE' });

        if (Object.keys(state.errors).length === 0) {
            alert('Form submitted successfully!');
            dispatch({ type: 'SUBMIT' });
        }
    };

    return (
        <div>
            <h2>useReducer Form Validation</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={state.username}
                        onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'username', value: e.target.value })}
                    />
                    {state.errors.username && <p style={{ color: 'red' }}>{state.errors.username}</p>}
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={state.email}
                        onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
                    />
                    {state.errors.email && <p style={{ color: 'red' }}>{state.errors.email}</p>}
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={state.password}
                        onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'password', value: e.target.value })}
                    />
                    {state.errors.password && <p style={{ color: 'red' }}>{state.errors.password}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormWithReducer;