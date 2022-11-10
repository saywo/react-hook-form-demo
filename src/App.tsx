import React from "react";
import { useForm, Controller } from "react-hook-form";
import { InputWithoutRefForwarding } from "./InputWithoutRefForwarding";
import { InputWithRefForwarding } from "./InputWithRefForwarding";
import { FieldArray } from "./FieldArray";

const App = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isDirty, dirtyFields },
  } = useForm({
    defaultValues: {
      name: "suehiro",
      country: "japan",
      email: "john@test.com",
      password: "pass",
    },
    criteriaMode: "all",
    mode: "onBlur",
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    console.log({ data });
  };

  return (
    <div className="App">
      <h1>react-hook-form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2>InputWithRefForwarding</h2>
          <InputWithRefForwarding {...register("name")} />
        </div>
        <div style={{ padding: "20px 0" }}>
          <h2>InputWithoutRefForwarding</h2>
          <div>
            <h3>Controller</h3>
            <Controller
              control={control}
              name="country"
              render={({ field }) => <InputWithoutRefForwarding {...field} />}
            />
          </div>
          <div>
            <h3>Controllerを使わなかった場合（defaultValueが通らない）</h3>
            <InputWithoutRefForwarding {...register("country")} />
          </div>
        </div>
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
