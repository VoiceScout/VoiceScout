import React, { Dispatch, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { $ } from "util/axios";
import { v4 as uuidv4 } from "uuid";
import style from "./CreateModal.module.css";
import Acquaintance from "img/type_acquaintance.png";
import Agency from "img/type_agency.png";
import Loans from "img/type_loans.png";

interface modal_type {
  setIsModal: Dispatch<boolean>;
}

export default function CreateModal({ setIsModal }: modal_type) {
  const navigate = useNavigate();
  const roomLink = uuidv4();

  const [title, setTitle] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [typeId, setType] = useState<number>(0);
  const [locked, setLocked] = useState<boolean>(false);

  interface newData_type {
    title: string;
    password: string;
    typeId: number;
    link: string;
    participant: number;
    locked: boolean;
  }

  const newData: newData_type = {
    title: title,
    password: password,
    typeId: typeId,
    link: roomLink,
    participant: 1,
    locked: locked,
  };

  const onTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const res_post = () => $.post(`/rooms`, newData);
  const { mutate: onCreate } = useMutation(res_post, {
    onSuccess: (data) => {
      // 방 생성관련 API 통신 성공 시 해당 방에 대한 데이터를 불러와서
      //navigate를 통해 state 데이터 전송하는 코드
      navigate(`/simulation-room/${data.data.link}`, {
        state: {
          seq: data.data.seq,
          title: data.data.title,
          password: data.data.password,
          typeId: data.data.typeId,
          link: data.data.link,
          participant: data.data.participant,
          locked: data.data.locked,
          userType: 0,
        },
      });
      window.location.replace(`/simulation-room/${data.data.link}`);
    },

    onError: (err) => {
      Swal.fire({
        icon: "error",
        title: "",
        text: "실패했습니다.",
        confirmButtonText: "닫기",
      });
      console.log(err);
    },
  });

  const isValid = () => {
    // 유효성 검사
    if (
      !(typeof title === "string" && title.length >= 2 && title.length <= 15)
    ) {
      alert("방제는 2자 이상 15자 이하로 작성해야 합니다.");
      return;
    }
    if (
      locked &&
      !(
        typeof password === "string" &&
        password.length >= 2 &&
        title.length <= 10
      )
    ) {
      alert("비밀번호는 2자 이상 10자 이하로 작성해야 합니다.");
      return;
    }
    if (typeof typeId !== "number") {
      alert("방의 유형을 선택해야 합니다.");
      return;
    }
    onCreate();
  };

  return (
    <div className={style.container}>
      <div className={style.modal_header}>방 설정 변경</div>
      <div className={style.modal_contents}>
        <div className={style.title}>
          <input
            type="text"
            name="title"
            placeholder="방 제목"
            value={title}
            onChange={(e) => {
              onTitle(e);
            }}
          />
          <div className={style.title_check}>2~15자로 작성해주세요.</div>
        </div>
        <div className={style.passwd_grid}>
          <div></div>
          <input
            type="checkbox"
            checked={locked}
            onChange={() => setLocked(!locked)}
          />
          <p>비공개</p>
          <div>
            <input
              className={!locked ? style.locked : style.unlocked}
              type="password"
              name="password"
              placeholder="비밀번호"
              value={password}
              disabled={!locked ? true : false}
              onChange={(e) => onPassword(e)}
            />
            {locked ? (
              <span className={style.passwd_check}>
                2 ~ 10자로 입력해주세요
              </span>
            ) : (
              <span> &nbsp;</span>
            )}
          </div>
        </div>
        <div className={style.room_type}>
          <div>
            <img
              className={typeId === 0 ? style.img_selected : style.img}
              src={Loans}
              alt=""
              onClick={() => setType(0)}
            />
            <p>대출 사칭형</p>
          </div>
          <div>
            <img
              className={typeId === 1 ? style.img_selected : style.img}
              src={Agency}
              alt=""
              onClick={() => setType(1)}
            />
            <p>기관 사칭형</p>
          </div>
          <div>
            <img
              className={typeId === 2 ? style.img_selected : style.img}
              src={Acquaintance}
              alt=""
              onClick={() => setType(2)}
            />
            <p>지인 사칭형</p>
          </div>
        </div>
        <div className={style.btn_div}>
          <button
            onClick={() => {
              isValid();
              setIsModal(false);
            }}
          >
            생성
          </button>
          <button
            onClick={() => {
              setIsModal(false);
            }}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
