import React from 'react';
import {FlatList, View} from 'react-native';

import users from '../data/users';
import {ListItem} from 'react-native-elements';

export default ({navigation}) => {
  const navigationToForm = () => navigation.navigate('UserForm');

  const getUserItem = ({item: user}) => (
    <ListItem
      bottomDivider
      key={user.id}
      leftAvatar={{source: {uri: user.avatarUrl}}}
      title={user.name}
      subtitle={user.email}
      onPress={navigationToForm}
    />
  );

  return (
    <View>
      <FlatList
        keyExtractor={(user) => String(user.id)}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
};
