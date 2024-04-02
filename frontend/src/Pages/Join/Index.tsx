import React, { useState } from "react";
import styled from "styled-components";
import "./Index.css";
import { Options } from "./Option";

interface SelectboxProps {
  defaultValue: string;
}

function SelectBox({ defaultValue }: SelectboxProps) {
  return (
    <Select>
      {Options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          selected={defaultValue === option.value ? true : false}
        >
          {option.name}
        </option>
      ))}
    </Select>
  );
}

function Join() {
  //초기값세팅
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");

  //오류메세지 상태값 세팅
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [birthMessage, setBirthMessage] = useState("");

  //유효성 검사 세팅
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isBirth, setIsBirth] = useState(false);

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{1,8}$/;
    if (!idRegExp.test(currentId)) {
      setIdMessage("8자 이하의 대소문자 또는 숫자만 입력해주세요.");
      setIsId(false);
    } else {
      setIdMessage("사용가능한 닉네임 입니다.");
      setIsId(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage("숫자+영문+특수문자 조합 8자리 이상 입력해주세요.");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };

  return (
    <div className='join'>
      <h1>회원가입</h1>
      <form className='joinForm'>
        <div className='inputDiv'>
          <div className='joinDiv'>이용자 이름(닉네임)</div>
          <input
            placeholder='8글자 이내에서 자유롭게 적어주세요.'
            className='joinInput'
            type='text'
            value={id}
          />
          <p className='message'>{idMessage}</p>
        </div>
        <div className='inputDiv'>
          <div className='joinDiv'>비밀번호</div>
          <input
            className='joinInput'
            placeholder='비밀번호를 입력해주세요'
            type='password'
            value={password}
          />
          <p className='message'>{passwordMessage}</p>
        </div>
        <div className='inputDiv'>
          <div className='joinDiv'>비밀번호 확인</div>
          <input
            className='joinInput'
            placeholder='비밀번호를 다시 입력해주세요'
            type='password'
            id='passwordConfirm'
            name='passwordConfirm'
            value={passwordConfirm}
          />
          <p className='message'>{passwordConfirmMessage}</p>
        </div>
        <div className='inputDiv'>
          <div className='joinDiv'>국적</div>
          <SelectBox defaultValue='Korea, Republic of'></SelectBox>
        </div>
        <div className='inputDiv'>
          <div className='joinDiv'>이름</div>
          <input
            className='joinInput'
            type='text'
            id='name'
            name='name'
            value={name}
          />
          <p className='message'>{nameMessage}</p>
        </div>
        <div className='inputDiv'>
          <div className='joinDiv'>휴대폰 번호</div>
          <input
            className='joinInput'
            placeholder='01012341234'
            type='number'
            id='phone'
            name='phone'
            value={phone}
          />
          <p className='message'>{phoneMessage}</p>
        </div>
        <div className='inputDiv'>
          <div className='joinDiv'>이메일 주소</div>
          <input
            className='joinInput'
            placeholder='예: landing@landing.com'
            type='email'
            id='email'
            name='email'
            value={email}
          />
          <p className='message'>{emailMessage}</p>
        </div>
        <div className='inputDiv'>
          <div className='joinDiv'>생년월일</div>
          <input
            className='joinInput'
            placeholder='20240101'
            type='number'
            id='birth'
            name='birth'
            value={birth}
          />
          <p className='message'>{birthMessage}</p>
        </div>
        <div className='inputDiv'>
          <div className='joinDiv'>직업</div>
          <input className='joinInput' type='text' id='job' name='job' />
        </div>
        <div className='joinBtnBox'>
          <button className='joinBtn'>회원가입</button>
        </div>
      </form>
    </div>
  );
}

export default Join;

const Select = styled.select`
  margin-top: 13.5px;
  min-width: 0;
  width: 60%;
  height: 30px;
  display: block;
  border-radius: 5px;
  text-align: center;
  font-size: inherit;
  border: 1px solid;
`;
