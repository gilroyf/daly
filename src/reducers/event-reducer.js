const eventsDefaultState = [];

const eventReducer = (state = {events: eventsDefaultState}, action) => {
    switch (action.type) {
        case 'SET': 
            return (action.events);
        case 'ADD':
            return [...state, action.event];
        default:
            return state;
    }
}

export default eventReducer;