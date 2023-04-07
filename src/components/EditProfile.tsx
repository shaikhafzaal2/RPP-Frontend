import React from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  height: 80%;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 16px 6px rgba(0, 0, 0, 0.12);
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 0.6;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  margin-right: 50px;
`;

const RightContainer = styled.div`
  display: flex;
  flex: 0.4;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 0px;
  margin-left: 75px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 15px;
  margin-top: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border: 2px solid #c73e27;
  border-radius: 50%;
  object-fit: cover;
`;
const Label = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  height: 30px;
  width: 135px;
  margin: 10px;
  margin-right: 5px;
  padding: 10px;
  background-color: #c73e27;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
`;

const Select = styled.select`
  width: 120%;
  height: 40px;
  margin-left: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #c73e27;
  border-radius: 6px;
  box-shadow: 0px 3.36px 11.76px rgba(0, 0, 0, 0.1);
`;

const Option = styled.option`
  color: black;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: pre;
  padding: 10px;
  gap: 1px;
`;

const Input = styled.input`
  width: 120%;
  height: 40px;
  margin-left: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #c73e27;
  border-radius: 6px;
  box-shadow: 0px 3.36px 11.76px rgba(0, 0, 0, 0.1);
`;

const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 16px;
`;

const RadioInput = styled.input`
  margin-right: 5px;
  margin-bottom: 8px;
  align-items: center;
  border: 2px solid #c73e27;
  width: 20px;
  height: 20px;
  &:checked {
    &::before {
      content: '';
      display: inline-block;
      color: #c73e27;
      align-items: center;
      border-radius: 50%;
      border: 2px solid #c73e27;
      margin-right: 5px;
    }
  }
`;

const RadioLabel = styled.span``;

type PopupProps = {
  onClose: () => void;
};

export const EditProfile = ({ onClose }: PopupProps) => {
  return (
    <PopupContainer>
      <MainContainer>
        <LeftContainer>
          <Grid>
            <Label>Graduation :</Label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <RadioContainer>
                <RadioInput type="radio" />
                <RadioLabel>UG</RadioLabel>
              </RadioContainer>
              <RadioContainer>
                <RadioInput type="radio" />
                <RadioLabel>PG</RadioLabel>
              </RadioContainer>
            </div>

            <Label>Start Year : </Label>
            <div>
              <Select>
                <Option value="2018">2018</Option>
                <Option value="2019">2019</Option>
                <Option value="2020">2020</Option>
                <Option value="2021">2021</Option>
                <Option value="2022">2022</Option>
              </Select>
            </div>
            <Label>End Year : </Label>
            <div>
              <Select>
                <Option value="2021">2021</Option>
                <Option value="2022">2022</Option>
                <Option value="2023">2023</Option>
                <Option value="2024">2024</Option>
                <Option value="2025">2025</Option>
              </Select>
            </div>
            <Label>Faculty :</Label>
            <div>
              <Select>
                <Option value="fet">FET</Option>
                <Option value="fis">FIS</Option>
              </Select>
            </div>
            <Label>Degree :</Label>
            <div>
              <Select>
                <Option value="MSc">MSc</Option>
                <Option value="PhD">PhD</Option>
                <Option value="BSc">BSc</Option>
                <Option value="MBA">MBA</Option>
                <Option value="CSE">CSE</Option>
              </Select>
            </div>
            <Label>CGPA :</Label>
            <div>
              <Input type="text" placeholder="Enter your CGPA" />
            </div>
            <Label>Phone Number :</Label>
            <Input type="text" placeholder="Enter your phone number" />
          </Grid>
        </LeftContainer>
        <RightContainer>
          <ProfileImage src="" />
          <Button>Update Image</Button>
          <Button>Upload Resume</Button>
        </RightContainer>
      </MainContainer>
      <ButtonContainer>
        <Button>Reset</Button>
        <Button onClick={onClose}>Save</Button>
      </ButtonContainer>
    </PopupContainer>
  );
};
