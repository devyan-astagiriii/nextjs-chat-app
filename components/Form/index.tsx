interface FormProps {
  children: React.ReactNode
}

const style = {
  container: ``
}

export default function Form({ children }: FormProps) {
  return (
    <div className={style.container}>
      <form className="pt-10 px-5 flex flex-col space-y-6">
        { children }
      </form>
    </div>
  );
}
