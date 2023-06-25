import React, { useEffect, useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Select,
  Center,
  Spinner,
  Button,
} from '@chakra-ui/react';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    filterStudentsByFaculty();
  }, [students, selectedFaculty]);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:3001/student');
      const data = await response.json();
      setStudents(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const filterStudentsByFaculty = () => {
    if (selectedFaculty === 'All') {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(
        (student) => student.faculty === selectedFaculty
      );
      setFilteredStudents(filtered);
    }
  };

  const handleFacultyChange = (event) => {
    setSelectedFaculty(event.target.value);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: 'DELETE',
      });
      const updatedStudents = students.filter((student) => student.id !== id);
      setStudents(updatedStudents);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box className='test-table-container'>
        <Box className='title-filter'>
          <h1>All Students</h1>
          <Box className='container-filter'>
            <Select
              value={selectedFaculty}
              onChange={handleFacultyChange}
              data-testid='filter'
            >
              <option value='All'>All</option>
              <option value='Fakultas Ekonomi'>Fakultas Ekonomi</option>
              <option value='Fakultas Ilmu Sosial dan Politik'>
                Fakultas Ilmu Sosial dan Politik
              </option>
              <option value='Fakultas Teknik'>Fakultas Teknik</option>
              <option value='Fakultas Teknologi Informasi dan Sains'>
                Fakultas Teknologi Informasi dan Sains
              </option>
            </Select>
          </Box>
        </Box>

        {loading ? (
          <Center>
            <p>Loading ...</p>
            <Spinner size='xl' />
          </Center>
        ) : filteredStudents.length > 0 ? (
          <Table variant='simple' id='table-student' className='test-table'>
            <Thead className='test-thead'> 
              <Tr>
                <Th>No</Th>
                <Th>Full Name</Th>
                <Th>Faculty</Th>
                <Th>Program Study</Th>
                <Th>Option</Th>
              </Tr>
            </Thead>
            <Tbody className='test-tbody'>
              {filteredStudents.map((student, index) => (
                <Tr key={student.id} className='student-data-row test-tr'>
                  <Td>{index + 1}</Td>
                  <Td>
                    <Link href={`/student/${student.id}`}>{student.fullname}</Link>
                  </Td>
                  <Td>{student.faculty}</Td>
                  <Td>{student.programStudy}</Td>
                  <Td>
                    <Button
                      className='btn-delete'
                      data-testid={`delete-${student.id}`}
                      onClick={() => handleDelete(student.id)}
                      colorScheme='red'
                      color="white"
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <Center>No students found.</Center>
        )}
      </Box>
    </>
  );
};

export default Student;
