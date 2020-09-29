import React from 'react';
import {Alert, FlatList, View} from 'react-native';
import {Button, Icon, ListItem} from 'react-native-elements';

import users from '../data/users';

export default ({navigation}) => {
  const navigationToForm = (user = null) => () =>
    navigation.navigate('UserForm', user);

  const confirmUserDelete = (user) => () => {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {text: 'Sim', onPress: () => console.warn('delete', user)},
      {text: 'Não'},
    ]);
  };

  const getActions = (user) => (
    <>
      <Button
        type="clear"
        icon={<Icon name="edit" color="orange" />}
        onPress={navigationToForm(user)}
      />
      <Button
        type="clear"
        icon={<Icon name="delete" color="red" />}
        onPress={confirmUserDelete(user)}
      />
    </>
  );

  const getUserItem = ({item: user}) => (
    <ListItem
      bottomDivider
      key={user.id}
      leftAvatar={{source: {uri: user.avatarUrl}}}
      title={user.name}
      subtitle={user.email}
      rightElement={getActions(user)}
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
