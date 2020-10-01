import React, { useContext, useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import UsersContext, { TYPES } from '../context/UsersContext';

export default ({ route, navigation }) => {
  const { dispatch } = useContext(UsersContext);

  const [user, setUser] = useState(route.params ? route.params : {});

  const onSubmitForm = () => {
    dispatch({
      type: user.id ? TYPES.UPDATE_USER : TYPES.CREATE_USER,
      payload: user,
    });
    navigation.goBack();
  };

  const onChangeText = key => value => setUser({ ...user, [key]: value });

  return (
    <View style={style.form}>
      <Text>Name</Text>
      <TextInput
        style={style.input}
        onChangeText={onChangeText('name')}
        placeholder="Informe o nome"
        value={user.name}
      />

      <Text>Email</Text>
      <TextInput
        style={style.input}
        onChangeText={onChangeText('email')}
        placeholder="Informe o email"
        value={user.email}
      />

      <Text>URL do Avatar</Text>
      <TextInput
        style={style.input}
        onChangeText={onChangeText('avatarUrl')}
        placeholder="Informe a URL do avatar"
        value={user.avatarUrl}
      />

      <Button title="Salvar" onPress={onSubmitForm} />
    </View>
  );
};

const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
  },
});
