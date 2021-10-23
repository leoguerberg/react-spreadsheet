import * as constants from '../constants/spreadsheet.constants'
import { ICellId } from "../../interfaces/Cell";

export const onCellValueChange = (cellId: ICellId, newValue: string) => ({
    type: constants.SPREADSHEET_ON_CELL_VALUE_CHANGE,
    cellId,
    newValue
})