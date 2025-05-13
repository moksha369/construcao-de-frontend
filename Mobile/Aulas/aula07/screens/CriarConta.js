import { View, ScrollView } from "react-native";
import { TextInput, HelperText, Button } 
    from "react-native-paper";
import { useForm, Controller } 
    from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver} from 
'@hookform/resolver/Yup';

function CriarConta() {
  const schema = Yup.object().shape({
    nome: Yup.string()
        .required("Nome é obrigatório"),
    email: Yup.string()
        .required("E-mail é obrigatório")
        .email("E-mail é invalido"),
    senha: Yup.string()
        .required("Senha é obrigatório")
        .min(8, "Deve ter pelo menos 8 caracteres"),
    confirmaSenha: Yup.string()
        .oneOf([Yup.ref("senha"), null], 
            "As senhas não coincidem")
  });  
  const { control, handleSubmit, 
    formState: {  errors  }} = useForm();  
  return (
    <ScrollView>
  <View style={{ flex: 1, padding: 16 }}>
    <Controller 
      control={control}
      name="nome"
      render={
        ({ field: {value, onChange} }) => (
          <TextInput 
            label="Nome"
            mode="outlined"
            autoCapitalize="sentences"
            value={value}
            onChangeText={onChange}
          />
        )} />
    <HelperText type="error" 
      visible={errors.nome}>
        {errors.nome?.message}
      </HelperText>
    <Controller
        control={control}
        name="email"
        render={
          ({field: {value, onChange}}) => (
            <TextInput              
               label="E-mail"
               keyboardType="email-address"
               mode="outlined"
               value={value}
               onChangeText={onChange}
               />
          )}/>
    <HelperText type="error"
       visible={errors.email}>
        {errors.email?.message}
       </HelperText>
    <Controller 
        control={control}
        name="senha"
        render={
          ({field:{value,onChange}}) => (
            <TextInput
               label="Senha"
               mode="outlined"
               secureTextEntry
               value={value}
               onChangeText={onChange}
            />
        )}/>
    <HelperText type="error"
      visible={errors.senha}>
        {errors.senha?.message}
      </HelperText>
    <Controller 
      control={control}  
      name="confirmaSenha"
      render={({field:{value,onChange}})=>(
        <TextInput
          label="Confirma senha"
          mode="outlined"
          secureTextEntry
          value={value}
          onChangeText={onChange}
         />
      )
      }/>
      <HelperText type="error"
        visible={errors.confirmaSenha}>
          {errors.confirmaSenha?.message}
        </HelperText>
      <Button mode="contained" 
      onPress={handleSubmit(
        ()=>alert('Ok'))}>
        Criar
      </Button>      
  </View>
  </ScrollView>
  );
}

export default CriarConta;