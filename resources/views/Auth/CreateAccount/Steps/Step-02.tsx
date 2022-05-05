//? UTILS
import { StyleSheet, View } from 'react-native';
import { global } from '../../../../../globals/global';

//? COMPONENTS
import LabelInput from '../../../../components/LabelInput';

import { TextInputMask } from 'react-native-masked-text';
import { Picker } from '@react-native-picker/picker';

export default function CreateAccountIntro ({genero, setGenero, setCpf, setDataNascimento}:any) {

  const date_raw = (val:string, settings:any) => {
    if(val.length == 10 ) {
      const ano = val[6] + val[7] + val[8] + val[9];
      const mes = val[3] + val[4];
      const dia = val[0] + val[1];
      return `${ano}/${mes}/${dia}`;
    }
    else return;
  };

  return (
    <View style={styles.form}>
      <LabelInput text="Genero" required={true}>
        <View style={styles.picker}>
          <Picker selectedValue={genero} onValueChange={(val:string) => {setGenero(val)}} dropdownIconColor={global.colors.lighterGray} style={{color: '#FFF'}}>
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Masculino" value="1" />
            <Picker.Item label="Feminino" value="2" />
            <Picker.Item label="Outros" value="3" />
          </Picker>
        </View>
      </LabelInput>

      <LabelInput text="Data de Nascimento" required={true}>
        <TextInputMask
          type={'custom'}
          options={{
            mask: '99/99/9999',
            getRawValue: (val, settings) => date_raw(val, settings)
          }}
          placeholder="DD/MM/AAAA"
          onChangeText={(val:string, raw:string|undefined) => { setDataNascimento(raw??val) }}
          includeRawValueInChangeText={true}
        />
      </LabelInput>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
    flex: 1
  },

  picker: {
    backgroundColor: global.colors.lightGray,
    borderRadius: 500,
    fontSize: 16,
    padding: 3,
    paddingHorizontal: 16,
  },

  picker_item: {
    
  }
});