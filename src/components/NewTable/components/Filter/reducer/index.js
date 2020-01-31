import {
    CLICK_ON_ITEM,
    CLICK_ON_SETTINGS_ITEM,
    CHANGE_INPUT,
    SET_ITEM_SIZES,
    SET_SETTINGS_ITEM_SIZES,
    CHECK_ALL,
    CHANGE_MENU_MAX_HEIGHT,
    CHANGE_SIMPLE_SEARCH_INPUT, CLICK_ON_SELECT_ALL
} from "../constants/actions"

const rootReducer = (state, action) => {
    const {type, payload} = action
    const newState = {}
    switch (type) {
        case CLICK_ON_ITEM:
            const lastClicked = {value: payload}
            //add/remove clicked item into checkedItems array
            const itemIndex = state.checkedItems.indexOf(payload)
            if (itemIndex < 0) {
                newState.checkedItems = [...state.checkedItems, payload]
            } else {
                newState.checkedItems = state.checkedItems.filter(item => item !== payload)
            }
            //set checked status in data[]
            newState.checkedItemsCounter = 0
            const data = state.data.map(item => {
                if (item.value === payload) {
                    newState.checkedItemsCounter = !item.checked ? ++newState.checkedItemsCounter : newState.checkedItemsCounter
                    lastClicked.checked = !item.checked
                    return  {...item, checked: !item.checked}
                }
                newState.checkedItemsCounter = item.checked ? ++newState.checkedItemsCounter : newState.checkedItemsCounter
                return  item
            })
            return {...state, data, lastClicked, ...newState}
        case CLICK_ON_SETTINGS_ITEM:
            const lastChosenSetting = {value: payload}
            return {...state, lastChosenSetting}
        case CLICK_ON_SELECT_ALL:
            return {...state,
                selectAll: !state.selectAll,
                data: state.data.map(item => ({...item, checked: !state.selectAll})),
                checkedItems: [],
                checkedItemsCounter: !state.selectAll ? state.data.length : 0,
                lastClickSelectAll: Date.now()
            }
        case CHANGE_INPUT:
            // handle changing input value for dropdown filter search field
            return {...state, inputValue: payload}
        case CHANGE_SIMPLE_SEARCH_INPUT:
            //handle changing input value for simple search filter
            return {...state, simpleSearchInputValue: payload}
        case SET_ITEM_SIZES:
            return {...state, itemWidth: payload.width, itemHeight: payload.height}
        case SET_SETTINGS_ITEM_SIZES:
            return {...state, settingItemWidth: payload.width, settingItemHeight: payload.height}
        // case CHECK_ALL:
        //     return {...state,
        //         data: state.data.map(item => ({...item, checked: payload})),
        //         checkedItems: payload ? state.data.length : 0,
        //         lastClickSelectAll: Date.now()
        //     }
        case CHANGE_MENU_MAX_HEIGHT:
            return  {...state, maxHeight: payload}
        default:
            return state
    }
}
export default rootReducer