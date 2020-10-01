import React, {useContext} from 'react';
import {Alert, FlatList, View, StyleSheet} from 'react-native';
import {Avatar, Button, Icon, ListItem} from 'react-native-elements';
import UsersContext, {TYPES} from '../context/UsersContext';

export default ({navigation}) => {
  const {state, dispatch} = useContext(UsersContext);

  console.log(dispatch);
  const navigationToForm = (user = null) => () =>
    navigation.navigate('UserForm', user);

  const confirmUserDelete = (user) => () => {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress: () => dispatch({type: TYPES.DELETE_USER, payload: user}),
      },
      {text: 'Não'},
    ]);
  };

  const getUserItem = ({item: user}) => (
    <ListItem bottomDivider key={user.id} onPress={navigationToForm}>
      <Avatar source={{uri: user.avatarUrl}} />
      <ListItem.Content style={style.listItemContent}>
        <View>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </View>

        <View style={style.listItemButtons}>
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
        </View>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View>
      <FlatList
        keyExtractor={(user) => String(user.id)}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};

const style = StyleSheet.create({
  listItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemButtons: {
    flexDirection: 'row',
  },
});
