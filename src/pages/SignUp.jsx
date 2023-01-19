import { Input } from "../components/Input";

import {useForm} from 'react-hook-form'

export function SignUp() {

  // calling the react-hook-form function
  const {register, handleSubmit} = useForm({
    mode: 'onBlur'
  })

  function submitApi(data) {
    // the input information is being sent to this data parameter
    console.log(data)
  }

  return (
    <div className="signup">
      <div className="formBox">
        <form onSubmit={handleSubmit(submitApi)}>
          <label className="emailBox">
            <div className="email-label">Tell me your best email</div>
            <Input 
              name={"email"} 
              register={register} 
              placeholder={"Email"}
            />
          </label>
        </form>
      </div>
    </div>
  );
}