import React from 'react';
import {View} from "@src/components/Themed";
import {Header} from "@src/components/header/header";
import {AddAndChangeMasterKeyForm} from "@src/components/addAndChangeMasterKeyForm/addAndChangeMasterKeyForm";
import { styles } from './styles';

export const ChangeMasterKeyScreen = () => {
  return (
    <View style={styles.container}>
      <Header title={'Изменение мастер ключа'} isBack />
      <AddAndChangeMasterKeyForm/>
    </View>
  );
};
