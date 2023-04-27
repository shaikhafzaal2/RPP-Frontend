import { uploadProfileRequest } from 'actions';
import { useAppSelector } from 'modules/hooks';

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectFilter, selectProfile, selectUser } from 'selectors';
import styled from 'styled-components';
import { Profile } from 'types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';


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
  width: 130%;
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
  width: 130%;
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

  const dispatch = useDispatch();
  const [startYears, setStartYears] = useState<number []| null>(null);
  const [endYears, setEndYears] = useState<number []| null>(null);
  const currentYear = new Date().getFullYear();
  const startYearsArray = Array.from({ length: 10 }, (_, i) => currentYear - i);
  const endYearsArray = Array.from({ length: 10 }, (_, i) => currentYear + i);
  const filterdata = useAppSelector(selectFilter).infoFilters;
  const userdata = useAppSelector(selectUser).user;
  const profiledata = useAppSelector(selectProfile);
  
console.log()
  const [profile, setProfile] = useState<Profile>({
    homeAccountId: userdata.account.homeAccountId,
    name:  userdata.account.name,
    profilePic:profiledata.profiles.profilePic,
    email:  userdata.account.username,
    degree:  profiledata.profiles.degree?profiledata.profiles.faculty:filterdata.degrees[0]['name'],
    faculty:  profiledata.profiles.faculty?profiledata.profiles.faculty:filterdata.faculties[0]['name'],
    phoneNumber: profiledata.profiles.phoneNumber,
    stream: profiledata.profiles.stream?profiledata.profiles.faculty:filterdata.departments[0]['name'],
    cgpa: profiledata.profiles.cgpa,
    resume: profiledata.profiles.resume,
    startYear: profiledata.profiles.startYear?profiledata.profiles.startYear:currentYear,
    endYear: profiledata.profiles.endYear?profiledata.profiles.endYear:currentYear,
    programme:profiledata.profiles.programme,
  });

  const [image, setImage] = useState<File | null>(null);
  const [pdf, setPdf] = useState<File | null>(null);


  useEffect(() => {
    setStartYears(startYearsArray);
    setEndYears(endYearsArray);
  }, []);
  useEffect(() => {
    let objectUrl: string | null = null;
    if (image) {
      objectUrl = URL.createObjectURL(image);
    }
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [image]);

  console.log("The years are"+startYears);
  console.log("The years are"+endYears);

  




  


    const imageInputRef = useRef<HTMLInputElement>(null);
    const pdfInputRef = useRef<HTMLInputElement>(null);
  
    const handleImageButtonClick = () => {
      if (imageInputRef.current) {
        imageInputRef.current.click();
      }
    };
  
    const handlePdfButtonClick = () => {
      if (pdfInputRef.current) {
        pdfInputRef.current.click();
      }
    };

    const handleInputChange = (event: any) => {
      const { name, value } = event.target;
      setProfile((prevState: any) => ({
        ...prevState,
        [name]: value,
      }));
    };

    

    const handleSubmit = () => {
      // event.preventDefault();
      dispatch(uploadProfileRequest({ profile, image, pdf }));
    };
  
  

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handlePdfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setPdf(event.target.files[0]);
    }
  };

  return (
    <PopupContainer>
      <MainContainer>
        <LeftContainer>
          <Grid>
            <Label>Graduation :</Label>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <RadioContainer>
                <RadioInput defaultChecked={true} required={true}  type="radio" name='programme' value={'UG'} onChange={handleInputChange}/>
                <RadioLabel>UG</RadioLabel>
              {/* </RadioContainer>
              <RadioContainer> */}
                <RadioInput type="radio" name='programme' value={'PG'} onChange={handleInputChange}/>
                <RadioLabel>PG</RadioLabel>
              </RadioContainer>
            </div>

            <Label>Start Year : </Label>
            <div>
              <Select name='startYear' required={true} value={profile.startYear} onChange={(e)=>handleInputChange(e)}>

              {startYears?.map(year => (         
                  <Option key={year} value={year}>{year} </Option>
              ))}       
              
              </Select>
            </div>
            <Label>End Year : </Label>
            <div>
              <Select name='endYear' required={true} value={profile.endYear}  onChange={(e)=>handleInputChange(e)}>
              {endYears?.map(year => (         
                  <Option key={year} value={year.toString()}>{year}</Option>
              ))}     
         
              </Select>
            </div>
            <Label>Faculty :</Label>
            <div>
              <Select name='faculty' required={true} defaultValue={profile.faculty} onChange={(e)=>handleInputChange(e)}>
              {filterdata.faculties?.map(faculty => (  
                 
                 <Option key={faculty['keyword']} value={faculty['name']}>{faculty['keyword']}</Option>
              ))}     
                {/* <Option value="fet">FET</Option>
                <Option value="fis">FIS</Option> */}
              </Select>
            </div>
            <Label>Degree :</Label>
            <div>
              <Select name='degree' required={true} defaultValue={profile.degree} onChange={(e)=>handleInputChange(e)}>

              {filterdata.degrees?.map(deg => (  
                 
                 <Option key={deg['name']} value={deg['name']}>{deg['name']}</Option>
              ))}     
     
              </Select>
            </div>
            <Label>Stream :</Label>
            <div>
              <Select name='stream' required={true} defaultValue={profile.stream} onChange={(e)=>handleInputChange(e)}>

              {filterdata.departments?.map(deg => (  
                 
                 <Option key={deg['name']} value={deg['name']}>{deg['name']}</Option>
              ))}     
     
              </Select>
            </div>
            
            <Label>CGPA :</Label>
            <div>
              <Input type='tel' maxLength={4}  name='cgpa' required={true} defaultValue={profile.cgpa} onChange={handleInputChange} placeholder="Enter your CGPA" />
            </div>
            <Label>Phone Number :</Label>
            <Input type="tel" required maxLength={10} defaultValue={profile.phoneNumber} name='phoneNumber' onChange={handleInputChange} placeholder="Enter your phone number" />
          </Grid>
        </LeftContainer>
        <RightContainer>
          {image?<ProfileImage src={URL.createObjectURL(image)}  />:<ProfileImage src={profiledata.profiles.profilePic}/>}
          <Button onClick={handleImageButtonClick} >Update Image</Button>
          <input
       type="file"
       accept="image/*"
       ref={imageInputRef}
       style={{ display: 'none' }}
       onChange={handleImageChange}
      />
          <Button onClick={handlePdfButtonClick}>Upload Resume</Button>
          <input
          type="file"
          accept="application/pdf"
          ref={pdfInputRef}
          style={{ display: 'none' }}
          onChange={handlePdfChange}
      />

{pdf&& (
  <div>
    <FontAwesomeIcon icon={faFile} /> {pdf.name}
  </div>
)}
        </RightContainer>
      </MainContainer>
      <ButtonContainer>
        <Button onClick={onClose}>Close</Button>
        <Button type='submit' onClick={()=>handleSubmit()}>{profiledata.loading?"Loading...":"Save"}</Button>
      </ButtonContainer>
    </PopupContainer>
  );
};
