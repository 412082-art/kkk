const form = document.getElementById('bmi-form');
const resultSection = document.getElementById('result');
const bmiValue = document.getElementById('bmi-value');
const bmiCategory = document.getElementById('bmi-category');

function getBmiCategory(bmi) {
  if (bmi < 18.5) return { label: '體重過輕', className: 'category-warning' };
  if (bmi < 24) return { label: '正常範圍', className: 'category-normal' };
  if (bmi < 27) return { label: '過重', className: 'category-overweight' };
  return { label: '肥胖', className: 'category-obese' };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const height = parseFloat(form.height.value);
  const weight = parseFloat(form.weight.value);

  if (!height || height <= 0 || !weight || weight <= 0) {
    bmiValue.textContent = '輸入錯誤';
    bmiCategory.textContent = '請輸入正確的身高與體重。';
    resultSection.classList.remove('hidden');
    resultSection.querySelector('strong').className = '';
    return;
  }

  const bmi = weight / (height * height);
  const formatted = bmi.toFixed(2);
  const category = getBmiCategory(bmi);

  bmiValue.textContent = formatted;
  bmiCategory.textContent = category.label;
  resultSection.classList.remove('hidden');
  bmiValue.className = category.className;
  bmiCategory.className = category.className;
});
