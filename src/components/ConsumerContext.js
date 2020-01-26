import React  from 'react';
import { ConsumerContext } from '../Context/ApplicationContext'; 

class ConsumerContext extends React.Component{
    render = () => {

        <GlobalConsumerContext>
            (({ title }) => {
                (context => {
                    <>
                    <h1>{this.context.title}</h1>
                    <button onClick={context.setTitle("New title")}  type="button" className="btn btn-danger">Change Global Title</button>
                    </>
                })
            })
        </GlobalConsumerContext>

    }
}