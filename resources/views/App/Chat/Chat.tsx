//? UTILS
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { global } from '../../../../globals/global';

import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';

import io from 'socket.io-client';

import { useEffect, useState } from 'react';

//? COMPONENTS
import Container from '../../../components/Container';

export default function Chat ({navigation}:any) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  
  return (
    <Container style={{paddingVertical: 0, paddingHorizontal: 0}}>
      <View style={styles.messages_list}>
        {/* {messages.map(msg => (
          <View key={msg} style={[styles.message, styles.theirs]}>
            <Text style={styles.message_text}>{msg}</Text>
          </View>
        ))} */}
        
        <View style={[styles.message, styles.theirs]}>
          <Text style={styles.message_text}>Olá Ismael</Text>
        </View>

        <View style={[styles.message, styles.mine]}>
          <Text style={styles.message_text}>Olá Ismael</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <TextInput value={message} onChangeText={(val) => {setMessage(val)}} placeholder="Mensagem" style={styles.input} />

        <TouchableOpacity style={styles.send}>
          <Icon name="send" size={30} color={global.colors.textGray} />
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  message: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 12
  },

  messages_list: {
    justifyContent: 'flex-start',
    paddingHorizontal: 20
  },
  
  message_text: {
    color: "#FFF",
    fontSize: 15
  },

  theirs: {
    marginRight: 'auto',
    backgroundColor: global.colors.chat.theirs,
    borderBottomLeftRadius: 0,
  },

  mine: {
    marginLeft: 'auto',
    backgroundColor: global.colors.chat.mine,
    borderBottomRightRadius: 0,
  },

  bottom: {
    marginTop: 'auto',
    marginBottom: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  input: {
    flex: 1
  },

  send: {
    flexShrink: 0,
    marginHorizontal: 10
  }
});