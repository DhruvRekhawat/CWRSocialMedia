import { Button, Card, CardFooter, CardHeader, Input } from "@nextui-org/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { auth } from '../../lib/firebase';




interface RegsiterFormInterface {
  email: string,
  password: string,
  confirmPassword:string,
}

const Regsiter = () => {
  const { register, handleSubmit } = useForm<RegsiterFormInterface>();
  
  async function onSubmit(values:RegsiterFormInterface) {
      if(values.password === values.confirmPassword){
        createUserWithEmailAndPassword(auth,values.email,values.password)
      }
      else{
        alert('Your Password do not match!')
      }
  }


  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="w-96 p-8 flex flex-col gap-4 ">
        <CardHeader>
            <h1 className="text-2xl text-violet-600 font-bold">Regsiter Here</h1>
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
        <Input
          isRequired
          type="password"
          label="Confirm Password"
          defaultValue=""
          className="max-w-xs"
          {...register("confirmPassword")}
        />
        <Button type="submit" color="secondary"> Register </Button>
        </form>
        <CardFooter>
          <Link to="/login" className=" underline text-purple-600 "> Already registered? Regsiter Here</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Regsiter;
