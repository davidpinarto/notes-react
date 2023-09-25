import React from 'react';
import HeaderContainer from './header/HeaderContainer';
import BodyContainer from './body/Body';
import { getInitialData, showFormattedDate } from '../utils/index';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      showFormattedDate: showFormattedDate(),
      title: '',
      body: '',
    };

    this.onNotesChangeEventHandler = this.onNotesChangeEventHandler.bind(this);
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.getNotes = this.getNotes.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.onAddNotesHandler({ title: this.state.title, body: this.state.body });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        notes: [
          ...prevState.notes,
          {
            id: prevState.notes.length + 1,
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          },
        ],
      };
    });
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onNotesChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({ notes });
  }

  getNotes(notes) {
    return notes.map((note) => {
      const createdAt = showFormattedDate(note.createdAt);

      return {
        ...note,
        createdAt,
      };
    });
  }

  render() {
    return (
      <>
        <HeaderContainer />
        <BodyContainer
          title={this.state.title}
          body={this.state.body}
          onTitleChangeEventHandler={this.onTitleChangeEventHandler}
          onNotesChangeEventHandler={this.onNotesChangeEventHandler}
          notes={this.getNotes(this.state.notes)}
          onDelete={this.onDeleteHandler}
          onSubmitEventHandler={this.onSubmitEventHandler}
        />
      </>
    );
  }
}

export default NotesApp;
