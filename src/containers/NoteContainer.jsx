import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Loader} from 'semantic-ui-react';

import Note from "../../components/Note";

import {getNoteData} from "../../data/selectors/noteSelector";

import {noteActionCreators} from "../../data/services/noteService";



class NoteContainer extends Component {

    shouldComponentUpdate(nextProps) {
        // todo тут настраиваем условия при которых контейнер будет обновляться
        // todo обычно это флаг типа isLoading, чтобы показать юзеру, что мы что-то делаем, а не зависли
        const isLoadingChanged = nextProps.isLoading !== this.props.isLoading;
        return isLoadingChanged;
    }

    render() {
        const {isLoading, vkItems} = this.props;
        return (
            isLoading ? <Loader inline centered/> : <Note vkItems={vkItems}/>
        )
    }
}

const mapStateToProps = (state) => {
    const {
        isLoading,
        vkItems
    } = getNoteData(state);
    return {
        isLoading,
        vkItems
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(noteActionCreators, dispatch)
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteContainer)
