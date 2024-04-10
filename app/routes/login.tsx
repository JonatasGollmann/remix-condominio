import { Form, Link } from "@remix-run/react";
import icon from "/DwellIcon.png";

export default function Login() {
  return (
    <div className="  w-screen h-screen bg-gradient-to-tr from-slate-100 to-slate-300 font-outfit flex flex-col items-center justify-center">
      <Link className=" text-custom-b2 h-8 w-8 mb-2 -ml-80 hover:text-custom-b0" to={"/."}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
        </svg>
      </Link>

      <div className="bg-gradient-to-bl to-custom-b0 from-custom-b2  w-96 rounded-lg py-8 px-10 shadow-xl">
        <div>
          <img src={icon} alt="" className="h-10 mx-auto" />
          <h1 className="text-custom-y1 tracking-wider text-2xl font-bold start mt-8">
            Entrar em Dwell
          </h1>
          <p className="text-custom-w1 font-light">
            Não tem conta? 
            <Link to={"/new"} className="ml-2 underline decoration-custom-y1 decoration-2 underline-offset-2 font-bold hover:text-custom-y1 hover:underline-offset-4">
              Cadastrar-se
            </Link>
          </p>
        </div>
        <Form className="mt-10">
          <div className="my-4">
            <label className="block text-custom-w1 text-sm mb-2" htmlFor="login">
              Login:
            </label>
            <input
              className="w-full h-10 rounded-2xl px-6 text-custom-b0"
              placeholder="Insira seu login."
              type="text"
              id="login"
              name="login"
            />
          </div>
          <div className="my-4">
            <label className="block text-custom-w1 text-sm mb-2" htmlFor="userPass">
              Password:
            </label>
            <input
              className="w-full h-10 rounded-2xl px-6 text-custom-b0"
              placeholder="Insira sua senha."
              type="text"
              id="userPass"
              name="userPass"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-10 h-10 bg-custom-y1 text-custom-b0 hover:bg-custom-y2 rounded-lg p-2"
          >
            Entrar
          </button>
        </Form>
      </div>
    </div>
  );
}
