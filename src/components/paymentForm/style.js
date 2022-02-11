import styled from "styled-components/macro";

//  Container, Pair, Group, Input
export const Container = styled.form`
  padding: 20px;
  border: solid 1px #eaeaea;
  border-radius: 4px;
  background: #fbfbfb;
`;

export const Error = styled.p`
  font-size: 13px;
    border-radius: 2px;
    margin-bottom: 20px;
    text-align: center;
    clear: both;
    color: #F20000;
`;

export const Group = styled.div`
  margin-bottom: 10px;
  position: relative;
  ${({ type }) => type === "select" && "position: relative"};
  ${({ type }) =>
    type === "submit" &&
    `margin: 30px 0 5px; text-align: center;
  `}
  p {
    font: inherit;
    font-size: 12px;
    text-align: right;
    margin: 2px 5px;
  }
`;
export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  background: white;
  display: block;
  ${'' /* ${({ banks }) => !banks && " height: 35px"}; */}
  height: 35px;
  font-size: 14px;
  width: 100%;
  line-height: 35px;
  padding: 0 10px;
  border: solid 1px #cccccc;
  border-radius: 2px;
  font-family: inherit;
  outline: none;
  margin: 0;
  text-transform: none;

  :after {
    position: absolute;
    content: "";
    bottom: 15px;
    right: 15px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 4px 0 4px;
    border-color: #909090 transparent;
    z-index: 2;
  }
`;
export const NumberInput = styled.input`
  display: block;
  height: 35px;
  font-size: 14px;
  width: 100%;
  line-height: 35px;
  padding: 0 10px;
  border: solid 1px #cccccc;
  border-radius: 2px;
  outline: none;
  margin: 0;
  font: inherit;
  color: inherit;
  -webkit-appearance: none!important;
  -mox-appearance: textfield;

  ::-webkit-outer-spin-button, 
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Pair = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-left: -5px;
  margin-right: -5px;

  ${Group} {
    margin: 0;
  }

  > ${Group} {
    flex: 1 1 auto;
    padding: 0 5px;
  }
`;
export const Button = styled.button`
      color: white;
    border: none;
    border-radius: 4px;
    color: white;
    background-color: #3bb75e;
    border-color: #3bb75e;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: 12px;
    font-weight: bold;
    height: 35px;
    line-height: 33px;
    outline: none;
    padding-left: 1.5em;
    padding-right: 1.5em;
    position: relative;
    text-decoration: none;
    -webkit-appearance: button;
    appearance: button;
    text-transform: none;
    overflow: visible;
`;
export const Label = styled.label`
  font-size: 13px;
  font-weight: bold;
  line-height: 2.5em;
`;

export const Input = styled.input`
  display: block;
  height: 35px;
  font-size: 14px;
  width: 100%;
  line-height: 35px;
  padding: 0 10px;
  border: solid 1px #cccccc;
  border-radius: 2px;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  font: inherit;
  color: inherit;
`;
