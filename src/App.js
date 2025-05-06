import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MockAdapter from 'axios-mock-adapter';

import './styles/Onboard.css'; 
import Homepage from './pages/Homepage/Homepage';
import Onboarding from './pages/Onboarding/Onboard';
import SignInForm from './pages/SignIn/SignInForm';
import SignUpForm from './pages/SignIn/SignUpForm';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import RecipeCard from './pages/Shop/RecipeCard';
import './styles/SignGen.css';
import './styles/Homepage.css';
import './styles/SignIn.css';
import './styles/SignUp.css';
import './styles/RecipeCard.css';
import './styles/MealCard.css';

const App = () => {
  // Define state for user and meal data
  const [user, setUser] = useState(null);
  const [mealPlan, setMealPlan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Simulate a user ID
  const userId = 'user123';

  // Function to fetch user data
  const fetchUserData = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/user/${userId}`);
      setUser(response.data);      
    } catch (err) {
      setError(err.message || 'An error occurred fetching user data.');
    } finally {
      setLoading(false);
    }
  };

  // Function to filter meal by dietary needs
  const filterMealsByDietaryNeeds = (meals, userDietaryNeeds) => {
    return meals.filter(meal => {
      return meal.sodiumContent < userDietaryNeeds.maxDailySodium;
    });
  };

  // Function to calculate user weekly progress
  const calculateWeeklyProgress = (userData) => {
    const { initialWeight, currentWeight } = userData;
    const weightLoss = initialWeight - currentWeight;
    return weightLoss;
  };

  // Function to calculate user adherence percentage
  const calculateAdherencePercentage = (userData) => {
    const { daysFollowed, totalDays } = userData;
    const adherence = (daysFollowed / totalDays) * 100;
    return adherence;
  };

  // Function to fetch meal plan data
  const fetchMealPlan = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const userResponse = await axios.get(`/user/${userId}`);
      const user = userResponse.data;
      const mealsResponse = await axios.get(`/mealplan/${userId}`);
      let meals = mealsResponse.data;
      meals = filterMealsByDietaryNeeds(meals, { maxDailySodium: user.maxDailySodium });
      const response = { data: meals };
      setMealPlan(response.data);
    } catch (err) {
      setError(err.message || 'An error occurred fetching meal plan.');
    } finally {
      setLoading(false);
    }
  };

  // Function to update user progress data
  const updateUserProgress = async (userId, progressData) => {
    if (!progressData) {
      setError('Progress data is required to update user progress.');
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`/progress/${userId}`, progressData);
      const updatedUser = response.data;
      updatedUser.weeklyProgress = calculateWeeklyProgress(updatedUser);
      updatedUser.adherencePercentage = calculateAdherencePercentage(updatedUser);
      setUser(response.data);
    } catch (err) {
      setError(err.message || 'An error occurred updating progress data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData(userId);
    fetchMealPlan(userId);
    const mockProgressData = {
      currentWeight: 72,
      daysFollowed: 6,
      totalDays: 7
    };
    updateUserProgress(userId, mockProgressData);
  }, []);

  // Mock RESTful API implementations
  useEffect(() => {
    const mock = new MockAdapter(axios);

    const mockServer = () => {
      let mockUserData = {
        userId: userId,
        name: 'John Doe',
        initialWeight: 80,
        currentWeight: 75,
        goalWeight: 70,
        maxDailySodium: 2000,
        daysFollowed: 5,
        totalDays: 7,
        weeklyProgress: calculateWeeklyProgress({ initialWeight: 80, currentWeight: 75 }),
        weeklyProgress: 'Improving',
      };

      const mockMealPlanData = [
        {
          mealId: 'meal1',
          name: 'Chicken Salad',
          ingredients: ['Chicken', 'Lettuce', 'Tomato'],
          calorieCount: 350,
          sodiumContent: 200,
          dietaryCategory: 'low sodium',
        },
        {
          mealId: 'meal2',
          name: 'Vegetable Soup',
          ingredients: ['Carrots', 'Potatoes', 'Broccoli'],
          calorieCount: 250,
          sodiumContent: 150,
          dietaryCategory: 'low sodium',
        },
      ];

      mock.onGet(`/user/${userId}`).reply(200, mockUserData);
      mock.onGet(`/mealplan/${userId}`).reply(200, mockMealPlanData);
      mock.onPost(`/progress/${userId}`).reply(200, (config) => {
        if (!config.data) {
          return [400, { error: 'No progress data provided' }];
        }
        try {
          const updatedData = { ...mockUserData, ...JSON.parse(config.data) };
          mockUserData = updatedData;
          return [200, updatedData];
        } catch (err) {
          return [400, { error: 'Invalid progress data format' }];
        }
      });

      return Promise.resolve();
    };

    mockServer();
  }, []);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route 
          path="/Welcome" 
          element={   
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Homepage" 
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Shop" 
          element={
            <ProtectedRoute>
              <RecipeCard />
            </ProtectedRoute>
          } 
        /> 
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;