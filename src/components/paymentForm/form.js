import React, { useState } from "react";
import {
  Container,
  Pair,
  Group,
  Input,
  NumberInput,
  Select,
  Button,
  Error,
  Label,
} from "./style";

// import { Select as BankSelect, MenuItem, InputLabel } from "@mui/material";

export default function PaymentForm() {
  const [isError, setIsError] = useState(false);
  const [amountError, setAmountError] = useState(false);

  const handleAmountChange = ({ target }) => {
    target.value > 100
      ? target.value > 1000000
        ? setAmountError(true)
        : setAmountError(false)
      : setAmountError(true);
  };

  return (
    <Container>
      {isError && <Error></Error>}
      {/* <Pair>
        <Group>
          <Label htmlFor="firstname">First Name</Label>
          <Input type="text" id="firstname" required />
        </Group>
        <Group>
          <Label htmlFor="lastname">Last Name</Label>
          <Input type="text" id="lastname" required />
        </Group>
      </Pair>
      <Group>
        <Label htmlFor="email">Email Address</Label>
        <Input type="email" id="email" />
      </Group> */}
      <Group>
        <Label>Select Bank</Label>
        <Select
          id="demo-simple-select"
          // style={{height: "20px"}}
        >
          <option value="">...</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
          <option value={10}>Zenith Bank (234)</option>
        </Select>
      </Group>
      <Group>
        <Label>Account Number</Label>
        <NumberInput type="number" id="account-number" required/>
        <p>John Mccauley</p>
      </Group>
      <Group>
        <Label>Amount to transfer</Label>
        <Pair>
          <Group type="select">
            <Select id="payment-currency-options">
              <option value="NGN">NGN</option>
              <option value="USD">USD</option>
            </Select>
          </Group>
          <Group>
            <NumberInput
              type="number"
              id="payment-amount"
              required
              onChange={handleAmountChange}
            />
            {amountError && (
              <Error>Amount should be between 100 and 1,000,000</Error>
            )}
          </Group>
        </Pair>
      </Group>
      <Group type="submit">
        <Button>Pay Now</Button>
      </Group>
    </Container>
  );
}
