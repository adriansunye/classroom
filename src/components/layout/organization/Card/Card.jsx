import React from 'react';

import './Card.scss';

export default class Card extends React.Component {
  render() {
    return <div key={this.props.id} className="card col-sm">
                <div className="card-body">
                <h5 className="card-title">{this.props.questionInfo.title}</h5>
                <p className="card-text">{this.props.questionInfo.anwser}</p>
                <a href={this.props.questionInfo.link} className="card-link">{this.props.questionInfo.link_text}</a>
                </div>
            </div>;
    }
}