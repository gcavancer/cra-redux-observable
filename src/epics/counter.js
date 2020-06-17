import { delay, map } from "rxjs/operators";
import * as types from '../constants/ActionTypes'
import { observableComplete } from '../containers/counter/actions'

export const counterEpic = (action$) =>
  action$.ofType(types.INCREMENT, types.DECREMENT).pipe(
    delay(1000),
    map((action) => (observableComplete(action.payload)))
  );