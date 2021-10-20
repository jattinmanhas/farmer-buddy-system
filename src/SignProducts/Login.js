import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div className="login__background">
        <img
          src="https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAACkCAMAAAAuTiJaAAAAilBMVEX///8AAADa2try8vIqKiqxsbFpaWlPT08JCQnt7e38/PzHx8fk5OT6+vptbW2/v7+5ubmrq6tZWVlFRUXR0dFgYGBAQEB3d3fX19eAgIBycnKbm5uLi4uVlZXm5ubv7++ioqIbGxszMzMVFRWOjo4xMTFCQkIiIiJcXFyXl5c6OjoaGhpTU1NKSkooGf5DAAAMmUlEQVR4nO1d6WKqOhBGXFpXtHXHtnhqa9vbvv/rXYGZrDMR9FTEk++XQgjkI5ktkxAEHh4eHsXwEk7H4zhONovFJonj8Xg5GFb9TNeL3rK9+dg3SLRmu3FY9QNeGwbjxZamS8V8E/lOB+ivGuvjjGV4fHyLfY8L+ouUjPG0EGfbIC39+vRc9VNXieYTsNEPkiKkNYMd9Lhx1Y9eFQYjwcZhyHWOczYIgon4k/yL4i381ukIWsc4iw6Fxsr/XdVNuDRe9I7VOxxqHuEs46ivHZpU3IrL4skgJCUtcCuD7+zCpX5wv6y0GZfE8tVkJD/uUgaveZGBeXxdXTMuipVNCZyZ8aQN8hIv9plpZQ25HLqEwN/jya1yMFHFHkqvHsHnU0UtuRwiqhv94NlntfcpMm6GBSjSGne9atpyKZgaIMejOC9Nio3S715lBeT1B6v3hsFYsO+yxFrhQSgGxd2kK0CRd4u4Y5qsqsC9PIRjMVZOMzUcHLEbxSPXYpW0Z6XrZM5840utg6viVlljOdONrXZ6JFcNYXZWE1h//i3WHB65bqF+SAZSivSABs/8Lco1wqRlSDsMwXv4deh1Hf2cg7Tb06ETR2NN0paNT/wJbqmEi7TX4LZAOeMxR1qw6OKvkSmpJGnfdo0Pv9+QC2JIdYznLrab97qtEYekbUgZGVN11BXvFGkT4VSVCFXkpD0cuqIVKklxQ6GimGpfTtXuBNJaaWCD7LxCg9Qfz2T7QG6/PJQlLY94LOlKF7/RgCrw9dp+oBoIAqtvmhUutEYwoUKp4/06uZUBOsnmRAaTkdlGoRlLTMgJC3ZhVPa2iV6CYNP47+8+fEXIhE9ubQ0SLTb7eeRKJ9Ssj/tVlPfabuNGNGjmCozE3+lOhG7PMaukHvhOpP/0rYz6OgO0gBrJf0ERd0a1YC0vItVjyCf4VmdUeyUAG9S0BaL0+Bk5GZ8pO+acyn1+r9qneghzw7YFoo/26fV+re1Q0AZuNSLK1wrS2fn1FCk5J1rzrqbMU25/+15ybrDmUk2Nom1+91bqRFe95/RUs6zkAB3M7yz88BPDWsJCrW21tkZauSBh2CDA99b/1GK19tuNaZBSsoYkje1CRjS9xrMsVo5PmbaUIq1vlCsRArg2bKxGl8j5JEljLDs7IbC+quDeastH8YtJ0iK67E9Rdq8fVLOLN4YkjVbAO7vg3d9qxKVhj85GCWudJI2MYJB5p3Udn+RCp/3x63KQpFEF6Qznmq40YKYGikbxKdLeqYJv5G1qmozbJhtTWKxRpFGEc4m6f7UtF4M+J9D6XsWT/jJsDguaHUXVSHMYLvuT3XpulK1nPswJvUsFRZrbe20u1fdUy5UZukgrzxpF2pFLNDVaS6dgrLe39IsnSDvCgyFET33wKmEmpJVN9ydIc5sR5vRxHeO3pmAuawQQpDkNVsstYFyuq4bd5nKujU3azFXcmr+v40qWrk1ao/VSogKbNEdgqWf16yMcXyfMCFeOEukpFmmOwC/pfNQwm5RZh1h8nsAijde/jO9RP5+dCHHsd2WWGVqkucp+UusL6ucTmC7hV1KyDSZpRwy9pp0DV7+Jgi+dse7xKwwYpBUJKfX1TVHqF71VmpucZGYapBVUIX3Fpq6dzSFWs25OlSw6aSVm/0R/q13+bU7a7AyxopHWKnftOMucr1320MFyek3OyknUSCtjFef33xhrHuuAcH6u7lJJO2lHhPZtrfopBIW0Orre1UCSVtOJpSoQnjU2/1EAaa91jCVWhpy0Wkb6q0PoVUB5hL+epVsWz0kYhAdpccWBgOWitEX7u+ith6twtQheajnPVRUekm6wWQVJ7XzaCtE7dP7pZtqPr0xqXDUGs2AarYL5tOZrOy6L5W58UALRNSsCDw8PD4/LoMvhrFh1U8dvbk7eZGEV7Q01FJ2BD9tPq9VTeyrLNzgwinXWuD/g2EyPVdvHxP0S/uTVknMh4/wcMyP3wTXATu2yNkCZ747ODHaVVIF5DHEqeykOgK5DJO27XxO15fvIRRsWoiaVYd6ZeU/sDoA2H1TOR8sdSDFTE+dZGJkjjfEVPvG8O0uA3iffEbfGIoS1jSFcZp6EI41IGqITZRzzL8/E1lnpbvUcaUx6jzjvnolkPi7ALteUq05s8YfpesyMHEcaMZqZ7KItJ3LJtTBJwJLGJHcpWWdOacB9kYEbC3JlqLWXjnxy+lKONGJmn1sOMmeeisgUzDNEGNIYqavkAjlVAZC2X6xTKPk8jChUktnNUzF7JgdDGrU5A5I2y55qtBWFE7JmmWI3Xy+EvkllTKldU7T+6lIFQJrIshV6i9mUSdkH3RSW8gytSDp4WU8DVRRJw04Yih0mqdIiHQU+5zLI92NIB0sp0rQt91yqwCRNpOAyS/IVY8AQDAqddCpN5/jTIJA0Ka8xV4YSGxP7XPSYzyjeux7IhDaW3xwFLdKENKTfjvo29AYocoWeAD2LNFxeSckaWK6sa7ywU5Y0I/nYkT9rk4Y3olWBag5pWlLN6KAtlvNIg+70hygNhamQYxnSQA3giHGoAiDtWzkEjUvI8po0V3uUmtvovLQMaUpjcWtJonTDfvGIEqShGhBJyLwqIEiDzkSbatpOv4q1qe0xSn8o6jzS0NYhSuNtCX+yBGkgeDYibZ9PaiVIm7m6i27XyYfRNA+9Tug80tDWIUoL88oWCyVIA5/iWchIShLkaFl9Bl8cLdM0zhR24MC99QokOsdeoARBGmzrRPk3UoI/to0xBaQVyL6Gl5J+KgClGqsKbNLQUqRngPNzHUwJR4sM7rPbOt4RkDafqXggYzQ2aTj8yQkm1SEYaaobSLt7UPFDNa2jdBWoilUFFmm4+pNeVAbScoGlUHqB8TmE6shraY+A7HgWaUNcs0H6hMZHqmJpXNNuFNHxhBpIsVP/EIBWwpquYV8IerpvgjjeiGGqHe7g3t/ktSeQBrbiQIRs6IFv7do8QrYLk5Zgw1IcUwWcw858KRFGfiwiT0l2eIFEwxdtyKF9AmkWuEiftdf1rFuOtG1+Bt4SNINTBQxp3HAG2TWRJkZ6FP7cCWLIbvoXSOO14LO1gUVchjToDPhdrCOqgCaNNQvALo/k7tKpmoe+PRUmLindzybty5md1EyMQOQ3S5rtIXZkYzJAQSavgQx38w8XC1Jw3LfEo6WdeWXcnHiwVTRWQXYekrTjtspUfy8zQdokUjG2Ypk4bsQBtyogSHNZgkBK2m0x9tZHOynV1mBNJdS1J9hpCoqlpzZjtbuFRUNDMFSkIEdlSj8skNaaJBNkgQuPphjJh0AT/Qcs6CyYKHwRAid4BJtJIlyNomud+1K6xUU9gm1ebL3bAJ5g50o6ct+SRIlYnmNTeLBIMiWGptNYeSnQWnKC7wTSUqLEzFyB63I0cWu7WUHSHJ/GJa9USJNhRD6UpBqvxiYo6jHSnDqBtMy6x43KSuSPwxX7gqTZGzgIkKpAJU3oN34jVe2la7Un2SEQb+QM2KmkiUhd8QUxGPUrRhr9FRitqTo00sQAZbcz0ThJ7ModsYiTSZO7nxROiEZBWIw01yeYSVWgkSbjBcwMHigVsAHVr8WC4sFeQQXwTiZNqHhWRZmxP5CD78VIIzcqRFD31EnTPnVKAHxM3H1EyZ6A8mi9UbGY00kTk62Mioobe92chvjBphBp6IJF2jSZMKmIaw3ShJz6sYsG8jMW8FdGF8wjlCo5wU7DMI/YI51UUdmbUpatvqDRsSxEGnYU4zDqOUIVmKQJ7ZtQ9Uf4BgHCAkfrEUcs5UdB4bdHHZTSMEkT20mSKgqDe6toMBwOxsJOey8UuWUjdViNfYlJmvxiEXUjaIwQISjC5G5BDb47cWkJ/H0kaWK7HUJFsXJ8UIg0nDW1jGfsgbbStkgTPi61vwZoJSmWQHjIUdMwaFVwDmlyDsJSUazBEAeFSAMG7JwY1Ir2Tqo2aWKAEuGhlfngecWKAISnpPyos0iTe65YKuqZ/Ophrs+Pk4ZqgNAxWJN1tU2anA+2BdPIasvW+A/1Udb7eaSJHcsIFRXZYYc/odpuB2k4CAmfHomwpB3YKJpjKgIFVggFnDpFh6XNU9MeYLw+mlcGpfa5JUiToosa+n298jmOBS4WJNBrtDJQjl84G2WwesAiP6yRuXyHb35YFH/PU7RUK2y00L5x9LTIQLls07wFfQOUHd3vZI810yyMDnyK5IuckOtFq3yYvs5O2/3n38Wvpqd7eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4XAz/AysjkNcLnVq0AAAAAElFTkSuQmCC"
          />
        </Link>

        <div className="login__container">
          <h1>Sign-in</h1>

          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              onClick={signIn}
              className="login__signInButton"
            >
              Sign In
            </button>
          </form>
          <h5 style={{ padding: "0.6em" }}>
            {" "}
            <strong>If you don't have an account then click on: </strong>{" "}
          </h5>
          <button onClick={register} className="login__registerButton">
            Create your FBS Account
          </button>

          <p>
            By signing-in you agree to the FARMER BUDDY SYSTEM Conditions of Use
            & Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
