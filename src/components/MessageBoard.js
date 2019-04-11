import React from 'react'
import moment from 'moment'
import { useAppContext } from './hooks'
import CreateReaction from './CreateReaction'
import MessageReactions from './MessageReactions'

export default function MessageBoard () {
  const { state: { messages, reactionsMap } } = useAppContext()

  return (
    <div>
      {
        messages.map(message => {
          const { id, text, timestamp, username } = message

          return (
            <div key={id}>
              <h4>{moment(timestamp).format('LLL')}</h4>
              <p>{text}</p>
              <h4>- {username}</h4>
              <CreateReaction messageId={id} />
              <MessageReactions messageReactions={reactionsMap[id]} />
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}
