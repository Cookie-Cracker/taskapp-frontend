/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import {
  Stack,
  TextInput,
  ButtonGroup,
  Button,
  Popover,
  useDisclosure,
  PopoverTrigger,
  PopoverContent,
  FormControl,
  Input,
  Box,
  HStack,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';

import { FiCalendar, FiXCircle } from 'react-icons/fi';
import DueDateButton from '../DueDateButton/';
import {
  FaCalendarAlt,
  FaCouch,
  FaCalendarCheck,
  FaChevronCircleRight,
} from 'react-icons/fa';

let _date = new Date();
const dpConfig = {
  minDate: _date.setDate(_date.getDate() - 1),
};
const Form = ({ firstFieldRef, onCancel, due, setDue }) => {
  const [date, setDate] = useState(due);
  useEffect(() => {
    if (date) {
      setDue(date);
    }
  }, [date, setDue]);
  console.log('date', date);

  // const handleDueDateClick = value => {
  //   let date = new Date();
  //   switch (value) {
  //     case 'today':
  //       setDate(new Date().toISOString().substring(0, 10));
  //       break;
  //     case 'tomorrow':
  //       date.setDate(date.getDate() + 1);
  //       setDate(date.toISOString().substring(0, 10));
  //       break;
  //     case 'this-weekend':
  //       date.setDate(date.getDate() - date.getDay() + 6);
  //       setDate(date.toISOString().substring(0, 10));
  //       break;
  //     case 'next-week':
  //       date.setDate(date.getDate() - date.getDay() + 8);
  //       setDate(date.toISOString().substring(0, 10));
  //       break;
  //     case 'no-date':
  //       setDate(undefined);
  //       break;

  //     default:
  //       break;
  //   }
  // };
  // const formatDate = date => date.toISOString().substring(0, 10);
  // const formatDate = date => date.toISOString().substring(0, 10);
  // const formatDate = (date, format = 'yyyy-MM-dd') => {
  //   const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  //   return date
  //     .toLocaleDateString('en-US', options)
  //     .replace(/(\d{4})-(\d{2})-(\d{2})/, format);
  // };
  function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;
  }

  const handleDueDateClick = value => {
    let date = new Date();
    switch (value) {
      case 'today':
        setDate(formatDate(new Date()));
        break;
      case 'tomorrow':
        date.setDate(date.getDate() + 1);
        setDate(formatDate(date));
        break;
      case 'this-weekend':
        date.setDate(date.getDate() - date.getDay() + 6);
        setDate(formatDate(date));
        break;
      case 'next-week':
        date.setDate(date.getDate() - date.getDay() + 8);
        setDate(formatDate(date));
        break;
      case 'no-date':
        setDate(undefined);
        break;
      default:
        break;
    }
  };

  return (
    <Box d="flex" p={2} minW={'150px'}>
      <VStack maxW={'full'}>
        //! The DatePicker
        <SingleDatepicker
          name="date-input"
          // date={date}
          onDateChange={setDate}
          {...dpConfig}
        />
        <DueDateButton
          onClick={() => handleDueDateClick('today')}
          leftIcon={<FaCalendarAlt color="green" />}
        >
          Today
        </DueDateButton>
        <DueDateButton
          onClick={() => handleDueDateClick('tomorrow')}
          leftIcon={<FaCalendarCheck color="teal" />}
        >
          Tomorrow
        </DueDateButton>
        <DueDateButton
          onClick={() => handleDueDateClick('this-weekend')}
          leftIcon={<FaCouch color="blue" />}
        >
          This Weekend
        </DueDateButton>
        <DueDateButton
          onClick={() => handleDueDateClick('next-week')}
          leftIcon={<FaChevronCircleRight color="purple" />}
        >
          Next Week
        </DueDateButton>
        <Divider />
        <DueDateButton
          onClick={() => handleDueDateClick('no-date')}
          leftIcon={<FiXCircle color="red" />}
        >
          No Date
        </DueDateButton>
      </VStack>
    </Box>
  );
};
const DuePopOver = ({ setDue }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const popOver = (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      placement="bottom-start"
      // closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button leftIcon={<FiCalendar />} variant={'menu'}>
          Due
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Form setDue={setDue} />
      </PopoverContent>
    </Popover>
  );

  return popOver;
};

export default DuePopOver;
