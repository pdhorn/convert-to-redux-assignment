import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAdded} />
                {this.props.people.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        people: state.persons,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        personAdded: () => dispatch({type: 'PERSON_ADDED'}),
        personDeleted: (id) => dispatch({type: 'PERSON_DELETED', id: id}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);