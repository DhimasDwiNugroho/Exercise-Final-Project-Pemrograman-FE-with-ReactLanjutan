import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  FormControl,
  Spinner,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';

const EditStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedFaculty, setSelectedFaculty] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/student/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const loadData = {
      fullname: formData.fullname,
      address: formData.address,
      phoneNumber: formData.phoneNumber,
      birthDate: formData.birthDate,
      gender: formData.gender,
      programStudy: formData.programStudy,
      faculty: getFaculty(formData.programStudy),
    };

    fetch(`http://localhost:3001/student/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loadData),
    })
      .then(() => {
        navigate('/student');
      })
      .catch((error) => console.log(error));
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

  if (loading) {
    return (
      <Center>
        <Spinner size="lg" />
        <p>Loading ...</p>
      </Center>
    );
  }

  return (
    <Box className='editform-container'>
      <h1 className='h1-edit'>Edit Student</h1>
      <Box className='container-editform'>
        <img className='image-people' src={formData.profilePicture} alt={formData.fullname} />
        <form onSubmit={handleSubmit}>
          <Box className='form-edit'>
            <FormControl>
              <FormLabel>Full Name:</FormLabel>
              <Input
                type='text'
                name='fullname'
                value={formData.fullname}
                onChange={handleInputChange}
                data-testid='name'
              />
            </FormControl>

            <FormControl>
              <FormLabel>Address:</FormLabel>
              <Input
                type='text'
                name='address'
                value={formData.address}
                onChange={handleInputChange}
                data-testid='address'
              />
            </FormControl>

            <FormControl>
              <FormLabel>Phone Number:</FormLabel>
              <Input
                type='text'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleInputChange}
                data-testid='phoneNumber'
              />
            </FormControl>

            <Box className='date-gender'>
              <FormControl>
                <FormLabel>Date:</FormLabel>
                <Input
                  type='date'
                  name='birthDate'
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  data-testid='date'
                />
              </FormControl>

              <FormControl>
                <FormLabel>Gender:</FormLabel>
                <Select
                  id='gender'
                  name='gender'
                  value={formData.gender}
                  onChange={handleInputChange}
                  data-testid='gender'
                >
                  <option value=''>Select Gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </Select>
              </FormControl>
            </Box>

            <FormControl>
              <FormLabel>Prody</FormLabel>
              <Select
                type='text'
                id='programStudy'
                name='programStudy'
                value={formData.programStudy}
                onChange={(event) => {
                  const programStudy = event.target.value;
                  const faculty = getFaculty(programStudy);
                  setSelectedFaculty(faculty);
                  handleInputChange(event);
                }}
                data-testid='prody'
              >
                <option value=''>- Select Program Study -</option>
                <option value='Ekonomi'>Ekonomi</option>
                <option value='Manajemen'>Manajemen</option>
                <option value='Akuntansi'>Akuntansi</option>
                <option value='Administrasi Publik'>Administrasi Publik</option>
                <option value='Administrasi Bisnis'>Administrasi Bisnis</option>
                <option value='Hubungan Internasional'>Hubungan Internasional</option>
                <option value='Teknik Sipil'>Teknik Sipil</option>
                <option value='Arsitektur'>Arsitektur</option>
                <option value='Matematika'>Matematika</option>
                <option value='Fisika'>Fisika</option>
                <option value='Informatika'>Informatika</option>
              </Select>
            </FormControl>

            <Button colorScheme='blue' color='white' className='edit-btn' type='submit' data-testid='edit-btn'>
              Edit Student
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default EditStudent;
