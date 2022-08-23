import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hi. How are you?', likesCount: 14 },
                { id: 2, message: "It's my first post.", likesCount: 27 },
                { id: 3, message: 'Beautiful.', likesCount: 2 },
                { id: 4, message: 'Go go go.', likesCount: 13 },
            ],
            newPostText: '123456'
        },

        dialogsPage: {
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
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }
}

export default store