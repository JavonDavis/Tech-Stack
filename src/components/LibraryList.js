import React, {Component} from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from "./ListItem";

class LibraryList extends Component {

    renderItem(library) {
        console.log("Render Item");
        console.log(library);
        return <ListItem library={library}/>
    }

    keyExtractor(library) {
        console.log("Key Extractor");
        console.log(library);
        return library.id.toString();
    }

    render() {
        console.log('props');
        console.log(this.props);
        return (
            <FlatList
                renderItem={this.renderItem}
                data={  this.props.libraries }
                keyExtractor={this.keyExtractor}
            />
        );
    }
}

const mapStateToProps = state => {
    console.log("mapStateToProps");
    console.log(state);
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
