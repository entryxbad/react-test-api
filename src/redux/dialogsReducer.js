const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'How old are you?' },
        { id: 4, message: 'Yo' },
    ],
    dialogs: [
        { id: 1, name: 'Sasha' },
        { id: 2, name: 'Pasha' },
        { id: 3, name: 'Yasha' },
        { id: 4, name: 'Masha' },
        { id: 5, name: 'Natasha' },
        { id: 6, name: 'Pavel' },
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody

            return {
                ...state,
                messages: [...state.messages, { id: 5, message: body }]
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer