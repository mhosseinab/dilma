/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import styled from "styled-components";

interface Props {
  title: string;
  image: [];
  setImage: (event: any) => void;
}

const ImageUploaderOrder: FC<Props> = ({ title, image, setImage }) => {
  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    setImage(imageList as never[]);
  };
  return (
    <Container>
      <ImageUploading value={image} onChange={onChange}>
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image-wrapper">
            {image.length > 0 ? "" : <h4>{title}</h4>}
            {image.length > 0 ? (
              <>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <div className="details">
                      <h4>{title}</h4>
                      <div className="image-item__btn-remove">
                        <button onClick={() => onImageRemove(index)}>
                          حذف عکس
                        </button>
                      </div>
                      {/* <p>{image.file?.name}</p> */}
                    </div>
                    <img
                      onClick={onImageUpload}
                      {...dragProps}
                      src={image.dataURL}
                      alt=""
                    />
                  </div>
                ))}
              </>
            ) : (
              <>
                <button
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  افزودن
                </button>
              </>
            )}
          </div>
        )}
      </ImageUploading>
    </Container>
  );
};

const Container = styled.div`
  margin: 2em 0;
  * {
    font-weight: 300;
    font-size: 12px;
  }
  .upload__image-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 220px;
    gap: 4em;
    h4 {
      white-space: nowrap;
    }
    button {
      background: #e7e7e7;
      border-radius: 5px;
      height: 63px;
      min-width: 106px;
    }
  }
  .image-item {
    display: flex;
    align-items: center;
    gap: 2em;
    button {
      /* border: 0.25px solid #000000;
      border-radius: 5px;
      width: fit-content;
      height: fit-content;
      padding: 0.5em 1em; */
    }
    .details {
      max-width: 90px;
      display: flex;
      flex-direction: column;
      gap: 1em;
      p {
        max-width: 80px;
        white-space: nowrap;
      }
    }
    .image-item__btn-remove {
      button {
        width: 71px;
        height: 25px;
        border: 0.25px solid #000000;
        border-radius: 5px;
        background: #fff;
        /* padding: 0.4em 0; */
      }
    }
    img {
      border-radius: 5px;
      cursor: pointer;
      height: 63px;
      width: 106px;
      &:hover {
        box-shadow: 0px 0px 10px 5px rgba(185, 185, 185, 0.3);
      }
    }
  }
`;

export default ImageUploaderOrder;
