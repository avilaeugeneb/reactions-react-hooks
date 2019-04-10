import React from 'react'
import moment from 'moment'
import { useAppContext } from './hooks'

export default function MessageBoard () {
  const { state: { messages } } = useAppContext()

  return (
    <div>
      {
        messages.map(message => {
          const { id, text, timestamp } = message

          return (
            <div key={id}>
              <h4>{moment(timestamp).format('LLL')}</h4>
              <p>{text}</p>
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}
