"use strict";

const Env = use('Env');

/*
|--------------------------------------------------------------------------
| Adonis Auth Scaffold
|--------------------------------------------------------------------------
|
| Adonis Auth Scaffold is a CLI utility that gives you a functional authentication
| system in Adonis.js within seconds.
|
*/

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Registration Route
  |--------------------------------------------------------------------------
  |
  | Specifies the route to handle registration GET and POST requests.
  |
  */
  registrationRoute: "/register",

  /*
  |--------------------------------------------------------------------------
  | Registration Success Redirect Route
  |--------------------------------------------------------------------------
  |
  | Specifies the route to redirect the user to upon successful registration.
  | Leave empty if you do not want any redirects.
  |
  */
  registrationSuccessRedirectTo: "/dashboard",

  /*
  |--------------------------------------------------------------------------
  | Login Route
  |--------------------------------------------------------------------------
  |
  | Specifies the route to handle login GET and POST requests.
  |
  */
  loginRoute: "/login",

  /*
  |--------------------------------------------------------------------------
  | Password Reset Route
  |--------------------------------------------------------------------------
  |
  | Specifies the route to handle password reset GET and POST requests.
  |
  */
  passwordResetRoute: "/password/reset",

  /*
  |--------------------------------------------------------------------------
  | Logout Route
  |--------------------------------------------------------------------------
  |
  | Specifies the route to handle logout GET and POST requests.
  |
  */
  logoutRoute: "/logout",

  /*
  |--------------------------------------------------------------------------
  | App URL
  |--------------------------------------------------------------------------
  |
  | Specifies the URL for the app.
  |
  */
  appURL: Env.get('APP_URL'),

  /*
  |--------------------------------------------------------------------------
  | Registration Rules
  |--------------------------------------------------------------------------
  |
  | An object of validation rules to be used when running validation.
  |
  */
  validationRules: {
    registration: {
      email: "required|email",
      name: "required|min:3",
      password: "required",
      password_confirmation: "required|same:password"
    }
  },

  /*
  |--------------------------------------------------------------------------
  | Validation messages
  |--------------------------------------------------------------------------
  |
  | An object of validation messages to be used when validation fails.
  |
  */
  validationMessages: action => {
    return {
      "uid.required": "Preencha o email ou nome de usuario!.",
      "name.required": "O nome é obrigatorio!",
      "name.min": "O campo nome deve ter ao menos 3 caracteres!",
      "email.required": "O Email é obrigatorio!",
      "email.email": "Use um endereço de Email valido!",
      "password.required": "Informe uma senha!",
      "password.mis_match": "Senha invalida!",
      "password_confirmation.same": `Confirme a senha corretamente!`
    };
  }
};
