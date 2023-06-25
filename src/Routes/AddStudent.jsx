import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Heading,
  Input,
  Select,
  Button,
  Spinner,
} from '@chakra-ui/react';

const AddStudent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    profilePicture: '',
    address: '',
    phoneNumber: '',
    birthDate: '',
    gender: '',
    programStudy: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      fullname: formData.fullname,
      profilePicture: formData.profilePicture,
      address: formData.address,
      phoneNumber: formData.phoneNumber,
      birthDate: formData.birthDate,
      gender: formData.gender,
      faculty: getFaculty(formData.programStudy),
      programStudy: formData.programStudy,
    };

    setIsLoading(true);
    fetch('http://localhost:3001/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(() => {
        navigate('/student');
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getFaculty = (programStudy) => {
    switch (programStudy) {
      case 'Ekonomi':
      case 'Manajemen':
      case 'Akuntansi':
        return 'Fakultas Ekonomi';
      case 'Administrasi Publik':
      case 'Administrasi Bisnis':
      case 'Hubungan Internasional':
        return 'Fakultas Ilmu Sosial dan Politik';
      case 'Teknik Sipil':
      case 'Arsitektur':
        return 'Fakultas Teknik';
      case 'Matematika':
      case 'Fisika':
      case 'Informatika':
        return 'Fakultas Teknologi Informasi dan Sains';
      default:
        return '';
    }
  };

  return (
    <>
      {isLoading ? (
        <Box>
          <p>Loading ...</p>
          <Spinner size='xl' />
        </Box>
      ) : (
        <>
          <Box className='container-form'>
            <Heading as='h1' size='xl'>
              Add Student
            </Heading>
            <form onSubmit={handleSubmit}>
              <Box className='container-form2'>
                <Box className='container-fullname'>
                  <label>Full Name:</label>
                  <Input
                    type='text'
                    name='fullname'
                    value={formData.fullname}
                    onChange={handleInputChange}
                    data-testid='name'
                  />
                </Box>

                <Box className='container-picture'>
                  <label>Profile Picture:</label>
                  <Input
                    type='text'
                    name='profilePicture'
                    value={formData.profilePicture}
                    onChange={handleInputChange}
                    data-testid='profilePicture'
                  />
                </Box>

                <Box className='container-addres'>
                  <label>Address:</label>
                  <Input
                    type='text'
                    name='address'
                    value={formData.address}
                    onChange={handleInputChange}
                    data-testid='address'
                  />
                </Box>

                <Box className='container-number'>
                  <label>Phone Number:</label>
                  <Input
                    type='text'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    data-testid='phoneNumber'
                  />
                </Box>

                <Box className='container-dategender'>
                  <Box className='container-date'>
                    <label>Birth Date:</label>
                    <Input
                      type='date'
                      name='birthDate'
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      data-testid='date'
                      className='input-date'
                    />
                  </Box>

                  <Box className='container-gender'>
                    <label>Gender:</label>
                    <Select
                      name='gender'
                      value={formData.gender}
                      onChange={handleInputChange}
                      data-testid='gender'
                      className='input-gender'
                    >
                      <option value=''>Select Gender</option>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                    </Select>
                  </Box>
                </Box>

                <Box className='container-prody'>
                  <label>Program Study:</label>
                  <Select
                    name='programStudy'
                    value={formData.programStudy}
                    onChange={handleInputChange}
                    data-testid='prody'
                  >
                    <option value=''>- Select Program Study -</option>
                    <option value='Ekonomi'>Ekonomi</option>
                    <option value='Manajemen'>Manajemen</option>
                    <option value='Akuntansi'>Akuntansi</option>
                    <option value='Administrasi Publik'>
                      Administrasi Publik
                    </option>
                    <option value='Administrasi Bisnis'>
                      Administrasi Bisnis
                    </option>
                    <option value='Hubungan Internasional'>
                      Hubungan Internasional
                    </option>
                    <option value='Teknik Sipil'>Teknik Sipil</option>
                    <option value='Arsitektur'>Arsitektur</option>
                    <option value='Matematika'>Matematika</option>
                    <option value='Fisika'>Fisika</option>
                    <option value='Informatika'>Informatika</option>
                  </Select>
                </Box>

                <Button
                  className='add-button'
                  type='submit'
                  data-testid='add-btn'
                  colorScheme='blue'
                  size='lg'
                >
                  Add Student
                </Button>
              </Box>
            </form>
          </Box>
        </>
      )}
    </>
  );
};

export default AddStudent;
