import requests
from django.shortcuts import render

import os

my_secret = os.environ['newsApiKey']
DEBUG = os.environ.get('DEBUG') == 'True'


def home(request):
  # meals API
  response = requests.get(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=')
  data = response.json()
  meals = data['meals'][0:8]

  # news API
  response = requests.get(
      f'https://newsapi.org/v2/top-headlines?country=us&apikey={my_secret}')
  data = response.json()
  newslist = data['articles']

  return render(request, 'templates/index.html', {
      'meals': meals,
      'newslist': newslist
  })
