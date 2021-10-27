import { useAuth } from "../../Providers/Auth";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn }: any = useAuth();

  const schema = yup.object().shape({
    email: yup.string().email("Inválido").required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  return (
    <form className="form" onSubmit={handleSubmit(signIn)}>
      <div className="nputs">
        <TextField
          className="loginInput-field"
          variant="filled"
          fullWidth
          id="user"
          label="Email"
          margin="normal"
          size="small"
          color="secondary"
          InputProps={{ disableUnderline: true }}
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          className="loginInput-field"
          variant="filled"
          fullWidth
          InputProps={{ disableUnderline: true }}
          placeholder="senha"
          id="password"
          type="password"
          label="Senha"
          margin="normal"
          size="small"
          color="secondary"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <button className="button" type="submit">
          Entrar
        </button>
      </div>
    </form>
  );
};
export default Login;
