import { NEW_MESSAGE, SET_USERNAME } from './types'
import uuid from 'uuid/v4'
import moment from 'moment'

export const newMessage = ({ text, username }) => ({
  type: NEW_MESSAGE,
  item: { id: uuid(), text, timestamp: moment().valueOf(), username }
})

export const setUsername = username => ({
  type: SET_USERNAME,
  username
})

export const createReaction = ({ type, emoji, username, messageId }) => ({
  type,
  item: { id: uuid(), timestamp: moment().valueOf(), emoji, username, messageId }
})
