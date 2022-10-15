import React from 'react';
import NavBar from '@components/layout/navigation/NavBar/NavBar';
import Card from '@components/layout/organization/Card/Card'
import { investigacio_scrum_agile } from '@store/Questions/Questions';

const questions = [];

export default class Home extends React.Component {
  render() {
    for (const question in investigacio_scrum_agile) {
        questions.push(
            <Card id={question} questionInfo={investigacio_scrum_agile[question]}/>
       )  
    }
    return (<div>
            <NavBar/>
            <main role="main" className="container" id="content">

            <div className="text-center mt-5 mb-5 pt-5">
                {questions}
            </div>

            </main>
        </div>
    );
  }
}
