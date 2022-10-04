import { Checkbox, FormControlLabel } from "@mui/material";
import React, { FC } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "redux/ActionCreators";

interface Props {
  doc: any;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const TableColumns: FC<Props> = ({ doc }) => {
  const { documents, order } = useSelector((state: RootStateOrAny) => state);

  const [fingerPrint, setFingerPrint] = React.useState({
    title: [],
    show: false,
  });
  const [pageCount, setPageCount] = React.useState(1);
  const [docCount, setDocCount] = React.useState(1);

  const dispatch = useDispatch();

  const { setOrderDetails } = bindActionCreators(ActionCreators, dispatch);

  const setOrderHandler = (value: any, type?: string) => {
    const index = documents.findIndex((item: any) => item.id === value.id);
    console.log(value);
    console.log(index);
    setOrderDetails({
      name: type ? "finger" : "doc",
      data: {
        title: value?.title,
        price: value?.price,
        id: value?.id,
        docCount: docCount,
        pageCount: pageCount,
        stamps: {
          stamp_mfa: {
            price: value.stamp_mfa_price,
            checked:
              type === "mfa"
                ? !documents[index].stamps.stamp_mfa.checked
                : documents[index].stamps.stamp_mfa.checked,
          },
          stamp_moj: {
            price: value.stamp_moj_price,
            checked:
              type === "moj"
                ? !documents[index].stamps.stamp_moj.checked
                : documents[index].stamps.stamp_moj.checked,
          },
        },
      },
    });
  };

  const counterHandler = (name: string, value: any) => {
    if (name === "pageP") {
      setPageCount(pageCount + 1);
    }
    if (name == "pageM") {
      if (pageCount == 1) {
        return;
      }
      setPageCount(pageCount - 1);
    }
    if (name === "countP") {
      setDocCount(docCount + 1);
    }
    if (name == "countM") {
      if (docCount == 1) {
        return;
      }
      setDocCount(docCount - 1);
    }
  };
  return (
    <div className="column" key={doc.id}>
      <tr key={doc.id}>
        <td className="delete">
          <svg
            onClick={() => setOrderHandler(doc)}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 4H20V6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6H0V4H5V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4ZM16 6H4V18H16V6ZM7 9H9V15H7V9ZM11 9H13V15H11V9ZM7 2V4H13V2H7Z"
              fill="#FF0000"
            />
          </svg>
        </td>
        <td>{doc.title}</td>
        <td>
          <button onClick={() => counterHandler("pageP", doc)}>+</button>
          {pageCount} عدد
          <button onClick={() => counterHandler("pageM", doc)}>-</button>
        </td>
        <td>{order.recivingType.length > 0 ? order.recivingType : "-"}</td>
        <td>
          <button onClick={() => counterHandler("countP", doc)}>+</button>
          {docCount} عدد
          <button onClick={() => counterHandler("countM", doc)}>-</button>
        </td>
        <td>-</td>
        <td>{doc.price}</td>
        <td>
          <Checkbox
            color="default"
            {...label}
            onChange={() =>
              setFingerPrint({ title: doc.title, show: !fingerPrint.show })
            }
          />
        </td>
      </tr>
      {fingerPrint.title === doc.title && fingerPrint.show && (
        <tr className="finger">
          <td className="stamps">
            <div className="stamp">
              <FormControlLabel
                id="mfa"
                control={
                  <Checkbox
                    onClick={() => setOrderHandler(doc, "mfa")}
                    color="default"
                  />
                }
                label={`مهر دادگستری | ${doc.stamps.stamp_mfa.price} تومان`}
              />
            </div>
            <div className="stamp">
              <FormControlLabel
                id="moj"
                control={
                  <Checkbox
                    onClick={() => setOrderHandler(doc, "moj")}
                    color="default"
                  />
                }
                label={`مهر وزارت خارجه | ${doc.stamps.stamp_moj.price} تومان`}
              />
            </div>
          </td>
        </tr>
      )}
    </div>
  );
};

export default TableColumns;
