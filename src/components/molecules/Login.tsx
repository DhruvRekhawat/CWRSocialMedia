import { Button, Card, CardFooter, CardHeader, Input } from "@nextui-org/react";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../lib/firebase';

interface LoginFormInterface {
  email: string,
  password: string,
}


const provider = new GoogleAuthProvider();

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormInterface>();
  const navigate = useNavigate()
  async function onSubmit(values:LoginFormInterface) {
      signInWithEmailAndPassword(auth,values.email,values.password).then(
       ()=>{
          navigate('/')
       }
      )
  }
  async function signInWithGoogle(){
    signInWithPopup(auth,provider).then(()=>{
      navigate('/')
    })
  }


  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="w-96 p-8 flex flex-col gap-4 ">
        <CardHeader>
            <h1 className="text-2xl text-violet-600 font-bold">Login Here</h1>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <Input
          isRequired
          type="email"
          label="Email"
          defaultValue=""
          className="max-w-xs"
          {...register("email")}
        />
        <Input
          isRequired
          type="password"
          label="Password"
          defaultValue=""
          className="max-w-xs"
          {...register("password")}
        />
        <Button type="submit" color="secondary"> Login </Button>
        <Button color="primary" onClick={signInWithGoogle}> Sign In With Google</Button>
        </form>
        <CardFooter>
          <Link to="/signup" className=" underline text-purple-600 "> New Here? Register Now</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
