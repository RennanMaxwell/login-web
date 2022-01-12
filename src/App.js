
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

function App() {

  const handleclickLogin = (value) => console.log(value);
  

  return (
      <div className="container">
        <h1>Olá Caboclo</h1>
      <Formik initialValues={{}}
       onSubmit={handleclickLogin}
       >
         <Form className="login-form">
           <div className="login-form-group">
             <Field name="email" className="form-field"
             placeholder="Email" />

             <ErrorMessage component="span"
             name="email"
             className="form-error" />
           </div>

           <div className="login-form-group">
             <Field name="password" className="form-field"
             placeholder="Senha" />

             <ErrorMessage component="span"
             name="password"
             className="form-error" />
           </div>
           <button className="button" type="submit">Login</button>
         </Form>
        
      </Formik>
    </div>
  );
}

export default App;
