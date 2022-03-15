import React, { FC } from "react";

interface IProps {
  name: string;
  age: number;
}

const Person: FC<IProps> = ({ name, age }) => {
  return (
    <div>
      <p>
        Name : {name} , Age : {age}
      </p>
    </div>
  );
};

export default Person;
