import React, { FC } from "react";

interface IProps {
  name: string;
  description : string;
  pages: number;
}

const Book: FC<IProps> = ({ name, pages , description }) => {
  return (
    <div>
      <p>
        Name : {name} , Description : {description} , Age : {pages}
      </p>
    </div>
  );
};

export default Book;
