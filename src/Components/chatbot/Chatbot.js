import React from 'react';
import "../Styles/Chatbot.css";
import ChatBot from 'react-simple-chatbot';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      symptoms: [],
      disease: '',
    };
  }

  render() {
    const { name, age, symptoms, disease } = this.state;

    const handleEnd = ({ steps, values }) => {
  const { name, age, symptoms } = values;
  // Ensure symptoms is an array
  const selectedSymptoms = Array.isArray(symptoms) ? symptoms : [];
  let suggestedDisease = '';

  // Check for specific symptoms and suggest corresponding disease
  if (selectedSymptoms.includes('Fever') && selectedSymptoms.includes('Cough')) {
    suggestedDisease = 'Common Cold';
  } else if (selectedSymptoms.includes('Fever') && selectedSymptoms.includes('Fatigue')) {
    suggestedDisease = 'Flu';
  } else if (selectedSymptoms.includes('Headache')) {
    suggestedDisease = 'Migraine';
  } else {
    suggestedDisease = 'Unknown';
  }

  this.setState({ name, age, symptoms: selectedSymptoms, disease: suggestedDisease });
};

    

    return (
      <ChatBot
        headerTitle="Telemedicine Chatbot"
        steps={[
          {
            id: '1',
            message: 'Welcome to Telemedicine Chatbot! What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
            validator: (value) => {
              if (/^[A-Za-z\s]+$/.test(value)) {
                return true;
              } else {
                return 'Please enter a valid name (only alphabets and spaces)';
              }
            },
          },
          {
            id: '3',
            message: 'Hi {previousValue}, please enter your age.',
            trigger: 'age',
          },
          {
            id: 'age',
            user: true,
            trigger: '5',
            validator: (value) => {
              if (isNaN(value)) {
                return 'Age must be a number.';
              } else if (parseInt(value) <= 0) {
                return 'Age must be a positive number.';
              } else {
                return true;
              }
            },
          },
          {
            id: '5',
            message: 'Please select the symptoms you are experiencing:',
            trigger: 'symptoms',
          },
          {
            id: 'symptoms',
            options: [
              { value: 'Fever', label: 'Fever', trigger: 'symptoms' },
              { value: 'Cough', label: 'Cough', trigger: 'symptoms' },
              { value: 'Headache', label: 'Headache', trigger: 'symptoms' },
              { value: 'Fatigue', label: 'Fatigue', trigger: 'symptoms' },
              { value: 'Other', label: 'Other', trigger: 'disease' },
              { value: 'None', label: 'None', trigger: 'disease' },
            ],
            trigger: '6',
          },
          {
            id: 'disease',
            message: ({ previousValue }) => {
              if (previousValue === 'None') {
                return 'Based on your input, you seem to be healthy. If you have further concerns, please consult a healthcare professional.';
              } else if (previousValue === 'Other') {
                return 'Based on your symptoms, it is advisable to consult a doctor for a proper diagnosis.';
              } else {
                return `Based on your symptoms, you might be having ${disease}. Please consult a doctor for further evaluation.`;
              }
            },
            end: true,
          },
        ]}
        floating={true}
        handleEnd={handleEnd}
      />
    );
  }
}

export default App;
