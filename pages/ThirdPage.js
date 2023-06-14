//3
import React, {useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  Linking,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Home = ({navigation}) => {
  const [post, setPost] = useState({
    eposta: '',
    sifre: '',
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageTitle}>
        <Text style={{left: 60, top: 30, fontSize: 50, color: '#FFFDFC'}}>
          Giriş Yap
        </Text>
      </View>
      <View style={styles.imageContainer}></View>
      <View style={styles.Inputs}>
        <Text style={{left: 10, top: -151, fontSize: 30, color: '#FFFDFC'}}>
          E-posta Adresi
        </Text>
        <TextInput
          placeholder="E-posta Adresinizi Yazınız"
          style={styles.epostaText}
          onChangeText={value => setPost({...post, isim: value})}></TextInput>
        <Text style={{left: 10, top: -151, fontSize: 30, color: '#FFFDFC'}}>
          Şifre
        </Text>
        <TextInput
          placeholder="Şifrenizi Yazınız"
          style={styles.epostaText}
          onChangeText={value => setPost({...post, yas: value})}></TextInput>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('FourthPage', {
              login: post,
            })
          }>
          <Text style={styles.buttonTitle}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4A7DA2',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: '35%',
    paddingTop: '10%',
    top: -155,
  },
  buttonTitle: {
    textAlign: 'center',
    padding: 15,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#CAD2DB',
    color: '#4A7DA2',
    width: 120,
    height: 50,
    borderRadius: 35,
  },
  imageContainer: {
    height: 50,
    width: 50,
    alignContent: 'center',
    paddingHorizontal: '20%',
    borderColor: '#FFFDFC',
  },
  pageTitle: {
    paddingHorizontal: '12%',
  },

  Inputs: {
    paddingHorizontal: '5%',
    paddingTop: '45%',
    paddingVertical: 10,
    padding: 10,
  },
  epostaText: {
    backgroundColor: '#CAD2DB',
    borderColor: '#4D80A6',
    textAlign: 'center',
    borderRadius: 5,
    width: '100%',
    top: -150,
    borderRadius: 35,
  },
  InputText: {
    color: '#4D80A6',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Home;
