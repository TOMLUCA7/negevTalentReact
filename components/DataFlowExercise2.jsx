import React , {useState} from 'react'
import List from './List'
import Conversation from './Conversation'

const DataFlowExercise2 = () => {

    const [data, setData] = useState({
        displayConversation: null,
        conversations: [
            {
                user: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                user: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                user: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    })

    const displayConvo = (idConvo) => {
        setData({
            ...data,
            displayConversation: idConvo
        })
    }

    const backToContacts = () => {
        setData({
            ...data,
            displayConversation: null
        })
    }

  return (
   <>
     {
        data.displayConversation === null ? 
            <List 
                user={data.conversations.map((c) => c.user)} 
                displayConvo={displayConvo}/> 
        : <Conversation 
            convo={data.conversations.find((c) => c.user === data.displayConversation).convo} 
            sender={data.conversations.find((c) => c.user === data.displayConversation).sender} 
            backToContacts={backToContacts}
        />
    }
   </>
  )
}

export default DataFlowExercise2