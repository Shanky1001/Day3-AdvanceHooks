
import { actions } from "./Actions";

export const FormReducer = (form, action) => {
    switch (action.type) {
        case actions.CHANGE_TITLE:
            return { ...form, title: action.payload }
        case actions.CHANGE_DESC:
            return { ...form, desc: action.payload }
        case actions.CHANGE_TIME:
            return { ...form, handleTime: action.payload }
        case actions.CHANGE_SKU:
            return { ...form, amazonSKU: action.payload }
        case actions.CHANGE_BARCODE:
            return { ...form, barcode: !form.barcode }
        case actions.CHANGE_AMA_CAT:
            return { ...form, amazonCategory: action.payload }
        case actions.CHANGE_IAMGE:
            return { ...form, imageSelect: action.payload }

        default:
            return form;

    }
} 