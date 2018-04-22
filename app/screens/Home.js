import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { Container } from './../components/Containers';
import { UserListItem } from './../components/Lists';

class Home extends Component {
    static propTypes = {
        authenticatedUser: PropTypes.object,
        users: PropTypes.array
    };

    launchChat = (user) => {
        this.props.navigation.navigate('Chat', {user});
    }

    launchProfile = (user) => {
        this.props.navigation.navigate('Profile', {user});
    }

    render() {
        return (
            <Container>
                <FlatList
                    data={this.props.users.filter(user => user.uid !== this.props.authenticatedUser.uid)}
                    renderItem={({item}) => 
                        <UserListItem 
                            onTouchImage={this.launchProfile}
                            onTouchChatBubble={this.launchChat}
                            onTouchName={this.launchChat}
                            user={item}/>
                    }
                    keyExtractor={(item) => item.uid}
                    />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authenticatedUser: state.authentication.authenticatedUser,
        users: state.users.users
    };
};

export default connect(mapStateToProps)(Home);