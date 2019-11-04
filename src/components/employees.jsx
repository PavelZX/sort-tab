import React         from "react";
import { PropTypes } from 'prop-types';
import CreateReactClass from 'create-react-class';

function copy(obj) {
    var newObj = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
  }
  
  var Cell = CreateReactClass({
    propTypes: {
        data: PropTypes.string.isRequired,
        // Will be called with the new value for the cell
        onChange: PropTypes.func.isRequired
    },
    handleChange: function(evt) {
        this.props.onChange(evt.target.value);
    },
    render: function() {
        return <input value={this.props.data} onChange={this.handleChange} />
    }
  });
  
  var Row = CreateReactClass({
    propTypes: {
        data: PropTypes.object.isRequired,
        // Will be called with a cell's name and its new value
        onCellChange: PropTypes.func.isRequired
    },
    handleChange: function(prop, val) {
        // (Since this function simply calls this.props.onCellChange, we could
        // instead refer to the callback directly below.)
        this.props.onCellChange(prop, val);
    },
    render: function() {
        return <div className="row">
            <Cell data={this.props.data.name}
                  onChange={this.handleChange.bind(null, "name")} />
            <Cell data={this.props.data.location}
                  onChange={this.handleChange.bind(null, "location")} />
            <Cell data={this.props.data.phone}
                  onChange={this.handleChange.bind(null, "phone")} />
        </div>;
    }
  });
  
  var Grid = CreateReactClass({
    propTypes: {
        data: PropTypes.array.isRequired,
        // Will be called with a cell's row index, name, and new value
        onCellChange: PropTypes.func.isRequired
    },
    render: function() {
        var rows = this.props.data.map(function(rowData, index) {
            return <Row key={index} data={rowData}
                        onCellChange={this.props.onCellChange.bind(null, index)} />;
        }, this);
        return <div className="table">{rows}</div>;
    }
  });
  
  var Editor = CreateReactClass({
    getInitialState: function() {
        return {data: this.props.initialData};
    },
    handleCellChange: function(rowIdx, prop, val) {
        // If we were lazy here, we would simply write
        //     this.state.data[rowIdx][prop] = val;
        //     this.forceUpdate();
        // but mutating in this way can be confusing and prevents performance
        // optimizations later, so we instead treat the current data as
        // immutable and copy it when modifying:
        var row = copy(this.state.data[rowIdx]);
        row[prop] = val;
        var rows = this.state.data.slice();
        rows[rowIdx] = row;
        this.setState({data: rows});
    },
    handleButtonClick: function(evt) {
        console.log(this.state.data);
    },
    render: function() {
        return <div>
            <Grid data={this.state.data} onCellChange={this.handleCellChange} />
            <button type="button" onClick={this.handleButtonClick}>Update</button>
        </div>;
    }
  });
  
  var company = {
    employees: [
        {id: "1", name: "Peter", location: "IT", phone: "555-1212"},
        {id: "2", name: "Samir", location: "IT", phone: "555-1213"},
        {id: "3", name: "Milton", location: "loading dock", phone: "none"}
    ]
  };  

React.renderComponent(
    <Editor initialData={company.employees} />,
    document.getElementById('employees')
);

var TextInput = React.createClass({
    handleInput: function() {
      var input = React.findDOMNode(this.refs.userInput)
      this.props.saveInput(input.value)
      input.value = ''
    },
    render: function() {
      var label = this.props.label
      return (
        <div class="form-group">
          <h3><label for="input-{ label }">{ label }</label></h3>
          <input 
            type="text" 
            class="form-control" 
            id="input-{ label }" 
            ref="userInput"
           />
          <button onClick={ this.handleInput }>Save</button>
        </div>
      )
    }
  })
  
  var TextField = React.createClass({
    render: function() {
      var label = this.props.label || 'Label'
      var text = this.props.text || 'Nothing yet'
      return (
        <div>
          <h3>{ label }</h3>
          <p>{ text }</p>
        </div>
      )
    }
  })
  
  var Form = React.createClass({
    getInitialState: function() {
      return {
        userIsEditing: false,
        favoriteFlavor: 'Vanilla'
      }
    },
    toggleEditing: function() {
      var userIsEditing = !this.state.userIsEditing
      this.setState({
        userIsEditing: userIsEditing
      })
      this.handleSave()
    },
    saveInput: function(input) {
      this.setState({
        favoriteFlavor: input
      })
    },
    render: function() {
      var userIsEditing = this.state.userIsEditing
      if (userIsEditing) {
          return (
            <div>
              <TextInput 
                label={ 'Favorite flavor' } 
                saveInput={ this.saveInput }
               />
              <button onClick={ this.toggleEditing }>Done</button>            
            </div>    
          ) 
      }
      return (
        <div>
          <TextField 
            label={ 'Favorite flavor' }
            text={ this.state.favoriteFlavor }
          />
          <button onClick={ this.toggleEditing }>Edit</button>
        </div>    
   
      )
    }
  })
  
  React.render(<Form />, document.getElementById('app')) 

  class EditableListElement extends React.Component {
    
    constructor(props) {
      super();
      this.ESCAPE_KEY = 27;
      this.ENTER_KEY = 13;
      this.state = {
        editText: props.name,
        editing: false
      };
    }
  
    handleEdit (e) {
      return (e) => this.setState({
        editing: !this.state.editing
      });
    }  
    
    handleChange (e) {
      this.setState({editText: e.target.value});
    }
    
    handleSubmit (e) {
      var val = this.state.editText.trim();
      if (val) {
          this.setState({
            editText: val,
            editing: false,
          });
        } 
      }
    
    handleKeyDown (e) {
      if (event.which === this.ESCAPE_KEY) {
          this.setState({
            editText: this.props.name,
            editing: false
          });
      } else if (event.which === this.ENTER_KEY) {
          this.handleSubmit(e);
      }
    }
   
    render() {
      return (
        <li>
          <label className={this.state.editing ? 'hidden' : ''} onDoubleClick={this.handleEdit()}>{this.state.editText}</label>
          <input 
            className={this.state.editing ? '' : 'hidden'} 
            value={this.state.editText} 
            onChange={this.handleChange.bind(this)} 
            onBlur={this.handleSubmit.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)}
          />
        </li>      
      );
    }
  }
  
  React.render(
    <EditableListElement name="Pencil Investments"/>,
    document.getElementById('editableField')
  );