import React from 'react';
import {View} from "@src/components/Themed";
import {Header} from "@src/components/header/header";
import {AddAndChangeMasterKeyForm} from "@src/components/addAndChangeMasterKeyForm/addAndChangeMasterKeyForm";
import { styles } from './styles';

export const AddMasterKeyScreen = () => {
  return (
  <View style={styles.container}>
    <Header title={'Добавление мастер ключа'} isBack />
    <AddAndChangeMasterKeyForm/>
  </View>
  );
};
