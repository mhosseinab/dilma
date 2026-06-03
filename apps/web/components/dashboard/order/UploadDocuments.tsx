import React, { FC } from "react";
import styled from "styled-components";
import ImageUploaderOrder from "./UploadImage";

interface Props {
  setLevel: (event: number) => void;
}

const UploadDocuments: FC<Props> = ({ setLevel }) => {
  const [depends, setDepends] = React.useState<{
    idCartBack: any;
    idCart: any;
    passport: any;
  }>({
    idCartBack: [],
    idCart: [],
    passport: [],
  });
  const setOrderHandler = (value: any, name: string) => {
    setDepends({ ...depends, [name]: value });
  };

  return (
    <Container>
      <h3>تصویر مدارک خود را بارگذاری کنید!</h3>
      <div className="uploads">
        <ImageUploaderOrder
          title="جلوی کارت ملت"
          image={depends.idCartBack}
          setImage={(e) => setOrderHandler(e, "idCartBack")}
        />
        <ImageUploaderOrder
          title="پشت کارت ملی"
          image={depends.idCart}
          setImage={(e) => setOrderHandler(e, "idCart")}
        />
        <ImageUploaderOrder
          title="پاسپورت"
          image={depends.passport}
          setImage={(e) => setOrderHandler(e, "passport")}
        />
      </div>
      <button onClick={() => setLevel(5)} className="next">
        مرحله بعد
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
  .uploads {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2em;
    flex-wrap: wrap;
  }
`;

export default UploadDocuments;
