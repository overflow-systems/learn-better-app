//? UTILS
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { global } from '../../../globals/global';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/Ionicons';

export default function MentoryHeader ({text}:any) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.header_row}>
        <TouchableOpacity style={{marginRight: 20}} onPress={() => {navigation.goBack()}}>
          <Icon name="back" size={30} color={global.colors.textGray}/>
        </TouchableOpacity>

        <Text style={styles.text}>{text}</Text>
      </View>

      <TouchableOpacity>
        <IconFA name="search" size={30} color={global.colors.textGray} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingRight: 40
  },

  header_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontFamily: global.fonts.SourceSansPro.w700,
    fontSize: 16
  }
});
