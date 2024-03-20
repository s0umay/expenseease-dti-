// Function to simulate a wait
export const waait = () => new Promise(res => setTimeout(res, Math.random() * 2000));

// Function to generate a random color
const generateRandomColor = () => {
  const existingBudgets = fetchData("budgets") || [];
  const existingBudgetLength = existingBudgets.length;
  return `${existingBudgetLength * 34} 65% 50%`;
};

// Function to fetch data from localStorage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Function to create a new budget item
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor()
  };
  const existingBudgets = fetchData("budgets") || [];
  localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]));
};

// Function to delete an item from localStorage
export const deleteItem = ({ key }) => {
  localStorage.removeItem(key);
};
