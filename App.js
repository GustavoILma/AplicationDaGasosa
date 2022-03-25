import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState(0);
  const [texto, setTexto1] = useState();


  function dividir(){
    setResultado(parseFloat(valor1) / parseFloat(valor2));
    if(resultado <= 0.70){
      setTexto1("é melhor usar Alcool");
    
    }
    else{
      setTexto1("é melhor usar gasolina");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Boa Noite Fellow Traveler!</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/346/346399.png',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor da Gasolina </Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          onChangeText={(texto)=>setValor1(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor do Álcool </Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      
      
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={dividir}
        >
            <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>
      </View>



      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Recomendação: {texto}</Text>
      </View>


    </View>

    

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#778899',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBloco:{
    fontSize:20,
  },
  texto:{
    color:'#FFF',
    fontSize:30
  },
  input:{
    borderColor:'#000080',
    borderWidth:2,
    fontSize:30,
    width:'80%'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#000080',
    width:'80%',
    textAlign:'center'
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  }, 
  logo:{
    width:50,
    height:50
  }
});
