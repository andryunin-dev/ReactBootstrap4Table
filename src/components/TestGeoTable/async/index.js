import {GET_DATA, GET_FILTER_LIST} from "../constants";
import axios from 'axios'

export const getData = async ({filters, sorting}) => {
    try {
        const res = await axios.get(GET_DATA, {
            params: {filters, sorting}
        })
        // if (!res.data.result || !res.data.result.length) {
        //     console.log('invalid data from server: ', res)
        //     throw new Error('Error fetching data from server')
        // }
        return res.data.result
    } catch (e) {
        alert(e.toString())
        return []
    }
}
export const getFilterList = async ({accessor, filters}) => {
    try {
        const res = await axios.get(GET_FILTER_LIST, {
            params: {accessor, filters}
        })
        if (!res.data.result || !res.data.result.length) {
            console.log('invalid data from server: ', res)
            throw new Error('Error fetching data from server')
        }
        return res.data.result
    } catch (e) {
        alert(e.toString())
        return []
    }
}