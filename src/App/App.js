import React, { useState } from 'react';
import Section from '../Components/section/Section'
import Statistics from '../Components/statistics/Statistics';
import Notification from '../Components/notification/Notification';
import FeedbackOptions from '../Components/feedbackOptions/FeedbackOptions';

const init={
    good: 0,
    neutral: 0,
    bad: 0
};

const App=()=>{
    
    const [state, setState]=useState(init)

    const options=Object.keys(init)

    const handlerOfAll = (e)=>{
        setState({...state, [e.target.id]:state[e.target.id]+1})        
    }

    const calculateStats=()=>{      

        let total=0
        let positivePercentage=0

        options.map(o=>total+=state[o])

        state.good===0?
        positivePercentage=0:
        positivePercentage=(state.good*100/total)

        positivePercentage=Math.round(positivePercentage*100)/100

        return {total,positivePercentage}
    }

    const {total,positivePercentage}=calculateStats()

    return (
        <>
           <Section title="Buttons to vote (10$ per one, ask Mr. Burke)">
                <FeedbackOptions options={options} onLeaveFeedback={handlerOfAll}/>
           </Section>
           <Section title="Incorruptible votes: ">
                {total===0 ?
                <Notification/>:
                <Statistics {...state} 
                total={total} 
                positivePercentage={positivePercentage}/>}
           </Section>
        </>
    )
}

export default App