import { NEW_MESSAGE } from './types'
import uuid from 'uuid/v4'
import moment from 'moment'

export const newMessage = text => ({
  type: NEW_MESSAGE,
  item: { id: uuid(), text, timestamp: moment().valueOf() }
})
