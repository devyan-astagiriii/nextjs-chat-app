interface FormInputProps {
  type: string,
  name: string,
  text?: string
}

export default function FormInput({ type, name, text }: FormInputProps) {
  return (
    <div className="">
      <input
        type={type}
        name={name}
        placeholder={text}
        className="outline-none border-2 rounded-md px-4 py-2 focus:border-blue-800 transition-all duration-500"
      />
    </div>
  );
}
