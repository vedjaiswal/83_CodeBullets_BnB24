import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    const { steps } = this.props;
    console.log('Steps:', steps); // Debug output
    const { symptoms } = steps;
    console.log('Symptoms:', symptoms); // Debug output
    let suggestedDisease = '';
    let message = '';
    let flag = true;

    if (Array.isArray(symptoms) && symptoms.includes('None') && symptoms.length === 3) {
      flag = false;
      message = 'Based on your input, you seem to be having symptoms of Pneumonia. Please book an online appointment with our doctors for further evaluation.';
    } else {
      if (Array.isArray(symptoms)) {
        if (symptoms.includes('Fever') && symptoms.includes('Cough')) {
          suggestedDisease = 'Common Cold';
        } else if (symptoms.includes('Fever') && symptoms.includes('Fatigue')) {
          suggestedDisease = 'Flu';
        } else if (symptoms.includes('Headache')) {
          suggestedDisease = 'Migraine';
        } else if (symptoms.includes('Nausea') && symptoms.includes('Vomiting')) {
          suggestedDisease = 'Stomach Flu';
        } else if (symptoms.includes('Chest Pain') && symptoms.includes('Shortness of Breath')) {
          suggestedDisease = 'Pneumonia';
        } else if (symptoms.includes('Rash') && symptoms.includes('Joint Pain')) {
          suggestedDisease = 'Dengue Fever';
        } else {
          suggestedDisease = 'Common Cold and Flu';
        }
      } else {
        suggestedDisease = 'Common Cold and Flu';
      }

      if (flag) {
        message = `Based on your symptoms, you might be having ${suggestedDisease}. Please book an online appointment with our doctors for further evaluation.`;
      }
    }

    this.setState({ message });
  }

  render() {
    const { message } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <p>{message}</p>
      </div>
    );
  }
}

Result.propTypes = {
  steps: PropTypes.object,
};

Result.defaultProps = {
  steps: undefined,
};

class Chatbot extends React.Component {
  render() {
    return (
      <ChatBot
        headerTitle="WellCare Chatbot"
        recognitionEnable={true}
        speechSynthesis={{ enable: true, lang: 'en' }}
        steps={[
          {
            id: '1',
            message: 'Welcome to Telemedicine Chatbot! What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: 'age',
            validator: (value) => (/^[A-Za-z\s]+$/.test(value) ? true : 'Please enter a valid name (only alphabets and spaces)'),
          },
          {
            id: 'age',
            message: 'Hi {previousValue}, please enter your age.',
            trigger: 'ageInput',
          },
          {
            id: 'ageInput',
            user: true,
            trigger: 'symptoms',
            validator: (value) => (!isNaN(value) && parseInt(value) > 0 ? true : 'Age must be a positive number.'),
          },
          {
            id: 'symptoms',
            message: 'Please select the symptoms you are experiencing:',
            trigger: 'symptomsOptions',
          },
          {
            id: 'symptomsOptions',
            options: [
              { value: 'Fever', label: 'Fever', trigger: 'symptomsOptions' },
              { value: 'Cough', label: 'Cough', trigger: 'symptomsOptions' },
              { value: 'Headache', label: 'Headache', trigger: 'symptomsOptions' },
              { value: 'Fatigue', label: 'Fatigue', trigger: 'symptomsOptions' },
              { value: 'Nausea', label: 'Nausea', trigger: 'symptomsOptions' },
              { value: 'Vomiting', label: 'Vomiting', trigger: 'symptomsOptions' },
              { value: 'Chest Pain', label: 'Chest Pain', trigger: 'symptomsOptions' },
              { value: 'Shortness of Breath', label: 'Shortness of Breath', trigger: 'symptomsOptions' },
              { value: 'Rash', label: 'Rash', trigger: 'symptomsOptions' },
              { value: 'Joint Pain', label: 'Joint Pain', trigger: 'symptomsOptions' },
              { value: 'Other', label: 'Other', trigger: 'disease' },
              { value: 'None', label: 'None', trigger: 'disease' },
            ],
            trigger: 'disease', // Automatically go to disease step after symptoms selection
            hideInput: true, // Hide user input after selecting symptoms
          },
          {
            id: 'disease',
            component: <Result />,
            asMessage: true,
            end: true,
          },
        ]}
        floating={true}
      />
    );
  }
}

export default Chatbot;
