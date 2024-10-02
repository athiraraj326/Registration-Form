import { TextField, FormControl, FormControlLabel, RadioGroup, Radio, InputLabel, MenuItem, Select, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {

  const [studentName, setStudentName] = useState("")
  const [address, setAddress] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [gender, setGender] = useState("")
  const [course, setCourse] = useState("")

  const [isNameInvalid, setIsNameInvalid] = useState(false)
  const [isAddressInvalid, setIsAddressInvalid] = useState(false)
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [isPhoneNumberInvalid, setIsPhoneNumberInvalid] = useState(false)
  const [isBirthDateInvalid, setIsBirthDateInvalid] = useState(false)

  const userDataValidation = (inputData) => {
    const { name, value } = inputData
    // console.log(name,value)
    if (name == "studentName") {
      setStudentName(value)
      !!value.match(/^[a-zA-Z]+ [a-zA-Z]+$/) ? setIsNameInvalid(false) : setIsNameInvalid(true)
    }

    if (name == "address") {
      setAddress(value)
      !!value.match(/^\d+\s+[a-zA-Z]+\s*[a-zA-Z]*\,\s*[a-zA-Z]+\,\s*\d{5}$/) ? setIsAddressInvalid(false) : setIsAddressInvalid(true)
    }

    if (name == "emailAddress") {
      setEmailAddress(value)
      !!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) ? setIsEmailInvalid(false) : setIsEmailInvalid(true)
    }

    if (name == "phoneNumber") {
      setPhoneNumber(value)
      !!value.match(/^\+91\s[789]\d{9}$/) ? setIsPhoneNumberInvalid(false) : setIsPhoneNumberInvalid(true)
    }

    if (name == "birthDate") {
      setBirthDate(value)
      !!value.match(/^(0[1-9]|[12][0-9]|3[01])[-\/](0[1-9]|1[0-2])[-\/](19|20)\d{2}$/) ? setIsBirthDateInvalid(false) : setIsBirthDateInvalid(true)
    }
  }

  const handleRadioButton = (genderData) => {
    setGender(genderData)
    // console.log(genderData);  
  }

  const handleCourseSelection = (courseData) => {
    setCourse(courseData)
    // console.log(courseData);

  }

  const handleSubmit = () => {
    if (studentName && address && emailAddress && phoneNumber && birthDate && gender && course) {
      alert(`Registration successfull!!!
        Name : ${studentName}
        Address : ${address}
        Email ID : ${emailAddress}
        Phone Number : ${phoneNumber}
        Birth Date : ${birthDate}
        Gender : ${gender}
        Course : ${course}`)
    } else {
      alert("Please fill the form completely!!!")
    }
  }

  const handleClearResponse = () => {
    setStudentName("")
    setAddress("")
    setEmailAddress("")
    setPhoneNumber("")
    setBirthDate("")
    setGender("")
    setCourse("")
    setIsNameInvalid(false)
    setIsAddressInvalid(false)
    setIsEmailInvalid(false)
    setIsPhoneNumberInvalid(false)
    setIsBirthDateInvalid(false)
  }


  return (
    <>
      <form className='form-control py-3 px-4'>
        <h2 className='text-primary text-center pb-2 fw-bold'>Registration Form</h2>
        <div className='mb-3'>
          <label className='mb-2'>Full Name</label>
          <TextField onChange={e => userDataValidation(e.target)} fullWidth size='small' value={studentName} name="studentName" id="outlined-basic" label="Enter full name" variant="outlined" />
        </div>

        {
          isNameInvalid && <div className='mb-3 fw-bolder text-danger'>*Please enter your full name</div>
        }

        <div className='mb-3'>
          <label className='mb-2'>Address</label>
          <TextField onChange={e => userDataValidation(e.target)} fullWidth size='small' value={address} name='address' id="outlined-basic" label="No. Street Name, City, State ZIP code" variant="outlined" />
        </div>

        {
          isAddressInvalid && <div className='mb-3 fw-bolder text-danger'>*Invalid Address</div>
        }

        <div className='mb-3'>
          <label className='mb-2'>Email Address</label>
          <TextField onChange={e => userDataValidation(e.target)} fullWidth size='small' value={emailAddress} name='emailAddress' id="outlined-basic" label="Enter email address" variant="outlined" />
        </div>

        {
          isEmailInvalid && <div className='mb-3 fw-bolder text-danger'>*Invalid Email Address</div>
        }

        <div className='d-flex gap-4 mb-3'>
          <div className='d-flex flex-column'>
            <label className='mb-2'>Phone Number</label>
            <TextField onChange={e => userDataValidation(e.target)} size='small' value={phoneNumber} name='phoneNumber' id="outlined-basic" label="Enter mobile number" variant="outlined" />

            {
              isPhoneNumberInvalid && <div className='mt-2 fw-bolder text-danger'>*Invalid Phone Number</div>
            }
          </div>

          <div className='d-flex flex-column'>
            <label className='mb-2'>Birth Date</label>
            <TextField onChange={e => userDataValidation(e.target)} size='small' value={birthDate} name='birthDate' id="outlined-basic" label="dd-mm-yyyy" variant="outlined" />
            {
              isBirthDateInvalid && <div className='mt-2 fw-bolder text-danger'>*Invalid Birth Date</div>
            }
          </div>

        </div>
        <FormControl className='mb-3'>
          <label>Gender</label>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            onChange={e => handleRadioButton(e.target.value)}
            value={gender}
          >
            <div className='d-dlex'>
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </div>
          </RadioGroup>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel size='small' id="course-select-label">Select a Course</InputLabel>
          <Select
            labelId="course-select-label"
            id="course-select"
            label="Course"
            size='small'
            value={course}
            onChange={e => handleCourseSelection(e.target.value)}
          >
            <MenuItem value="Biology">Biology</MenuItem>
            <MenuItem value="Computer Science">Computer Science</MenuItem>
            <MenuItem value="Commerce">Commerce</MenuItem>
            <MenuItem value="Humanities">Humanities</MenuItem>
          </Select>
        </FormControl>

        <div className='d-flex gap-3 mt-4'>
          <Button onClick={handleSubmit} style={{ width: "50%", height: "50px" }} variant="contained">Submit</Button>
          <Button onClick={handleClearResponse} style={{ width: "50%", height: "50px" }} variant="outlined">Clear Response</Button>

        </div>

      </form>

    </>
  )
}

export default App
