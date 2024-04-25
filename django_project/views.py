import requests
from django.shortcuts import render


def home(request):
  # using API
  response = requests.get(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=')
  data = response.json()
  meal = data['meals'][0]['strMeal']

  return render(request, 'templates/index.html', {'meal': meal})
