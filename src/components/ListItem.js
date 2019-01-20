import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import {CardSection} from "./common";
import * as actions from '../actions';

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        console.log("Render Description");

        const { library, expanded } = this.props;

        if ( expanded ) {
            return (
                <CardSection>
                    <Text style={{flex: 1}}>
                        {library.item.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const {
            titleStyle
        } = styles;
        const { id, title } = this.props.library.item;

        console.log('List item');
        console.log(this.props);

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    console.log("Map State to Props list item");

    const{ library } = ownProps;
    const { selectedLibraryId } = state;
    const { id } = library.item;


    console.log(id);
    console.log(selectedLibraryId);

    const expanded = id === selectedLibraryId;
    return { expanded }
};

export default connect(mapStateToProps, actions)(ListItem);
