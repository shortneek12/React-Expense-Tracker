import React from "react";
import { Form } from "react-router-dom";

//assets
import illustration from "../assets/illustration.jpg"

//library
import { UserPlusIcon } from "@heroicons/react/24/solid";
const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent"> Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret of finacial freedom. Start your
          journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="Enter your name"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20}/>
          </button>
        </Form>
      </div>
      <img src={illustration} alt="illustration" />
    </div>
  );
};

export default Intro;
