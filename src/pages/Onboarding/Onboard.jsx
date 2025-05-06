import React, { useState } from 'react';

const onboardingSteps = [
  {
    id: "fName",
    question: "What's your first name?",
    sub: "We're happy you're here. Let's get to know a little about you.",
    textbox: true,
  },
  {
    id: "goals",
    question: "What is your primary reason for using NutriPlan?",
    sub: "Select up to 3 that are important to you, including one weight goal.",
    multiSelect: true,
    options: [
      { label: "Improve nutrition", sub: "" },
      { label: "Support fitness goals", sub: "" },
      { label: "Explore new cuisines", sub: "" },
      { label: "Modify my diet", sub: "" },
      { label: "Manage a medical condition", sub: "" }
    ],
  },
  {
    id: "fitnessGoal",
    question: (name) => `Thanks ${name}! Now for your fitness goals.`,
    sub: "What do you plan to achieve?",
    options: [
      { label: "Lose weight", sub: "" },
      { label: "Maintain weight", sub: "" },
      { label: "Gain weight", sub: "" },
      { label: "Gain muscle", sub: "" }
    ],
  },
  {
    id: "barrierWeight",
    question: "In the past, what have been your barriers to losing weight?",
    sub: "Select all that apply.",
    multiSelect: true,
    options: [
      { label: "Lack of time", sub: "" },
      { label: "Difficult to make food choices", sub: "" },
      { label: "Food cravings", sub: "" },
      { label: "Portion control", sub: "" },
      { label: "Social eating and events", sub: "" }
    ],
  },
  {
    id: "activityLevel",
    question: "What is your baseline activity level?",
    sub: "Not including workouts - we count that separately.",
    options: [
      { label: "Not Very Active", sub: "Spend most of the day sitting (e.g., Bank Teller, Desk Job)" },
      { label: "Lightly Active", sub: "Spend a good part of the day on your feet (e.g., Teacher, Salesperson)" },
      { label: "Active", sub: "Spend most of the day doing physical activity (e.g., Food Server, Dancer)" },
      { label: "Very Active", sub: "Spend the day doing heavy physical activity (e.g., Carpenter, Farmer)" }
    ]
  },
  {
    id: "personalInfo",
    question: "",
    sub: "",
    form: true,
  },
  {
    id: "physicalInfo",
    question: "",
    form: true,
  },
  {
    id: "weeklyGoal",
    question: "What is your weekly goal?",
    sub: "Let's break down your overall health goal into a weekly one you can maintain. Slow and steady is best!",
    options: [
      { label: "Lose 0.25 kilograms per week", sub: "" },
      { label: "Lose 0.5 kilograms per week (recommended)", sub: "" },
      { label: "Lose 0.75 kilograms per week", sub: "" },
      { label: "Lose 1 kilogram per week", sub: "" }
    ],
  },
  {
    id: "diet",
    question: "Pick your diet",
    sub: "",
    options: [
      { label: "Classic", sub: "Holds no bounds" },
      { label: "Low Carb", sub: "Easy on the carbs" },
      { label: "Keto", sub: "Ultra low carb" },
      { label: "Flexiterian", sub: "Easy on the meat" },
      { label: "Vegeterian", sub: "Zero meat" },
      { label: "Vegan", sub: "Only plants" },
      { label: "Paleo", sub: "Eat like a caveman" },
    ],
  },
  {
    id: "dislikes",
    question: "Any dislikes",
    sub: "",
    multiSelect: true,
    options: [
      { label: "Fufu", sub: "" },
      { label: "Amala", sub: "" },
      { label: "Fried fish", sub: "" },
      { label: "Pork", sub: "" },
      { label: "Onion", sub: "" },
      { label: "Other (please specify)", sub: "" },
    ],
  },
  {
    id: "reminder",
    question: "When would you like to plan your meals?",
    sub: "When life gets busy, it's best to plan your week in advance. That way you'll alway stay on top of things",
    reminder: true,
  }
];

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    fName: "",
    goals: [],
    gender: "",
    birthdate: "",
    country: "",
    heightFeet: "",
    heightInches: "",
    weightlossBarrier:[],
    currentWeight: "",
    goalWeight: "",
    diet:"",
    dislikes:[],
    reminderDay: "",
    reminderTime: "",
  });

  const handleSelect = (selectedLabel) => {
    const currentStep = onboardingSteps[step];
    const stepId = currentStep.id;
  
    if (currentStep.multiSelect) {
      setAnswers((prev) => {
        const existing = prev[stepId] || [];
        let updated;
  
        if (existing.includes(selectedLabel)) {
          updated = existing.filter((label) => label !== selectedLabel);
        } else {
          if (stepId === "goals" && existing.length >= 3) return prev;
          updated = [...existing, selectedLabel];
        }
  
        return { ...prev, [stepId]: updated };
      });
    } else {
      setAnswers((prev) => ({ ...prev, [stepId]: selectedLabel }));
      handleNext();
    }
  };
  
  const handleInputChange = (event) => {
    setAnswers({ ...answers, [event.target.name]: event.target.value });
  };

  const handleNext = () => {
    if (step < onboardingSteps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className='container'>
      <div className='box'>
        {step < onboardingSteps.length ? (
          <div>
            <h2 className='question'>
              {typeof onboardingSteps[step].question === "function"
                ? onboardingSteps[step].question(answers.fName)
                : onboardingSteps[step].question}
            </h2>
            <p className='sub'>{onboardingSteps[step].sub}</p>
            

            {onboardingSteps[step].textbox ? (
              <div className='form' style={{ width: '90%' }}>
                <input
                  type="text"
                  name="fName"
                  value={answers.fName}
                  onChange={handleInputChange}
                  className='input'
                  placeholder="Enter your first name"
                />
              </div>
              
            ) : onboardingSteps[step].form ? (
              <div className='form'>
                {onboardingSteps[step].id === "personalInfo" && (
                  <>
                    <div>
                      <label className='label'>Please select which sex should be used to calculate your caloric needs</label>
                      <div>
                        <label>
                          <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={answers.gender === "Male"}
                            onChange={handleInputChange}
                          />
                          Male
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={answers.gender === "Female"}
                            onChange={handleInputChange}
                          />
                          Female
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className='label'>When were you born?</label>
                      <input
                        type="date"
                        name="birthdate"
                        value={answers.birthdate}
                        onChange={handleInputChange}
                        className='input'
                      />
                    </div>

                    <div>
                      <label className='label'>Where do you live?</label>
                      <select
                        name="country"
                        value={answers.country}
                        onChange={handleInputChange}
                        className='input'
                      >
                        <option value="">Select Country</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Nigeria">Nigeria</option>
                      </select>
                    </div>
                    <p id='fineprint'>We use this information to calculate an accurate caloric goal for you.</p>
                  </>
                )}


{onboardingSteps[step].id === "physicalInfo" && (
  <>
    {/* Height */}
    <label className='label'>How tall are you?</label>
    <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
      <div style={{ flex: 1 }}>
        <input
          type="number"
          name="heightFeet"
          value={answers.heightFeet}
          onChange={handleInputChange}
          className='input'
          placeholder="Height(feet)"
          min="0"
         />
        <span style={{ marginLeft: '-20px' }}>Ft</span>
      </div>
      <div style={{ flex: 1 }}>
        <input
          type="number"
          name="heightInches"
          value={answers.heightInches}
          onChange={handleInputChange}
          className='input'
          placeholder="Height(inches)"
          min="0"
        />
        <span style={{ marginLeft: '-20px' }}>In</span>

      </div>
    </div>

    {/* Current Weight */}
    <div style={{ marginTop: '16px' }}>
      <label className='label'>How much do you weigh?</label>
      <p id="fineprint">It's okay to estimate. You can update this later.</p>
      <input
        type="number"
        name="currentWeight"
        value={answers.currentWeight}
        onChange={handleInputChange}
        className='input'
        placeholder="Current weight"
        min="0"
      />
      <span style={{ marginLeft: '-20px' }}>Kg</span>      
    </div>

    {/* Goal Weight */}
    <div style={{ marginTop: '16px' }}>
      <label className='label'>What is your goal weight?</label>
      <p id="fineprint">Don't worry, this doesn't affect your daily calorie goal and you can always change it later.</p>
      <input
        type="number"
        name="goalWeight"
        value={answers.goalWeight}
        onChange={handleInputChange}
        className='input'
        placeholder="Goal weight"
        min="0"
      />
      <span style={{ marginLeft: '-20px' }}>Kg</span>
    </div>
  </>
)}
                
              </div>
) : (
  <div className='options'>
    {onboardingSteps[step].options?.map((option) => {
      const stepId = onboardingSteps[step].id;
      const isSelected = onboardingSteps[step].multiSelect
        ? answers[stepId]?.includes(option.label)
        : answers[stepId] === option.label;

      return (
        <button
          key={option.label}
          className={`optionButton ${isSelected ? 'selected' : ''}`}
          onClick={() => handleSelect(option.label)}
        >
          <strong>{option.label}</strong>
          <br />
          <small className='optionSubText'>{option.sub}</small>
        </button>
      );
    })}
  </div>
)}
{onboardingSteps[step].reminder && (
  <div className="form">
    {/* Day of the week */}
    <div style={{ marginBottom: '16px' }}>
      <label className="label">Choose a day</label>
      <select
        name="reminderDay"
        value={answers.reminderDay || ""}
        onChange={handleInputChange}
        className="input"
      >
        <option value="">Select a day</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
    </div>

    {/* Time of day */}
    <div style={{ marginBottom: '24px' }}>
      <label className="label">Choose a time</label>
      <input
        type="time"
        name="reminderTime"
        value={answers.reminderTime || ""}
        onChange={handleInputChange}
        className="input"
      />
    </div>

    {/* Buttons */}
    <div style={{ display: 'flex', gap: '12px' }}>
      <button
        className="button primary"
        onClick={() => {
          if (answers.reminderDay && answers.reminderTime) {
            // Save or send reminder info
            console.log("Reminder set:", {
              day: answers.reminderDay,
              time: answers.reminderTime
            });
          } else {
            alert("Please select both a day and a time.");
          }
        }}
      >
        Set Reminder
      </button>

      <button
        className="button secondary"
        onClick={() => {
          // Clear or nullify reminder info
          handleInputChange({ target: { name: "reminderDay", value: "" } });
          handleInputChange({ target: { name: "reminderTime", value: "" } });
        }}
      >
        Not Now
      </button>
    </div>
  </div>
)}



            <div className='buttonContainer'>
              {step > 0 && <button className='button' onClick={handleBack}>Back</button>}
              <button className='button' onClick={handleNext}>Next</button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className='finalText'>You're all set!</h2>
            <p className='summary'>Your preferences have been saved, and we’ll tailor meal plans just for you!</p>
            <button className='button' onClick={() => alert("Preferences saved!")}>Finish</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;