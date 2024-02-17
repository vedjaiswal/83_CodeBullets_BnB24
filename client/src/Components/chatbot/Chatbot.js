import React from 'react';
import ChatBot from 'react-simple-chatbot';

class Chatbot extends React.Component {
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
      const selectedSymptoms = Array.isArray(symptoms) ? symptoms : [];
      let suggestedDisease = '';

      // Check for specific symptoms and suggest corresponding disease
      if (selectedSymptoms.includes('Fever') && selectedSymptoms.includes('Cough')) {
        suggestedDisease = 'Common Cold';
      } else if (selectedSymptoms.includes('Fever') && selectedSymptoms.includes('Fatigue')) {
        suggestedDisease = 'Flu';
      } else if (selectedSymptoms.includes('Headache')) {
        suggestedDisease = 'Migraine';
      } else if (selectedSymptoms.includes('Nausea') && selectedSymptoms.includes('Vomiting')) {
        suggestedDisease = 'Stomach Flu';
      } else if (selectedSymptoms.includes('Chest Pain') && selectedSymptoms.includes('Shortness of Breath')) {
        suggestedDisease = 'Pneumonia';
      } else if (selectedSymptoms.includes('Rash') && selectedSymptoms.includes('Joint Pain')) {
        suggestedDisease = 'Dengue Fever';
      } else {
        suggestedDisease = 'Unknown';
      }

      this.setState({ name, age, symptoms: selectedSymptoms, disease: suggestedDisease });
    };

    return (
      <ChatBot
        headerTitle="WellCare Chatbot"
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
            message: ({ previousValue }) => {
              if (previousValue === 'None') {
                return 'Based on your input, you seem to be healthy. If you have further concerns, please consult a healthcare professional.';
              } else if (previousValue === 'Other') {
                return `Based on your symptoms, you might be having ${this.state.disease}. Please consult a doctor for further evaluation.`;
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

export default Chatbot;
