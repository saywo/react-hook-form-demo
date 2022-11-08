import React from "react";
import { useForm } from "react-hook-form";
import { FieldArray } from "./FieldArray";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, dirtyFields },
  } = useForm({
    defaultValues: { email: "john@test.com", password: "pass" },
    criteriaMode: "all",
    mode: "onBlur",
    reValidateMode: "onSubmit",
  });
  console.log({ errors });
  console.log({ isDirty });
  console.log({ dirtyFields });

  const onSubmit = (data: any) => {
    console.log({ data });
  };

  return (
    <div className="App">
      <h1>react-hook-form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "入力が必須の項目です。",
              },
            })}
          />
          {errors.email && <div>入力が必須の項目です</div>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "入力が必須の項目です。",
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "アルファベットのみ入力してください。",
              },
              minLength: {
                value: 8,
                message: "8文字以上入力してください。",
              },
            })}
            type="password"
          />
          {errors.password?.type === "required" && (
            <div>入力が必須の項目です。</div>
          )}
          {errors.password?.types?.pattern && (
            <div>{errors.password.types.pattern}</div>
          )}
          {errors.password?.types?.minLength && (
            <div>8文字以上入力してください。</div>
          )}
        </div>
        <button type="submit">ログイン</button>
      </form>
      <FieldArray />
    </div>
  );
};

export default App;
