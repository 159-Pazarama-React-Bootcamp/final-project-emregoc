import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function formReducer(state = initialState.form, action){// buradaki, 
    switch (action.type) { // gelen action type                  // action categoryActions'ta ki type degeri
        case actionTypes.SUBMIT_FORM_SUCCESS: // GET_CATEGORIES_SUCCESS ise
            
            return action.payload; // action icindeki payload'i state olarak dondur. payload,
                                    // categoryActions'de ki, payload degeri
        default:
            return state; // bir aksiyon yok ise defaul olarak state'i gonderdik
    }
}