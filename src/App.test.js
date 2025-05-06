import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from './App';

describe('API and Backend Function Tests', () => {
  let mock;
  const userId = 'user123';
  const mockUserData = {
    userId: userId,
    name: 'John Doe',
    initialWeight: 80,
    currentWeight: 75,
    goalWeight: 70,
    maxDailySodium: 2000,
    daysFollowed: 5,
    totalDays: 7,
    weeklyProgress: 5,
    dailyCalorieLimit: 2000,
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
    {
      mealId: 'meal3',
      name: 'High Sodium Meal',
      ingredients: ['Sausage', 'Bacon', 'Cheese'],
      calorieCount: 500,
      sodiumContent: 2500,
      dietaryCategory: 'high sodium',
    },
  ];

  beforeEach(() => {
    mock = new MockAdapter(axios);

    mock.onGet(`/user/${userId}`).reply(200, mockUserData);
    mock.onGet(`/mealplan/${userId}`).reply(200, mockMealPlanData);
    mock.onPost(`/progress/${userId}`).reply(200, (config) => {
      const updatedData = { ...mockUserData, ...JSON.parse(config.data) };
      return [200, updatedData];
    });
  });

  afterEach(() => {
    mock.restore();
  });

  it('should fetch user data correctly', async () => {
    const response = await axios.get(`/user/${userId}`);
    expect(response.status).toBe(200);
    expect(response.data).toEqual(mockUserData);
  });

  it('should fetch meal suggestions that match low-sodium criteria', async () => {
    const userResponse = await axios.get(`/user/${userId}`);
    const user = userResponse.data;

    const response = await axios.get(`/mealplan/${userId}`);
    const filteredMeals = response.data.filter((meal) => meal.sodiumContent < user.maxDailySodium);

    expect(response.status).toBe(200);
    expect(filteredMeals.length).toBeGreaterThan(0);
    filteredMeals.forEach((meal) => {
      expect(meal.sodiumContent).toBeLessThan(user.maxDailySodium);
    });
  });

  it('should update user progress data correctly', async () => {
    const progressData = { currentWeight: 72, daysFollowed: 6, totalDays: 7 };
    const response = await axios.post(`/progress/${userId}`, progressData);

    expect(response.status).toBe(200);
    expect(response.data.currentWeight).toBe(progressData.currentWeight);
    expect(response.data.daysFollowed).toBe(progressData.daysFollowed);
    expect(response.data.totalDays).toBe(progressData.totalDays);
  });
});