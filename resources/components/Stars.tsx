import { Text, View, StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { global } from '../../globals/global';

export default function Stars({avaliation}:any) {
  let stars = [];
  let result = [];

  let avaliation_label = Number.isInteger(avaliation) ? avaliation : avaliation.toFixed(1);

  for(let i = 0; i < 5; i++) {
    if(avaliation > 0) {
      if(avaliation < 1) {
        stars[i] = .5;
        result.push(
          <View style={style.star_container} key={i}>
            <Icon name="star" key={i} color={global.colors.lighterGray} size={30} />
            <Icon name="star-half" style={style.star_half} key={i+.5} color={global.colors.success} size={30} />
          </View>
        );
        avaliation = Math.floor(avaliation);
      }
      else {
        result.push(
          <View style={style.star_container} key={i}>
            <Icon name="star" key={i} color={global.colors.success} size={30} />
          </View>
        );
        stars[i] = 1;
        avaliation--;
      }
    }
    else
      result.push(
        <View style={style.star_container} key={i}>
          <Icon name="star" key={i} color={global.colors.lighterGray} size={30} />
        </View>
      );
  };

  return (
    <View style={style.container}>
      <View style={style.stars}>
        {result}
      </View>

      <Text style={style.avaliation}>{avaliation_label}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%'
  },

  stars: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  star_container: {
    position: 'relative',
    marginHorizontal: 3,
  },

  star_half: {
    position: 'absolute',
    left: 0,
    top: 0,
  },

  avaliation: {
    color: global.colors.lighterGray,
    fontSize: 20,
    fontFamily: global.fonts.SourceSansPro.w700,
  }
});