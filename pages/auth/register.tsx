import Form from "../../components/Form"
import FormInput from "../../components/Form/FormInput"

export default function Register() {
  return <div className="">
    <div className="text-center pt-20">Basically chat app</div>
    <Form>
      <FormInput type="text" name="name" text="Name" />
      <FormInput type="email" name="email" text="Email" />
      <FormInput type="password" name="password" text="Password" />
    </Form>
  </div>
}

