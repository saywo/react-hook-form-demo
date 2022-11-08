import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

export const FieldArray = () => {
  const { control, register } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "test", // unique name for your Field Array
    }
  );

  console.log({ fields });

  const addItem = () => {
    append({ test: "test" });
  };

  const moveToNext = (from: number, to: number, isLast: boolean) => {
    if (isLast) {
      console.log("最後です");
      return false;
    }
    move(from, to);
  };

  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            key={field.id} // important to include key with field's id
            {...register(`test.${index}.value`)}
          />
          <button
            onClick={() =>
              moveToNext(index, index + 1, fields.length === index + 1)
            }
          >
            GoToNext
          </button>
        </div>
      ))}
      <button onClick={addItem}>add item</button>
    </>
  );
};
