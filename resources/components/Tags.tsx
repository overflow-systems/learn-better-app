//? UTILS
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { global } from '../../globals/global';
import { useState } from 'react';

interface Item {
  index:number,
  label:string
}

export default function ActionButton ({style, list}:any) {
  const content:any[] = [];

  const [selected, setSelected] = useState<number[]>([]);

  const addTag = (index:number) => {
    let result = [...selected];

    if(selected.includes(index)) result.splice(result.indexOf(index), 1);
    
    else result.push(index);
    
    setSelected(result)
  }

  list.forEach((item:Item) => {
    content.push(
      <TouchableOpacity key={item.index} onPress={() => addTag(item.index)}
        style={selected.includes(item.index) ? [styles.active, styles.item] : [styles.item]}>

        <Text style={styles.text}>{item.label}</Text>

      </TouchableOpacity>
    )
  });

  return (
    <View style={styles.content}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },

  item: {
    borderWidth: 2,
    borderColor: global.colors.lighterGray,
    fontSize: 16,
    padding: 5,
    paddingHorizontal: 24,
    borderRadius: 500,
    color: '#FFF',
    alignSelf: 'flex-start',
    marginHorizontal: 5,
    marginBottom: 10
  },

  active: {
    backgroundColor: global.colors.lighterGray
  },
  
  text: {
    textAlign: 'center',
    color: "#FFF",
    fontSize: 15,
    fontFamily: global.fonts.SourceSansPro.w400
  }
});
